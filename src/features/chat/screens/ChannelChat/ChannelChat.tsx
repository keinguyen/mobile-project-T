import { Box } from "@src/components";
import Icon from "@src/components/Icon";
import { ChatStreamProvider, TicketStackParamList } from "@src/features/chat";
import styles from "@src/features/chat/screens/ChannelChat/ChannelChat.style";
import streamChatServices from "@src/features/chat/services/stream-chat.services";
import { useKeyboardEffect } from "@src/hooks/useKeyboardEffect";
import { ScreenProps } from "@src/navigation/types";
import { theme } from "@src/theme";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, Platform, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import {
  Channel,
  MessageInput,
  MessageList,
  useMessageInputContext,
} from "stream-chat-react-native";

export const ChannelChat: React.FC<
  ScreenProps<TicketStackParamList, "TicketDetail">
> = ({ route }) => {
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

  return (
    <Box flex={1}>
      <ChatStreamProvider>
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
                placeholder: "SMS",
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
      </ChatStreamProvider>
    </Box>
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
      <Icon name="Send" color="blue500" />
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
        <Icon name="AddImage" color="blue500" />
      </TouchableOpacity>
    </Box>
  );
};
