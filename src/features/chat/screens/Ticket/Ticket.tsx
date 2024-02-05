import { Button, Text, View } from '@src/components';
import { screens } from '@src/features/chat';
import styles from '@src/features/chat/screens/Ticket/Ticket.style';
import { TicketScreenProps } from '@src/navigation/types';
import { selectors } from '@src/store/redux';
import React from 'react';
import { Ticket } from '@src/features/chat/type';
import { FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export const TicketScreen: React.FC<TicketScreenProps> = ({ navigation }) => {
  const tickets = useSelector(selectors.ticket.tickets);

  const onCreateTicket = () => {
    navigation.navigate(screens.CreateTicket);
  };

  const onTicketDetails = (channelId: string) => {
    navigation.navigate(screens.TicketDetail, { channelId });
  };

  return (
    <View flex={1} p={16}>
      <FlatList<Ticket>
        data={tickets}
        windowSize={10}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onTicketDetails(item.id)}>
            <View
              p={16}
              bg="white"
              border={1}
              borderRadius="medium"
              borderColor="grey200">
              <Text>{item.title}</Text>
              <Text>{item.desc}</Text>
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
