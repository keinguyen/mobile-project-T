import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ChannelChat,
  ChatStreamProvider,
  CreateTicket,
  TicketDetail,
  TicketStackParamList,
} from "@src/features/chat";
import { TicketScreen } from "@src/features/chat/screens/Ticket";
import { TicketScreenProps } from "@src/navigation/types";
import React from "react";

const Stack = createNativeStackNavigator<TicketStackParamList>();

export const TicketStack: React.FC<TicketScreenProps> = ({ navigation }) => {
  return (
    <ChatStreamProvider>
      <Stack.Navigator initialRouteName="TicketList">
        <Stack.Screen
          options={() => {
            return {
              title: "",
              headerTitleAlign: "left",
            };
          }}
          name="TicketList"
          component={TicketScreen}
        />
        <Stack.Screen
          name="CreateTicket"
          component={CreateTicket}
          options={({ route: { params } }) => {
            return {
              headerTitle: "CreateTicket",
            };
          }}
        />
        <Stack.Screen
          name="ChannelChat"
          component={ChannelChat}
          options={({ route: { params } }) => {
            return {
              headerTitle: "CreateTicket",
            };
          }}
        />
        <Stack.Screen
          name="TicketDetail"
          component={TicketDetail}
          options={() => {
            return {
              headerTitle: "TicketDetail",
            };
          }}
        />
      </Stack.Navigator>
    </ChatStreamProvider>
  );
};
