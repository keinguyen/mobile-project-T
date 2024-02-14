import React, { useState } from "react";
import { Box, Button, ExploreHeaderTitle, Text } from "@src/components";
import { ExploreProps } from "./Explore.type";
import { useScrollToTop } from "@react-navigation/native";
import MillicastWidgetPublisher from "./MillicastWidgetPublisher";
import MillicastWidgetViewer from "./MillicastWidgetViewer";
import axios from "axios";
import { generateRandomString } from "@src/utils/random-string";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { TicketScreen } from "@src/features/chat/screens/Ticket";

export const Explore: React.FC<ExploreProps> = ({ navigation }) => {
  const ref = React.useRef(null);
  const [dolbyData, setDoldyData] = useState<{
    token: string;
    streamName: string;
  }>();
  useScrollToTop(ref);
  const startStream = async () => {
    try {
      const dolby = await axios.get(
        `https://appraisal-hub.onrender.com/api/dolby/token/${generateRandomString(
          10
        )}/${generateRandomString(10)}`
      );

      setDoldyData({
        streamName: dolby.data.data.streams[0].streamName,
        token: dolby.data.data.token,
      });
    } catch (error) {
      console.log("****** error ******", error);
    }
  };

  const sendDolyData = async () => {
    await axios.post(
      "https://appraisal-hub.onrender.com/api/conversation/create",
      {
        streamName: dolbyData?.streamName,
        accountId: "JZac6x",
      }
    );
  };

  return (
    <SafeAreaView>
      <ExploreHeaderTitle navigation={navigation} />

      <Box bg={"white"} height={"100%"} width={"100%"} pt={"l"} px={"m"}>
        <Text variant={"secondary"} fontWeight={"500"}>
          Danh sách yêu cầu:
        </Text>
        <TicketScreen navigation={navigation} />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homescreen: {},
});
