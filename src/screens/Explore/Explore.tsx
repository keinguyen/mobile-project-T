import { useScrollToTop } from "@react-navigation/native";
import { ExploreHeaderTitle, Text, View } from "@src/components";
import { TicketScreen } from "@src/features/chat/screens/Ticket";
import { generateRandomString } from "@src/utils/random-string";
import axios from "axios";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExploreProps } from "./Explore.type";

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
    <SafeAreaView style={{ flex: 1 }}>
      <ExploreHeaderTitle navigation={navigation} />

      <View flex={1} px={16}>
        <Text variant={"secondary"} fontWeight={"500"}>
          Danh sách yêu cầu:
        </Text>
        <TicketScreen navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homescreen: {},
});
