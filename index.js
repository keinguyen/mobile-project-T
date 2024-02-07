/**
 * @format
 */

import 'react-native-gesture-handler';
import { Alert, AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import messaging from "@react-native-firebase/messaging";
import { registerGlobals } from 'react-native-webrtc';
registerGlobals();

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('****** remoteMessage ******', remoteMessage);
  
  Alert.alert("Yêu cầu bạn đã có kết quả!", "", [
    { onPress: () => console.log("****** 1 *****", 1), text: "Đồng ý" },
  ]);
});

AppRegistry.registerComponent(appName, () => App);
