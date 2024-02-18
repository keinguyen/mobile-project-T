export interface ServerToClientEvents {
  acceptConversation: (
    streamName: string,
    accountId: string,
    ticketId: string
  ) => void;
}

export interface ClientToServerEvents {
  joinConversation: (roomId: number) => void;
  acceptConversation: (
    streamName: string,
    accountId: string,
    ticketId: string
  ) => void;
}
