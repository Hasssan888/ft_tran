// Shared between client and server

export interface Ball {
	x: number;
	y: number;
	radius: number;
	dx: number;
	dy: number;
}

export interface Paddle {
	velocity: number;
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
}

export interface Player {
	userId: string;
	ws: WebSocket;
}

export interface GameState {
	roomId: string;
	leftPaddleY : number;
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

export type PlayerRole =  "left" | "right";

export type ServerMessage = 
	| { type:"waiting", message: string }
	| { type:"initGame"; data: any } 
	| { type:"update"; gameState: GameState }
	| { type:"gameover"; winner: "left" | "right", isWinner: boolean, finalScore : {left:number, right:number }}
	| { type: "countdown"; seconds: number }
	| { type: "gameStart" } 

	
export const CANVAS = {
	WIDTH: 800,
	HEIGHT: 400,
} as const
