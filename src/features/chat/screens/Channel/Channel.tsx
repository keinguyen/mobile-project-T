import { Box } from '@src/components';
import { TicketStackParamList } from '@src/features/chat';
import { ScreenProps } from '@src/navigation';
import React from 'react';
import { ChannelList } from 'stream-chat-react-native';

export const Channel: React.FC<
  ScreenProps<TicketStackParamList, 'TicketList'>
> = ({ navigation }) => {
  const handleSelectChannel = (channel) => {
    if (channel.id) {
      navigation.navigate('TicketDetail', { channelId: channel.id });
    }
  };

  return (
    <Box flex={1}>
      <ChannelList
        // Preview={(props) => (
        //   <ChannelPreviewMessenger
        //     {...props}
        //     PreviewAvatar={YourCustomChannelPreview}
        //   />
        // )}
        onSelect={handleSelectChannel}
        sort={{ last_message_at: -1 }}
        filters={{ members: { $in: ['demo1'] } }}
      />
    </Box>
  );
};
