import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";

export const useInitializeApp = async (isLogged: boolean) => {
  const registerDeviceForRemoteMessages = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const deviceToken = await messaging().getToken();

      console.log("****** deviceToken ******", deviceToken);
    } catch (error) {
      console.log("****** error ******", error);
    }
  };

  useEffect(() => {
    isLogged && registerDeviceForRemoteMessages();
  }, [isLogged]);
  return {};
};
