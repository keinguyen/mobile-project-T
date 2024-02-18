import { useScrollToTop } from "@react-navigation/native";
import { ERequestAPI, requestAPI } from "@src/apis/requestAPI";
import { Button, ExploreHeaderTitle, Text, View } from "@src/components";
import { TicketScreen } from "@src/features/chat/screens/Ticket";
import { generateRandomString } from "@src/utils/random-string";
import axios from "axios";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExploreProps } from "./Explore.type";

export const Explore: React.FC<ExploreProps> = ({ navigation }) => {
  const ref = React.useRef(null);

  useScrollToTop(ref);

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
