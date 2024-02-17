import { useScrollToTop } from "@react-navigation/native";
import { Button, ExploreHeaderTitle, Text, View } from "@src/components";
import { TicketScreen } from "@src/features/chat/screens/Ticket";
import { generateRandomString } from "@src/utils/random-string";
import axios from "axios";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RNFS from "react-native-fs";
import RecordScreen from "react-native-record-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExploreProps } from "./Explore.type";
import RecordScreen from "react-native-record-screen";
import RNFS from "react-native-fs";
import { ERequestAPI, requestAPI } from "@src/apis/requestAPI";

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
        <Button
          label="Start recording"
          onPress={async () => {
            await RecordScreen.startRecording();
          }}
        />
        <Button
          label="Stop recording"
          onPress={async () => {
            try {
              const res = (await RecordScreen.stopRecording()) as {
                result: { outputURL: string };
              };

              console.log("****** res ******", res);

              const outputURL = res?.result?.outputURL;

              console.log("****** outputURL ******", outputURL);

              const isExist = await RNFS.exists(outputURL);
              console.log("****** isExist ******", isExist);

              const fileContent = await RNFS.readFile(outputURL, "base64");

              const blob = await fetch(`file://${outputURL}`).then((res) =>
                res.blob()
              );

              console.log("****** blob ******", blob);

              const formData = new FormData();

              const x = new File([blob], "filename", {
                type: "video/mp4",
                lastModified: Date.now(),
              });

              console.log("****** 4 ******", 4);

              formData.append("files", x);
              console.log("******  ******", formData.getParts());

              await requestAPI({
                method: "POST",
                isUploadFile: true,
                body: formData,
                subject: `${ERequestAPI.UPLOAD_ATTACHMENT_FILE}/23213213`,
              });
            } catch (error) {
              console.log("****** error ******", error);
            }
          }}
        />
        <TicketScreen navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homescreen: {},
});
