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
    ws: WebSocket;
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
    type: "initGame" | "update" | "keydown" | "keyup" | "gameover";
    data?: any;
}
export interface Room {
    roomId: string;
    players: Player[];
    gameState: GameState;
    lastUpdate: number;
}
export type PlayerRole = "left" | "right";
export type ServerMessage = {
    type: "initGame";
    data: any;
} | {
    type: "update";
    gameState: GameState;
};
export declare const CANVAS: {
    readonly WIDTH: 800;
    readonly HEIGHT: 400;
};
//# sourceMappingURL=gameTypes.d.ts.map