import { theme } from "@src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  messagesInput: {
    flex: 1,
    marginLeft: -16,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.grey400,
    fontSize: 14,
  },
  messagesInputForAndroid: {
    padding: 0,
  },
  messagesInputForIOS: {
    marginTop: -4,
    marginBottom: 4,
  },
  sendButton: {
    transform: [{ translateY: -15 }],
    marginLeft: -15,
    marginRight: 8,
  },
  attachButton: {
    transform: [{ translateY: -15 }],
    marginRight: -10,
    marginLeft: 8,
  },
  call: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});

export default styles;
