import React, { useContext } from "react";
import { Box, Button, Text } from "../elements";
import { AuthContext } from "@src/auth";
import { useSelector } from "react-redux";
import { selectors } from "@src/store/redux";
import { ImageBackground, Platform, StyleSheet } from "react-native";
import Icon from "../Icon";

export const ExploreHeaderTitle = () => {
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
          onPress={() => {
            console.log("****** 1 ******", 1);
          }}
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
