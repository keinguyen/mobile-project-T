export interface ServerToClientEvents {
  // joinConversation: (name: string) => void;
}

export interface ClientToServerEvents {
  joinConversation: (roomId: number) => void;
}
