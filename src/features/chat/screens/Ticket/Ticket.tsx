import { requestAPI } from "@src/apis/requestAPI";
import { Button, Text, View } from "@src/components";
import { screens } from "@src/features/chat";
import styles from "@src/features/chat/screens/Ticket/Ticket.style";
import { Ticket } from "@src/features/chat/type";
import { TicketScreenProps } from "@src/navigation/types";
import { actions, selectors } from "@src/store/redux";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

export const TicketScreen: React.FC<TicketScreenProps> = ({ navigation }) => {
  const tickets = useSelector(selectors.ticket.tickets);
  const dispatch = useDispatch();

  const onCreateTicket = () => {
    navigation.navigate(screens.CreateTicket);
  };

  const { isFetching, refetch } = useQuery(
    "fetchTickets",
    async () => {
      const result = await requestAPI<Array<Ticket>>({
        subject: "tickets.api.getList",
      });
      dispatch(actions.ticket.setAllTickets(result));
    },
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const onTicketDetails = (channelId: string) => {
    navigation.navigate(screens.TicketDetail, { channelId });
  };

  return (
    <View flex={1} p={16}>
      <FlatList<Ticket>
        data={tickets || []}
        windowSize={10}
        onRefresh={refetch}
        refreshing={isFetching}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item?.id}-${index}`}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onTicketDetails(item.channelId)}>
            <View
              p={16}
              bg="white"
              border={1}
              borderRadius="medium"
              borderColor="grey200"
            >
              <Text>{item?.title}</Text>
              <Text>{item?.desc}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={[styles.addButton, styles.boxWithShadow]}>
        <Button label="Add" borderRadius="xl" onPress={onCreateTicket} />
      </View>
    </View>
  );
};
