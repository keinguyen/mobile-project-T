import { createNavigationContainerRef } from "@react-navigation/native";
import {
  Channel,
  ChannelChat,
  CreateTicket,
  TicketDetail,
} from "@src/features/chat";

export const screens = {
  TicketList: "TicketList",
  TicketDetail: "TicketDetail",
  CreateTicket: "CreateTicket",
  ChannelChat: "ChannelChat",
} as const;

export const TicketRouter = {
  [screens.TicketList]: {
    screen: Channel,
  },
  [screens.TicketDetail]: {
    screen: TicketDetail,
  },
  [screens.ChannelChat]: {
    screen: ChannelChat,
  },
  [screens.CreateTicket]: {
    screen: CreateTicket,
  },
};

export type TicketStackParamList = {
  [screens.TicketList]: undefined;
  [screens.CreateTicket]: undefined;
  [screens.TicketDetail]: { channelId: string };
  [screens.ChannelChat]: { channelId: string };
};
