import useChatListener from "@src/features/chat/hooks/useChatListener";
import streamChatServices from "@src/features/chat/services/stream-chat.services";
import { PropsWithChildren } from "react";
import { Chat, OverlayProvider } from "stream-chat-react-native";

export const ChatStreamProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  useChatListener();

  console.log(
    "****** streamChatServices.client ******",
    streamChatServices.client
  );

  return (
    <OverlayProvider
      value={{
        style: {
          messageInput: {
            inputBoxContainer: {
              borderRadius: 0,
              borderWidth: 0,
            },
          },
        },
      }}
    >
      <Chat client={streamChatServices.client as never}>{children}</Chat>
    </OverlayProvider>
  );
};
