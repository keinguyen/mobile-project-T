import { Director, Publish, PublishConnectOptions } from "@millicast/sdk";
import { Box, Button, LottieView, Text } from "@src/components";
import { FadeInOverlay } from "@src/components/FadeInOverlay";
import Icon from "@src/components/Icon";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MediaStream, RTCView, mediaDevices } from "react-native-webrtc";
import RecordScreen from "react-native-record-screen";
import RNFS from "react-native-fs";
import { Alert, Platform } from "react-native";
import { ERequestAPI, requestAPI } from "@src/apis/requestAPI";
import useCountdownTimer from "@src/hooks/useCountdownTimer";
import { socketService } from "@src/services/socket.service";

interface IMillicastWidgetPublisher {
  streamName: string;
  token: string;
  ticketId: string;
}

const MillicastWidgetPublisher: React.FC<IMillicastWidgetPublisher> = (
  props
) => {
  const { streamName, token, ticketId, navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  let millicastPublish: Publish;
  const [mediaStream, setMediaStream] = useState<MediaStream>();
  const [stream, setStream] = useState<MediaStream>();
  const { seconds, startCountdown, stopCountdown } = useCountdownTimer(60);
  const [isCalling, setIsCalling] = useState(false);
  const [startedRecording, setStartedRecording] = useState(false);

  function formatDate(timestamp) {
    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: Month is zero-based
    const year = date.getFullYear();

    return `${day}_${month}_${year}`;
  }

  const startLive = async () => {
    if (!mediaStream) {
      try {
        setIsLoading(true);
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

        setStream(userMedia);
        setMediaStream(userMedia);

        const broadcastOptions: PublishConnectOptions = {
          mediaStream: userMedia,
          codec: "vp8",
          bandwidth: 0,
        };

        setIsLoading(false);

        await millicastPublish.connect(broadcastOptions);
      } catch (error) {
        console.log("****** error ******", error);
      } finally {
        setIsLoading(false);
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
    sendDolyData();
    startCountdown();
    setIsCalling(true);

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
        ticketId,
      }
    );
  };
  const endConversation = async () => {
    await axios.post(
      "https://appraisal-hub.onrender.com/api/conversation/end",
      {
        streamName: streamName,
        accountId: "JZac6x",
        ticketId,
      }
    );
  };

  const handleUploadVideo = async () => {
    try {
      const recordingResponse = await RecordScreen.stopRecording();
      const videoUrl = recordingResponse?.result?.outputURL;

      const isVideoExisting = await RNFS.exists(videoUrl);

      if (isVideoExisting) {
        const formData = new FormData();

        formData.append("title", `video-${ticketId}`);
        formData.append("files", {
          uri: Platform.OS === "android" ? `file://${videoUrl}` : videoUrl,
          name: `record_video_${formatDate(Date.now())}.mp4`,
          type: "application/octet-stream",
        } as unknown as Blob);

        await requestAPI<FormData>({
          method: "POST",
          isUploadFile: true,
          body: formData,
          subject: `${ERequestAPI.UPLOAD_ATTACHMENT_FILE}/${ticketId}`,
        });

        await RNFS.unlink(videoUrl);
      } else {
        setIsLoading(false);
        Alert.alert("Lỗi", "Gửi video không thành công");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Gửi video không thành công");
    }
  };

  useEffect(() => {
    if (seconds === 0) {
      endConversation().then();
      Alert.alert("Thông báo", "Nhân viên không chấp nhận cuộc gọi!", [
        {
          text: "Ok",
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    }
  }, [seconds]);

  useEffect(() => {
    socketService.subscribeToAcceptConversation((data) => {
      if (streamName === data.streamName) {
        setIsCalling(false);
        stopCountdown();
        startLive();
      }
    });
  }, []);

  const handleEndCall = async () => {
    try {
      setIsLoading(true);
      await stopLive();
      await endConversation();
      startedRecording && (await handleUploadVideo());
      navigation.goBack();
    } catch (error) {
      console.log("****** error ******", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecording = async () => {
    const res = await RecordScreen.startRecording();
    setStartedRecording(res === "started");
  };

  return (
    <Box flex={1}>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"s"}
      >
        <Button variant={"transparent"} onPress={handleEndCall}>
          <Icon name="ArrowLeft" />
        </Button>
        <Text fontWeight={"500"}>Quay phim sản phẩm</Text>
        <Icon name="ArrowLeft" color="white" />
      </Box>

      {stream ? (
        <>
          <RTCView
            streamURL={stream.toURL()}
            style={{ width: "100%", height: "100%", zIndex: 0 }}
            objectFit="cover"
          />
          <Box
            position={"absolute"}
            bottom={"15%"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"row"}
          >
            {Platform.Version < "33" ? (
              <Box
                width={50}
                height={50}
                borderRadius={"xxl"}
                borderColor={"accent"}
                borderWidth={1}
                mr={"s"}
              >
                <Button
                  onPress={handleRecording}
                  isFullWidth={true}
                  width={50}
                  height={50}
                  variant={"transparent"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Icon name="UploadCloud" color="accent" />
                </Button>
              </Box>
            ) : (
              <></>
            )}

            <Box width={50} height={50} bg={"red500"} borderRadius={"xxl"}>
              <Button
                onPress={handleEndCall}
                isFullWidth={true}
                label="1212"
                width={50}
                height={50}
                variant={"transparent"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Icon name="PhoneCallEnded" color="white" />
              </Button>
            </Box>
          </Box>
        </>
      ) : null}

      <FadeInOverlay visible={isLoading} />
      {isCalling ? (
        <Box flex={1} alignItems={"center"}>
          <LottieView
            autoPlay
            source={require("../../assets/animations/calling.json")}
            width={"100%"}
            height={"100%"}
          />
          <Box
            position={"absolute"}
            bottom={"30%"}
            width={"100%"}
            alignItems={"center"}
          >
            <Text color={"grey400"} fontWeight={"500"}>
              Đang kết nối tới nhân viên({seconds}s)...
            </Text>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default MillicastWidgetPublisher;
