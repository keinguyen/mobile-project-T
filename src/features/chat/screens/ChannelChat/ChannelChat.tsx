import { Box, Button, Text, View } from "@src/components";
import { FadeInOverlay } from "@src/components/FadeInOverlay";
import Icon from "@src/components/Icon";
import {
  ChatStreamProvider,
  TicketStackParamList,
  screens,
} from "@src/features/chat";
import styles from "@src/features/chat/screens/ChannelChat/ChannelChat.style";
import streamChatServices from "@src/features/chat/services/stream-chat.services";
import { FileService } from "@src/features/chat/services/upload-file.services";
import { useKeyboardEffect } from "@src/hooks/useKeyboardEffect";
import { ScreenProps } from "@src/navigation/types";
import { theme } from "@src/theme";
import { generateRandomString } from "@src/utils/random-string";
import axios from "axios";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import {
  Channel,
  MessageInput,
  MessageList,
  MessageSimple,
  useMessageContext,
  useMessageInputContext,
} from "stream-chat-react-native";
export const ChannelChat: React.FC<
  ScreenProps<TicketStackParamList, "ChannelChat">
> = ({ route, navigation }) => {
  return (
    <SafeAreaView edges={["left", "right", "top"]} style={{ flex: 1 }}>
      <ChatStreamProvider>
        <ChannelChatDetails navigation={navigation} route={route} />
      </ChatStreamProvider>
    </SafeAreaView>
  );
};

const ChannelChatDetails: React.FC<
  ScreenProps<TicketStackParamList, "ChannelChat">
> = ({ route, navigation }) => {
  const {
    params: { channelId },
  } = route;
  const [isLoading, setIsLoading] = useState(false);

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
    setKbHeight(isShow ? 92 : 0);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks, curly
  if (Platform.OS === "ios") useKeyboardEffect(handleKeyboardEvent);

  if (!channel) {
    return (
      <Box flex={1} alignItems={"center"} justifyContent={"center"} px={"l"}>
        <FadeInOverlay visible />
      </Box>
    );
  }

  const startStream = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box flex={1}>
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
                InputButtons={() => <AttachButton channelId={channelId} />}
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
        <FadeInOverlay visible={isLoading} />
      </Box>
    </>
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

const AttachButton: React.FC<{ channelId: string }> = ({ channelId }) => {
  // const { openAttachmentPicker } = useMessageInputContext();
  const formData = new FormData();

  const onUpload = async () => {
    const res = await FileService.launchImageLibrary({
      options: { selectionLimit: 1, mediaType: "photo" },
    });
    if (res?.length) {
      res.forEach((e) => {
        formData?.append("file", e);
      });
    }

    await streamChatServices.sendMessage(channelId, "text");
  };

  return (
    <Box mr="m">
      <TouchableOpacity style={styles.attachButton} onPress={onUpload}>
        <Icon name="AddImage" color="grey400" />
      </TouchableOpacity>
    </Box>
  );
};

const CustomMessageUIComponent = () => {
  const { message } = useMessageContext();

  if (message.text?.includes("https:")) {
    return (
      <MessageSimple
        message={message}
        MessageContent={() => {
          return (
            <View>
              <Text>{message.text}</Text>
            </View>
          );
        }}
      />
    );
  }

  return <MessageSimple message={message} />;
  /** Custom implementation */
};
