import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  separator: {
    height: 8,
  },
  contentContainer: {
    paddingBottom: 8,
  },
  statusLabel: {
    position: "absolute",
    right: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default styles;
