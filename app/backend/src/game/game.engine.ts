import { Ball, Paddle, CANVAS, GameState } from "./game.types";

const WINNING_SCORE = 5;
const SPEED = 3;

export class GameEngine {
	ball: Ball;
	paddleLeft: Paddle;
	paddleRight: Paddle;
	leftScore: number;
	rightScore: number;

	constructor(ball: Ball, paddleLeft: Paddle, paddleRight: Paddle) {
		this.ball = ball;
		this.paddleLeft = paddleLeft;
		this.paddleRight = paddleRight;
		this.leftScore = 0;
		this.rightScore = 0;
	}

	// Extract collision detection logic
	private checkPaddleCollision(): void {
		const hitLeft = this.checkRectCircleCollision(this.paddleLeft, this.ball);
		if (hitLeft) {
			this.ball.dx = Math.abs(this.ball.dx) * 1.05;
			this.ball.x = this.paddleLeft.x + this.paddleLeft.width + this.ball.radius;
		}

		const hitRight = this.checkRectCircleCollision(this.paddleRight, this.ball);
		if (hitRight) {
			this.ball.dx = -Math.abs(this.ball.dx) * 1.05;
			this.ball.x = this.paddleRight.x - this.ball.radius;
		}
	}

	private checkRectCircleCollision(paddle: Paddle, ball: Ball): boolean {
		return (
			ball.x - ball.radius <= paddle.x + paddle.width &&
			ball.x + ball.radius >= paddle.x &&
			ball.y + ball.radius >= paddle.y &&
			ball.y - ball.radius <= paddle.y + paddle.height
		);
	}

	private checkWallCollision(): void {
		if (this.ball.y + this.ball.radius >= CANVAS.HEIGHT || this.ball.y - this.ball.radius <= 0) {
			this.ball.dy *= -1;
		}
	}

	private checkScoringBoundary(): boolean {
		if (this.ball.x + this.ball.radius >= CANVAS.WIDTH) {
			this.leftScore += 1;
			return true; // Scoring event
		}
		else if (this.ball.x - this.ball.radius <= 0) {
			this.rightScore += 1;
			return true; // Scoring event
		}
		return false;
	}

	private resetBall(): void {
		this.ball.x = CANVAS.WIDTH / 2;
		this.ball.y = CANVAS.HEIGHT / 2;

		this.ball.dx = Math.random() > 0.5 ? SPEED : -SPEED;
		this.ball.dy = Math.random() > 0.5 ? SPEED : -SPEED;
	}

	getWinner(): "left" | "right" | null {
		if (this.leftScore >= WINNING_SCORE) return "left";
		else if (this.rightScore >= WINNING_SCORE) return "right";
		return null;
	}

	// Public method called from server loop
	update(): GameState {
		this.ball.x += this.ball.dx;
		this.ball.y += this.ball.dy;
		this.checkPaddleCollision();
		this.checkWallCollision();
		if (this.checkScoringBoundary()) this.resetBall();

		return {
			roomId: "",
			leftPaddleY: this.paddleLeft.y,
			rightPaddleY: this.paddleRight.y,
			ballX: this.ball.x,
			ballY: this.ball.y,
			leftScore: this.leftScore,
			rightScore: this.rightScore,
		};
	}

	// Move paddle methods
	movePaddleLeft(up: boolean, down: boolean): void {
		if (up && this.paddleLeft.y - this.paddleLeft.speed > 0) {
			this.paddleLeft.y -= this.paddleLeft.speed;
		}
		if (down && this.paddleLeft.y + this.paddleLeft.height + this.paddleLeft.speed < CANVAS.HEIGHT) {
			this.paddleLeft.y += this.paddleLeft.speed;
		}
	}

	movePaddleRight(up: boolean, down: boolean): void {
		if (up && this.paddleRight.y - this.paddleRight.speed > 0) {
			this.paddleRight.y -= this.paddleRight.speed;
		}
		if (down && this.paddleRight.y + this.paddleRight.height + this.paddleRight.speed < CANVAS.HEIGHT) {
			this.paddleRight.y += this.paddleRight.speed;
		}
	}

}
