import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';
import { GameEngine } from './game.engine';
import { Ball, Paddle } from './game.types';
import { PrismaService } from 'src/prisma/prisma.service';

export interface Inputs { up: boolean; down: boolean }

export interface Room {
	roomId: string;
	player1Id: string;
	player2Id: string;
	engine: GameEngine;
	gameInterval: NodeJS.Timeout | null;
	countdownInterval: NodeJS.Timeout | null;
	inputLeft: Inputs;
	inputRight: Inputs;
}

@Injectable()
export class GameService {
	public rooms = new Map<string, Room>();
	// We need reference to the server to emit events. 
	// We will assign this from the Gateway when it connects.
	public server: Server;

	constructor(private readonly prisma: PrismaService) { }

	createRoom(roomId: string, player1Id: string, player2Id: string) {
		const initialBall: Ball = { x: 400, y: 200, radius: 10, dx: 3, dy: 3 };
		const paddleLeft: Paddle = { x: 20, y: 150, width: 15, height: 100, speed: 5, velocity: 0 };
		const paddleRight: Paddle = { x: 765, y: 150, width: 15, height: 100, speed: 5, velocity: 0 };

		const engine = new GameEngine(initialBall, paddleLeft, paddleRight);

		const room: Room = {
			roomId,
			player1Id,
			player2Id,
			engine,
			gameInterval: null,
			countdownInterval: null,
			inputLeft: { up: false, down: false },
			inputRight: { up: false, down: false },
		};

		this.rooms.set(roomId, room);

		// Start the countdown first


		return room;
	}

	public startCountdown(roomId: string) {
		const room = this.rooms.get(roomId);
		if (!room) return;

		let countdown = 3;
		// Initial send
		this.server.to(roomId).emit('countdown', { seconds: countdown });

		room.countdownInterval = setInterval(() => {
			countdown--;
			this.server.to(roomId).emit('countdown', { seconds: countdown });

			if (countdown <= 0) {
				if (room.countdownInterval) clearInterval(room.countdownInterval);
				this.server.to(roomId).emit('gameStart', {});
				this.startGameLoop(roomId);
			}
		}, 1000);
	}

	private startGameLoop(roomId: string) {
		const room = this.rooms.get(roomId);
		if (!room) return;

		room.gameInterval = setInterval(() => {
			// 1. Process Inputs
			room.engine.movePaddleLeft(room.inputLeft.up, room.inputLeft.down);
			room.engine.movePaddleRight(room.inputRight.up, room.inputRight.down);

			// 2. Update Physics
			const gameState = room.engine.update();

			// 3. Check Winner
			const winner = room.engine.getWinner();
			if (winner) {
				this.endGame(roomId, winner);
				return;
			}

			// 4. Broadcast State
			if (this.server) {
				this.server.to(roomId).emit('update', { gameState });
			}

		}, 1000 / 60); // 60 FPS
	}

	handleInput(roomId: string, playerId: string, key: string, pressed: boolean) {
		const room = this.rooms.get(roomId);
		if (!room) return;

		// Determine if player is Left (Player 1) or Right (Player 2)
		const isLeft = (playerId === room.player1Id);
		const inputs = isLeft ? room.inputLeft : room.inputRight;

		if (key === "ArrowUp") inputs.up = pressed;
		if (key === "ArrowDown") inputs.down = pressed;
	}

	async endGame(roomId: string, winner: 'left' | 'right' | 'aborted') {
		const room = this.rooms.get(roomId);
		if (!room) return;
		
		// Stop intervals
		if (room.gameInterval) {
			clearInterval(room.gameInterval);
			room.gameInterval = null;
		}
		if (room.countdownInterval) {
			clearInterval(room.countdownInterval);
			room.countdownInterval = null;
		}

		this.rooms.delete(roomId);

		// Emit game over to both players
		if (this.server) {
			this.server.to(roomId).emit('gameover', {
				winner: winner,
				finalScore: {
					left: room.engine.leftScore,
					right: room.engine.rightScore,
				},
			});
		}

		// Only save match and update stats if game wasn't aborted
		if (winner !== 'aborted') {
			try {
				const winnerId = (winner === 'left' ? '1' : '2');
				const loserId = (winner === 'left' ? '2' : '1');

				// Save match to database
				await this.prisma.match.create({
					data: {
						player1Id: '1',
						player2Id: '2',
						scoreLeft: room.engine.leftScore,
						scoreRight: room.engine.rightScore,
						winnerId: winnerId,
					}
				});

				// Update winner stats (atomic increment)
				await this.prisma.user.update({
					where: { id: winnerId },
					data: { wins: { increment: 1 } }
				});

				// Update loser stats (atomic increment)
				await this.prisma.user.update({
					where: { id: loserId },
					data: { losses: { increment: 1 } }
				});

				console.log(`Match saved successfully. Winner: ${winnerId}`);
			} catch(error) {
				console.error("Failed to save match or update stats:", error);
			}
		} else {
			console.log(`Game ${roomId} aborted - no stats updated`);
		}
	}

	// Helper to find which room a player is in (optional optimization)
	findRoomIdByPlayer(playerId: string): string | undefined {
		for (const [roomId, room] of this.rooms) {
			if (room.player1Id === playerId || room.player2Id === playerId) {
				return roomId;
			}
		}
		return undefined;
	}
}
