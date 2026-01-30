// Shared between client and server

export interface Ball {
	x: number;
	y: number;
	radius: number;
	dx: number;
	dy: number;
}

export interface Paddle {
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
	velocity: number;
}

export interface Player {
	userId: string;
	socketId: string; // Changed from WebSocket to socketId (string) for NestJS
}

export interface GameState {
	roomId: string;
	leftPaddleY: number;
	rightPaddleY: number;
	ballX: number;
	ballY: number;
	leftScore: number;
	rightScore: number;
}

export interface Message {
	type: "initGame" | "update" | "keydown" | "keyup" | "gameover",
	data?: any;
}

export type PlayerRole = "left" | "right";

export type ServerMessage =
	{ type: "initGame"; data: any }
	| { type: "update"; gameState: GameState }

export const CANVAS = {
	WIDTH: 800,
	HEIGHT: 400,
} as const
