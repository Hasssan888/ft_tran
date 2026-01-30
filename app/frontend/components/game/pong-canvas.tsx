"use client"

import { useRef, useEffect, useState } from "react";
import { GameState, Paddle, Ball, CANVAS, ServerMessage, PlayerRole } from "@/types/gameTypes";
import { io, Socket } from "socket.io-client";

export default function PongCanvas() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const wsRef = useRef<Socket | null>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const paddleLeftRef = useRef<Paddle | null>(null);
	const paddleRightRef = useRef<Paddle | null>(null);
	const ballRef = useRef<Ball | null>(null);
	const playerRoleRef = useRef<PlayerRole>("left");
	const [leftScore, setLeftScore] = useState(0);
	const [rightScore, setRightScore] = useState(0);
	const [isWaiting, setIsWaiting] = useState(false);
	const [gameOver, setGameOver] = useState<{ isWinner: boolean; winner: string; finalScore: { left: number, right: number } } | null>(null);
	const [countdown, setCountdown] = useState<number | null>(null);

	useEffect(() => {
		if (canvasRef.current)
			ctxRef.current = canvasRef.current.getContext("2d");

		// 1. Connect using Socket.io
		const socket = io("https://localhost", {
			reconnection: false
		}); 

		wsRef.current = socket;

		socket.on("connect", () => {
			console.log("Connected to Game Server");
			socket.emit("joinQueue");
		});

		// Event Listeners
		socket.on("waiting", (data: any) => {
			setIsWaiting(true);
		});

		socket.on("initGame", (data: any) => {
			setIsWaiting(false);

			// Restore data initialization
			if (data.ball) ballRef.current = data.ball;
			if (data.paddleLeft) paddleLeftRef.current = data.paddleLeft;
			if (data.paddleRight) paddleRightRef.current = data.paddleRight;
			if (data.playerRole) playerRoleRef.current = data.playerRole;

			draw(); // Initial draw
		});

		socket.on("countdown", (data: { seconds: number }) => {
			setCountdown(data.seconds);
		});

		socket.on("gameStart", () => {
			setCountdown(null);
		});

		socket.on("update", (data: { gameState: GameState }) => {
			updateGameState(data.gameState);
		});

		socket.on("gameover", (data: any) => {
			setGameOver({
				winner: data.winner,
				isWinner: data.winner === playerRoleRef.current,
				finalScore: data.finalScore || { left: 0, right: 0 },
			});
			socket.disconnect();
		});

		socket.on("disconnect", () => {
			console.log("Disconnected from server");
		});

		socket.on("connect_error", (err) => {
			console.error("Socket Error:", err.message);
		});


		// 3. Input Handling
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowUp" || e.key === "ArrowDown")
				socket.emit("keydown", { key: e.key });
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === "ArrowUp" || e.key === "ArrowDown")
				socket.emit("keyup", { key: e.key });
		};

		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
			socket.disconnect();
		};
	}, []);

	function updateGameState(state: GameState): void {
		if (ballRef.current && paddleLeftRef.current && paddleRightRef.current) {
			ballRef.current.x = state.ballX;
			ballRef.current.y = state.ballY;
			paddleLeftRef.current.velocity = state.leftPaddleY - paddleLeftRef.current.y;
			paddleRightRef.current.velocity = state.rightPaddleY - paddleRightRef.current.y;
			paddleLeftRef.current.y = state.leftPaddleY;
			paddleRightRef.current.y = state.rightPaddleY;
		}

		setLeftScore(state.leftScore);
		setRightScore(state.rightScore);

		draw();
	}

	function draw(): void {
		if (!ctxRef.current) return;

		ctxRef.current.clearRect(0, 0, CANVAS.WIDTH, CANVAS.HEIGHT);

		drawBackground(ctxRef.current);
		drawWalls(ctxRef.current);
		drawCenterLine(ctxRef.current);

		if (ballRef.current) drawBall();
		if (paddleLeftRef.current) drawPaddle(paddleLeftRef.current, "left");
		if (paddleRightRef.current) drawPaddle(paddleRightRef.current, "right");
	}

	function drawBackground(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();

		const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS.HEIGHT);
		gradient.addColorStop(0, "#020617");
		gradient.addColorStop(0, "#020617");

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, CANVAS.WIDTH, CANVAS.HEIGHT);
	}

	function drawWalls(ctx: CanvasRenderingContext2D) {
		ctx.save();

		ctx.strokeStyle = "rgba(168, 85, 247, 0.6)";
		ctx.lineWidth = 5;
		ctx.shadowColor = "#a855f7";
		ctx.shadowBlur = 16;

		// Left Wall
		ctx.beginPath();
		ctx.moveTo(1.5, 0);
		ctx.lineTo(1.5, CANVAS.HEIGHT);
		ctx.stroke();

		// Right Wall
		ctx.beginPath();
		ctx.moveTo(CANVAS.WIDTH - 1.5, 0);
		ctx.lineTo(CANVAS.WIDTH - 1.5, CANVAS.HEIGHT);
		ctx.stroke();

		ctx.restore()
	}

	function drawCenterLine(ctx: CanvasRenderingContext2D) {
		ctx.save();

		ctx.strokeStyle = "rgba(168, 85, 247, 0.25)";
		ctx.lineWidth = 2;
		ctx.setLineDash([10, 15]);

		ctx.beginPath();
		ctx.moveTo(CANVAS.WIDTH / 2, 0);
		ctx.lineTo(CANVAS.WIDTH / 2, CANVAS.HEIGHT);
		ctx.stroke();

		ctx.setLineDash([]);
		ctx.restore();
	}

	function drawBall(): void {
		if (ctxRef.current && ballRef.current) {

			ctxRef.current.save();
			const speed = Math.hypot(ballRef.current.dx, ballRef.current.dy); // Math.hypot(x, y) === Math.sqrt(x*x + y*y)

			// glow intensity from speed
			const glow = Math.min(100, 10 + speed * 2);

			const ball = ballRef.current;
			const g = ctxRef.current.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.radius);
			g.addColorStop(0, "rgba(34,197,94,1"); // green
			g.addColorStop(1, "rgba(34,197,94,0.2)");

			ctxRef.current.fillStyle = g;
			ctxRef.current.shadowColor = "rgba(34,197,94,0.8)";
			ctxRef.current.shadowBlur = glow;

			ctxRef.current.beginPath();
			ctxRef.current.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2);
			ctxRef.current.fill();
			ctxRef.current.closePath();
			ctxRef.current.restore();
		}
	}

	function drawPaddle(paddle: Paddle, side: "left" | "right"): void {
		if (!ctxRef.current) return;
		const ctx = ctxRef.current;

		ctx.save();
		ctx.beginPath();

		// Gradient based on side
		const gradient = ctx.createLinearGradient(
			paddle.x,
			paddle.y,
			paddle.x + paddle.width,
			paddle.y + paddle.height
		);

		if (side === "left") {
			gradient.addColorStop(0, "rgba(168, 85, 247, 0.8)");  // purple
			gradient.addColorStop(1, "rgba(59, 130, 246, 0.8)");   // blue
			ctx.shadowColor = "rgba(168, 85, 247, 0.6)";
		} else {
			gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)");   // blue
			gradient.addColorStop(1, "rgba(34, 197, 94, 0.8)");    // green
			ctx.shadowColor = "rgba(34, 197, 94, 0.6)";
		}

		// Velocity-based shadow offset and blur
		const velocity = paddle.velocity ?? 0;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = Math.max(-10, Math.min(10, -velocity * 2));  // trail opposite to motion
		ctx.shadowBlur = 15 + Math.min(15, Math.abs(velocity) * 2);      // stronger when faster

		ctx.fillStyle = gradient;

		// Draw rounded rect
		if (typeof ctx.roundRect === "function") {
			ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 4);
		} else {
			ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
		}
		ctx.fill();

		ctx.closePath();
		ctx.restore();
	}

	const handlePlayAgain = () => {
		window.location.reload(); // Simple way to restart
	};

	return (
		<div className="game-container">
			{/* Waiting overlay */}
			{isWaiting &&
				(
					<div className="waiting-overlay">
						<div className="waiting-content">
							<div className="spinner"></div>
							<h2 className="waiting-text"> Waiting for opponent...</h2>
							<p className="waiting-subtext">Finding a worthy challenger</p>
						</div>
					</div>
				)}

			{/* Countdown - Game start Overlay */}
			{countdown !== null && (
				<div className="countdown-overlay">
					<div
						className={`countdown-number${countdown === 0 ? " go" : ""}`}
						key={countdown}>
						{countdown > 0 ? countdown : "GO!"}
					</div>
				</div>
			)}

			{/* ← ADD GAME OVER OVERLAY */}
			{gameOver && (
				<div className="gameover-overlay">
					<div className="gameover-content">
						<h1 className={`gameover-title ${gameOver.isWinner ? 'winner' : 'loser'}`}>
							{gameOver.isWinner ? "🎉 Victory!" : "💀 Defeat"}
						</h1>
						<p className="gameover-score">
							{gameOver.finalScore.left} - {gameOver.finalScore.right}
						</p>
						<p className="gameover-message">
							{gameOver.isWinner ? "You are the champion!" : "Better luck next time!"}
						</p>
						<button className="play-again-btn" onClick={handlePlayAgain}>
							Play Again
						</button>
					</div>
				</div>
			)}

			<div className="game-hud">
				<span className="player-left"> {playerRoleRef.current === "left" ? "You" : "Enemy"} </span>
				<span className="game-score"> {leftScore} : {rightScore} </span>
				<span className="player-right"> {playerRoleRef.current === "right" ? "You" : "Enemy"} </span>

			</div>
			<canvas className="game-canvas"
				ref={canvasRef}
				width={CANVAS.WIDTH}
				height={CANVAS.HEIGHT}
			>
			</canvas>
		</div>
	);
}

