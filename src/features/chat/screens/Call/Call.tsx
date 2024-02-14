import { TicketStackParamList } from "@src/features/chat";
import { ScreenProps } from "@src/navigation/types";
import MillicastWidgetPublisher from "@src/screens/Explore/MillicastWidgetPublisher";
import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

export const Call: React.FC<ScreenProps<TicketStackParamList, "Call">> = ({
  route,
  navigation,
}) => {
  const {
    params: { streamName, token },
  } = route;

  return (
    <SafeAreaProvider>
      <MillicastWidgetPublisher
        streamName={streamName}
        token={token}
        navigation={navigation}
      />
    </SafeAreaProvider>
  );
};
