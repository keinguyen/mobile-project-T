import { StreamChat } from "stream-chat";

export enum ChatEvents {
  connectedUser = "connected-user",
}

class StreamChatService {
  static _instance: StreamChatService;
  private _connectedUser;
  private STREAM_CHAT_INSTANCE = "mnac4zfhsxbr";

  static getInstance() {
    if (!StreamChatService._instance) {
      StreamChatService._instance = new StreamChatService();
    }
    return StreamChatService._instance;
  }

  constructor(private _client = StreamChat.getInstance("mnac4zfhsxbr")) {}

  async registerPushToken() {}

  init = async (chatToken?: string) => {
    console.log("*********** Init stream chat ***********");
    if (!this._client) {
      this._client = StreamChat.getInstance(this.STREAM_CHAT_INSTANCE);
    }

    if (this._connectedUser) return;

    try {
      this._connectedUser = await this._client.connectUser(
        {
          id: "demo1",
          name: "demo1",
        },
        chatToken
      );
      if (this._connectedUser) {
        // TODO: handle connect completed
      } else {
        // TODO: handle error
      }
    } catch (error) {
      // TODO: handle error
    }

    return this._client;
  };

  get client() {
    return this._client;
  }

  requestPermission = async () => {};

  createChannel = async (channelName: string, channelId: string) => {
    try {
      const channel = this._client.channel("messaging", channelId, {
        name: channelName,
        members: ["demo1"],
      });

      await channel.create();
      return channel.id;
    } catch (error) {
      return undefined;
    }
  };

  fetchChannelByUserId = async () => {
    const filter = { type: "messaging", members: { $in: ["demo1"] } };

    const channels = await this._client.queryChannels(
      filter,
      { last_message_at: -1 },
      {
        watch: true, // this is the default
        state: true,
      }
    );
    return channels;
  };

  sendMessage = async (channelId: string, text?: string) => {
    const channel = await this._client.getChannelById(
      "messaging",
      channelId,
      {}
    );

    channel.sendMessage({
      text,
    });
  };
}

export default StreamChatService.getInstance();
