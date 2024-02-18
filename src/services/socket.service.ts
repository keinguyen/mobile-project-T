import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../models/event";

class SocketService {
  private readonly socket: Socket<ClientToServerEvents> = io(
    `wss://appraisal-hub.onrender.com`,
    {
      autoConnect: true,
      transports: ["websocket"],
    }
  );

  disconnect() {
    this.socket.disconnect();
  }

  joinConversation(roomId: number) {
    this.socket.emit("joinConversation", roomId);
  }

  subscribeToAcceptConversation(
    acceptConversationHandler: ServerToClientEvents["acceptConversation"]
  ) {
    this.socket.on("acceptConversation", acceptConversationHandler);
  }
}

export const socketService = new SocketService();
