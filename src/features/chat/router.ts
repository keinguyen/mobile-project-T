import { createNavigationContainerRef } from "@react-navigation/native";
import {
  Call,
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
  Call: "Call",
} as const;

export const TicketRouter = {
  [screens.TicketList]: {
    screen: Channel,
  },
  [screens.TicketDetail]: {
    screen: TicketDetail,
    options: {
      title: "Chi tiết yêu cầu",
      headerTitleStyle: {
        fontSize: 16,
      },
    },
  },
  [screens.ChannelChat]: {
    screen: ChannelChat,
    options: {
      title: "Phòng chat",
      headerTitleStyle: {
        fontSize: 16,
      },
      headerShown: false,
    },
  },
  [screens.CreateTicket]: {
    screen: CreateTicket,
    options: {
      title: "Tạo yêu cầu",
      headerTitleStyle: {
        fontSize: 16,
      },
    },
  },
  [screens.Call]: {
    screen: Call,
    options: {
      headerShown: false,
    },
  },
};

export type TicketStackParamList = {
  [screens.TicketList]: undefined;
  [screens.CreateTicket]: undefined;
  [screens.Call]: {
    token: string;
    streamName: string;
    ticketId: string;
  };
  [screens.TicketDetail]: { ticketId: string };
  [screens.ChannelChat]: { channelId: string; ticketId: string };
};
