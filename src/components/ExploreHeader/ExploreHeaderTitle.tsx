import React, { useContext } from "react";
import { Box, Icon, Text } from "../elements";
import { AuthContext } from "@src/auth";
import { useSelector } from "react-redux";
import { selectors } from "@src/store/redux";

export const ExploreHeaderTitle = () => {
  const userProfile = useSelector((state) => {
    return state.app.userProfile;
  });

  return (
    <Box flexDirection="row" alignItems="flex-start">
      {/* <Icon name="sunny" color="orange" size={25} /> */}
      <Text marginLeft="s" variant={"header"} color={"primary"}>
        Chào {userProfile.username}
      </Text>
    </Box>
  );
};
