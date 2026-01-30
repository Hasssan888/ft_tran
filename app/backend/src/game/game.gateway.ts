import {
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway({ cors: true })
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {

  @WebSocketServer()
  server: Server;

  private waitingPlayers: Socket[] = [];

  constructor(private gameService: GameService) { }

  afterInit(server: Server) {
    this.gameService.server = server;
  }


  @SubscribeMessage('joinQueue')
  handleJoinQueue(client: Socket) {
    this.waitingPlayers.push(client);

    client.emit('waiting', { message: 'Waiting for opponent...' });
    console.log(`Waiting players: ${this.waitingPlayers.length}`);

    if (this.waitingPlayers.length >= 2) {
      const player1 = this.waitingPlayers.shift();
      const player2 = this.waitingPlayers.shift();

      if (player1 && player2) {
        const roomId = `room_${Date.now()}`;

        // Join both players to the Socket.io Room
        player1.join(roomId);
        player2.join(roomId);
        
        // 4. Initialize Game in Service
        this.gameService.createRoom(roomId, player1.id, player2.id);

        const data = {
          ball: this.gameService.rooms.get(roomId)?.engine.ball,
          paddleLeft: this.gameService.rooms.get(roomId)?.engine.paddleLeft,
          paddleRight: this.gameService.rooms.get(roomId)?.engine.paddleRight,
        };

        player1.emit('initGame', {
          ...data,
          playerRole: 'left',
        });

        player2.emit('initGame', {
          ...data,
          playerRole: 'right',
        });

        this.gameService.startCountdown(roomId);

        console.log(`Match started: ${player1.id} vs ${player2.id} in ${roomId}`);
      }
    }
  }

  @SubscribeMessage('keydown')
  handleKeydown(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    const roomId = this.gameService.findRoomIdByPlayer(client.id);
    if (!roomId) return;
    this.gameService.handleInput(roomId, client.id, data.key, true);
  }

  @SubscribeMessage('keyup')
  handleKeyup(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    const roomId = this.gameService.findRoomIdByPlayer(client.id);
    if (!roomId) return;
    this.gameService.handleInput(roomId, client.id, data.key, false);
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    //  Remove from waiting list (if they were waiting)
    this.waitingPlayers = this.waitingPlayers.filter(p => p.id !== client.id);
    // Stop game if they were playing
    const roomId = this.gameService.findRoomIdByPlayer(client.id);
    if (roomId) {
      // Find the OTHER player so we can tell them they won by default?
      // For now, let's just abort the game.

      this.gameService.endGame(roomId, 'aborted');
      console.log(`Game ${roomId} aborted because player disconnected`);
    }
  }


}