import { Box, Button, Divider, Text, View } from "@src/components";
import Icon from "@src/components/Icon";
import { TicketStackParamList, screens } from "@src/features/chat";
import { TicketState } from "@src/features/chat/redux/ticket";
import { ScreenProps } from "@src/navigation/types";
import { selectors } from "@src/store/redux";
import React from "react";
import { useSelector } from "react-redux";

export const TicketDetail: React.FC<
  ScreenProps<TicketStackParamList, "TicketDetail">
> = ({ navigation, route }) => {
  const {
    params: { ticketId },
  } = route;

  const ticketInfo = useSelector((state: TicketState) =>
    selectors.ticket.ticketById(state, ticketId)
  );

  const onChat = () => {
    navigation.navigate(screens.ChannelChat, {
      channelId: ticketInfo.channelId,
    });
  };

  return (
    <Box flex={1} p="m" pb="l">
      <Box flexDirection={"row"} pb={"s"}>
        <Text
          variant={"primary"}
          fontWeight={"500"}
          color={"black"}
          fontSize={14}
        >
          Tên sản phẩm:
        </Text>
        <View mr={8} />
        <Text variant={"secondary"} color={"black"} fontSize={14}>
          {ticketInfo.title}
        </Text>
      </Box>

      <Box flexDirection={"row"} py={"s"}>
        <Text
          variant={"primary"}
          fontWeight={"500"}
          color={"black"}
          fontSize={14}
        >
          Chi tiết sản phẩm:
        </Text>
        <View mr={8} />
        <Text variant={"secondary"} color={"black"} fontSize={14}>
          {ticketInfo.desc}
        </Text>
      </Box>

      <Box flexDirection={"row"} py={"s"}>
        <Text
          variant={"primary"}
          fontWeight={"500"}
          color={"black"}
          fontSize={14}
        >
          Họ và tên:
        </Text>
        <View mr={8} />
        <Text variant={"secondary"} color={"black"} fontSize={14}>
          {ticketInfo.patientInfo.fisrtName} {ticketInfo.patientInfo.lastName}
        </Text>
      </Box>

      <Box flexDirection={"row"} py={"s"}>
        <Text
          variant={"primary"}
          fontWeight={"500"}
          color={"black"}
          fontSize={14}
        >
          SDT:
        </Text>
        <View mr={8} />
        <Text variant={"secondary"} color={"black"} fontSize={14}>
          {ticketInfo.patientInfo.phoneNumber}
        </Text>
      </Box>

      {ticketInfo.channelId && (
        <Box mt={"l"}>
          <Text variant={"secondary"}>Liên hệ với nhân viên kiểm định:</Text>
          <Box py={"l"}>
            <Button onPress={onChat}>
              <Box
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Icon name="MessageCircle" color="white" />
                <View mr={12} />
                <Text variant={"secondary"} color={"white"} fontSize={14}>
                  Chat với nhân viên kiểm định
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
