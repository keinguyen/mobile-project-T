import { Text, View } from "@src/components";
import Icon from "@src/components/Icon";
import streamChatServices from "@src/features/chat/services/stream-chat.services";
import { TouchableOpacity } from "react-native";
import {
  renderText,
  MessageSimple,
  MessageTextProps,
  useMessageContext,
} from "stream-chat-react-native";

const attachmentRegex = /^\[attachment:(image|video):\]$/;
const priceRegex = /^\[price:(nego|accept|reject):([0-9]+)\]$/;

export function CustomMessagesText(props: MessageTextProps) {
  const message = props.message;
  if (!message) return <View />;
  const { channel } = useMessageContext();

  const text = message?.text;
  const channelId = channel?.id;

  if (channelId && text) {
    if (priceRegex.test(text)) {
      return <PriceMessageContent text={text} channelId={channelId} />;
    }

    if (attachmentRegex.test(text)) {
      return (
        <MessageSimple
          {...props}
          MessageContent={() => (
            <AttachmentMessageContent channelId={channelId} text={text} />
          )}
        />
      );
    }
  }

  return renderText({
    ...props,
    message,
    colors: props.theme.theme.colors,
  });
}

const AttachmentMessageContent: React.FC<{
  text: string;
  channelId: string;
}> = ({ channelId, text }) => {
  return <View />;
};

const PriceMessageContent: React.FC<{
  text: string;
  channelId: string;
}> = ({ channelId, text }) => {
  const [, type, cost] = text.match(priceRegex)!;

  return (
    <>
      {
        {
          ["nego"]: <Nego cost={cost} channelId={channelId} />,
          ["accept"]: <Accept cost={cost} />,
          ["reject"]: <Reject cost={cost} />,
        }[type]
      }
    </>
  );
};

const Nego: React.FC<{ channelId: string; cost: string }> = (params) => {
  const { channelId, cost } = params;
  const price = `${cost}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const onAccept = () => {
    streamChatServices.sendMessage(channelId, `[price:accept:${cost}]`);
  };

  const onReject = () => {
    streamChatServices.sendMessage(channelId, `[price:reject:${cost}]`);
  };

  return (
    <View pt={8} mb={4}>
      <Text>
        Định giá: <Text fontWeight={"600"}>{price}</Text>
      </Text>
      <View py={8} align="center" flexDirection="row">
        <TouchableOpacity onPress={onAccept}>
          <View
            p={8}
            borderRadius="medium"
            bg="green200"
            align="center"
            flexDirection="row"
          >
            <Text>Chấp nhận</Text>
            <View ml={4}>
              <Icon name="CheckCircle" size={18} color="green500" />
            </View>
          </View>
        </TouchableOpacity>
        <View w={8} />
        <TouchableOpacity onPress={onReject}>
          <View
            p={8}
            borderRadius="medium"
            bg="red200"
            align="center"
            flexDirection="row"
          >
            <Text>Từ chối</Text>
            <View ml={4}>
              <Icon name="XCircle" size={18} color="red500" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Accept: React.FC<{ cost: string }> = (params) => {
  const { cost } = params;
  const price = `${cost}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <View my={8}>
      <Text>
        Chấp nhận: <Text fontWeight={"600"}>{price}</Text>
      </Text>
    </View>
  );
};

const Reject: React.FC<{ cost: string }> = (params) => {
  const { cost } = params;
  const price = `${cost}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <View my={8}>
      <Text>
        Từ chối: <Text fontWeight={"600"}>{price}</Text>
      </Text>
    </View>
  );
};
