import React from "react";
import { Box, Button, Text } from "../elements";
import { useSelector } from "react-redux";
import { ImageBackground, Platform, StyleSheet } from "react-native";
import Icon from "../Icon";
import { screens } from "@src/features/chat";

export const ExploreHeaderTitle = ({ navigation }) => {
  const userProfile = useSelector((state) => {
    return state.app.userProfile;
  });

  return (
    <Box bg={"white"} paddingRight={"10%"}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.imageBackground}
        source={require("../../assets/app/homescreen.jpg")}
      ></ImageBackground>
      <Box style={styles.setting}>
        <Button
          variant={"transparent"}
          onPress={() => navigation.navigate(screens.CreateTicket)}
        >
          <Box flexDirection={"row"}>
            <Icon name="PlusCircle" color={"grey400"} />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 80,
  },
  username: {
    bottom: 25,
  },
  setting: {
    position: "absolute",
    right: 0,
  },
});
