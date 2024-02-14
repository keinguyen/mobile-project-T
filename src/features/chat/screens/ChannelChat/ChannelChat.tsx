import { Box, Button, LottieView, Text } from "@src/components";
import Icon from "@src/components/Icon";
import {
  ChatStreamProvider,
  TicketStackParamList,
  screens,
} from "@src/features/chat";
import styles from "@src/features/chat/screens/ChannelChat/ChannelChat.style";
import streamChatServices from "@src/features/chat/services/stream-chat.services";
import { useKeyboardEffect } from "@src/hooks/useKeyboardEffect";
import { ScreenProps } from "@src/navigation/types";
import MillicastWidgetPublisher from "@src/screens/Explore/MillicastWidgetPublisher";
import MillicastWidgetViewer from "@src/screens/Explore/MillicastWidgetViewer";
import { theme } from "@src/theme";
import { generateRandomString } from "@src/utils/random-string";
import axios from "axios";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import {
  Channel,
  MessageInput,
  MessageList,
  useMessageInputContext,
} from "stream-chat-react-native";
export const ChannelChat: React.FC<
  ScreenProps<TicketStackParamList, "TicketDetail">
> = ({ route, navigation }) => {
  return (
    <ChatStreamProvider>
      <ChannelChatDetails navigation={navigation} route={route} />
    </ChatStreamProvider>
  );
};
export const ChannelChatDetails: React.FC<
  ScreenProps<TicketStackParamList, "TicketDetail">
> = ({ route, navigation }) => {
  const {
    params: { channelId },
  } = route;

  const { data: channel } = useQuery(
    [channelId],
    async () => {
      const channels = await streamChatServices.client.queryChannels({
        id: channelId,
      });
      streamChatServices.client.getChannelById("messaging", channelId, {});
      if (channels.length > 0) {
        return channels[0];
      }
    },
    {
      enabled: !!channelId,
    }
  );

  const [kbHeight, setKbHeight] = useState<number>(0);

  const handleKeyboardEvent = useCallback((isShow: boolean) => {
    setKbHeight(isShow ? 78 : 0);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks, curly
  if (Platform.OS === "ios") useKeyboardEffect(handleKeyboardEvent);

  if (!channel) {
    return (
      <Box flex={1} style={{ paddingVertical: 20 }}>
        <ActivityIndicator
          color={theme.colors.warning}
          animating
          size="large"
        />
      </Box>
    );
  }

  const startStream = async () => {
    try {
      const dolby = await axios.get(
        `https://appraisal-hub.onrender.com/api/dolby/token/${generateRandomString(
          10
        )}/${generateRandomString(10)}`
      );

      navigation.navigate(screens.Call, {
        token: dolby.data.data.token,
        streamName: dolby.data.data.streams[0].streamName,
      });
    } catch (error) {
      Alert.alert("Lỗi", "Không thực được");
    }
  };

  return (
    <SafeAreaProvider>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"s"}
      >
        <Button
          variant={"transparent"}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="ArrowLeft" />
        </Button>
        <Text fontWeight={"500"}>Phòng chat</Text>
        <Button
          variant={"transparent"}
          onPress={() => {
            startStream();
          }}
        >
          <Icon name="PhoneCall" color="grey400" />
        </Button>
      </Box>

      <Box flex={1}>
        <Channel
          giphyEnabled={false}
          channel={channel}
          keyboardVerticalOffset={0}
          SendButton={SendMessagesButton}
          CommandsButton={() => undefined}
        >
          <Box flex={1}>
            <MessageList DateHeader={() => undefined} myMessageTheme={{}} />
          </Box>
          <Box style={{ paddingBottom: kbHeight }}>
            <MessageInput
              InputButtons={AttachButton}
              additionalTextInputProps={{
                placeholder: "Nhập tin nhắn",
                placeholderTextColor: theme.colors.grey300,
                style: [
                  styles.messagesInput,
                  Platform.OS === "android"
                    ? styles.messagesInputForAndroid
                    : styles.messagesInputForIOS,
                ],
              }}
            />
          </Box>
        </Channel>
      </Box>
    </SafeAreaProvider>
  );
};

const SendMessagesButton: React.FC = () => {
  const { sendMessage, isValidMessage } = useMessageInputContext();
  const isValid = isValidMessage();

  return (
    <TouchableOpacity
      style={styles.sendButton}
      onPress={sendMessage}
      disabled={!isValid}
    >
      <Icon name="Send" color="grey400" />
    </TouchableOpacity>
  );
};

const AttachButton: React.FC = () => {
  const { openAttachmentPicker } = useMessageInputContext();

  return (
    <Box mr="m">
      <TouchableOpacity
        style={styles.attachButton}
        onPress={openAttachmentPicker}
      >
        <Icon name="AddImage" color="grey400" />
      </TouchableOpacity>
    </Box>
  );
};
