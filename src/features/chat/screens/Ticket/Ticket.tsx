import { requestAPI } from "@src/apis/requestAPI";
import { Box, Button, Text, View } from "@src/components";
import { screens } from "@src/features/chat";
import { Ticket } from "@src/features/chat/type";
import { TicketScreenProps } from "@src/navigation/types";
import { actions, selectors } from "@src/store/redux";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Ticket.style";
import { TColorName } from "@src/theme";

export const TicketScreen: React.FC<TicketScreenProps> = ({ navigation }) => {
  const tickets = useSelector(selectors.ticket.tickets);
  const dispatch = useDispatch();

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

  const getStatus = (
    status: "processing" | "completed" | null
  ): { status: string; color: TColorName } => {
    switch (status) {
      case "processing":
        return {
          color: "accent",
          status: "Đang xử lý",
        };
      case "completed":
        return {
          color: "grey400",
          status: "Hoàn thành",
        };
      default:
        return {
          color: "green500",
          status: "Chờ xử lý",
        };
    }
  };

  return (
    <View flex={1} mt={24}>
      <FlatList<Ticket>
        data={tickets || []}
        windowSize={10}
        onRefresh={refetch}
        refreshing={isFetching}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item?.id}-${index}`}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onTicketDetails(item.channelId)}>
            <View p={12} border={1} borderRadius="small">
              <Text variant={"primary"} color={"grey400"} fontWeight={"600"}>
                #{index + 1} {item?.title}
              </Text>
              <View mb={8}></View>
              <Text variant={"secondary"}>{item?.desc}</Text>
              <View
                bg={
                  getStatus(
                    index === 1
                      ? "completed"
                      : index === 0
                      ? "processing"
                      : null
                  ).color
                }
                w={100}
                align="center"
                style={styles.statusLabel}
              >
                <Text variant={"secondary"} color={"white"}>
                  {
                    getStatus(
                      index === 1
                        ? "completed"
                        : index === 0
                        ? "processing"
                        : null
                    ).status
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
