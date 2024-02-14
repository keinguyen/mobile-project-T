import { Director, Publish, PublishConnectOptions } from "@millicast/sdk";
import { Box, Button, Text } from "@src/components";
import Icon from "@src/components/Icon";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MediaStream, RTCView, mediaDevices } from "react-native-webrtc";

interface IMillicastWidgetPublisher {
  streamName: string;
  token: string;
}

const MillicastWidgetPublisher: React.FC<IMillicastWidgetPublisher> = (
  props
) => {
  const { streamName, token, navigation } = props;
  let millicastPublish: Publish;
  const [mediaStream, setMediaStream] = useState<MediaStream>();
  const [stream, setStream] = useState<MediaStream>();

  const startLive = async () => {
    if (!mediaStream) {
      try {
        const userMedia = await mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            frameRate: { ideal: 30 },
            facingMode: "environment",
          },
          audio: true,
        });

        const tokenGenerator = () =>
          Director.getPublisher({
            token,
            streamName,
          });
        millicastPublish = new Publish(streamName, tokenGenerator);
        console.log("****** millicastPublish ******", millicastPublish);

        setStream(userMedia);
        setMediaStream(userMedia);
        const broadcastOptions: PublishConnectOptions = {
          mediaStream: userMedia,
          codec: "vp8",
        };

        await millicastPublish.connect(broadcastOptions);
      } catch (error) {
        console.log("****** error ******", error);
      }
    }
  };

  const stopLive = async () => {
    millicastPublish?.stop();
    mediaStream?.release();
    stream?.release();
    setMediaStream(undefined);
    setStream(undefined);
  };

  useEffect(() => {
    startLive();
    sendDolyData();
    return () => {
      stopLive();
    };
  }, []);

  const sendDolyData = async () => {
    await axios.post(
      "https://appraisal-hub.onrender.com/api/conversation/create",
      {
        streamName: streamName,
        accountId: "JZac6x",
      }
    );
  };

  return (
    <Box flex={1}>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"s"}
      >
        <Button
          variant={"transparent"}
          onPress={() => {
            console.log("****** 111111 ******", 111111);

            navigation.goBack();
            stopLive();
          }}
        >
          <Icon name="ArrowLeft" />
        </Button>
        <Text fontWeight={"500"}>Quay phim sản phẩm</Text>
        <Icon name="ArrowLeft" color="white" />
      </Box>

      {stream ? (
        <RTCView
          streamURL={stream.toURL()}
          style={{ width: "100%", height: "100%", zIndex: 0 }}
          objectFit="cover"
        />
      ) : null}
    </Box>
  );
};

export default MillicastWidgetPublisher;
