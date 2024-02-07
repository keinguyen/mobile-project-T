import messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";
import { Alert } from "react-native";

const useNotification = () => {
  const onMessageReceived = (message: FirebaseMessagingTypes.RemoteMessage) => {
    Alert.alert("Yêu cầu bạn đã có kết quả!", "", [
      { onPress: () => console.log("****** 1 *****", 1), text: "Đồng ý" },
    ]);
  };

  const initializeMessaging = () => {
    messaging().onMessage(onMessageReceived);
    messaging().setBackgroundMessageHandler(async (message) => {
      console.log("****** message ******", message);

      Alert.alert("Yêu cầu bạn đã có kết quả!", "", [
        { onPress: () => console.log("****** 1 *****", 1), text: "Đồng ý" },
      ]);
    });
  };

  initializeMessaging();
};

export default useNotification;
