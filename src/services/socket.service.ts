import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents } from '../models/event';

class SocketService {
  private readonly socket: Socket<ClientToServerEvents> = io(
    `ws://192.168.1.2:5000`,
    {
      autoConnect: true,
      transports: ['websocket'],
    },
  );

  disconnect() {
    this.socket.disconnect();
  }

  joinConversation(roomId: number) {
    console.log('******  this.socket ******', this.socket.id);
    console.log('******  this.socket ******', this.socket.connected);

    this.socket.emit('joinConversation', roomId);
  }
}

export const socketService = new SocketService();
