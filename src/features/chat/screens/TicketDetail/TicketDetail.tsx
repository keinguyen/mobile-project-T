import { Box, Button } from '@src/components';
import { TicketStackParamList, screens } from '@src/features/chat';
import { ScreenProps } from '@src/navigation/types';
import React from 'react';

export const TicketDetail: React.FC<
  ScreenProps<TicketStackParamList, 'TicketDetail'>
> = ({ navigation, route }) => {
  const {
    params: { channelId },
  } = route;

  const onCreateTicket = () => {
    navigation.navigate(screens.ChannelChat, { channelId });
  };

  return (
    <Box flex={1} p="m" pb="l">
      <Button label="Chat" borderRadius="xl" onPress={onCreateTicket} />
    </Box>
  );
};
