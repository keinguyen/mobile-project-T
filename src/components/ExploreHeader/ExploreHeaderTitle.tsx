import React, { useContext } from "react";
import { Box, Icon, Text } from "../elements";
import { AuthContext } from "@src/auth";

export const ExploreHeaderTitle = () => {
  const { userProfile } = useContext(AuthContext);

  return (
    <Box flexDirection="row" alignItems="flex-start">
      <Icon name="sunny" color="orange" size={25} />
      <Text marginLeft="s" variant={"header"} color={"primary"}>
        Chào {userProfile.userName}
      </Text>
    </Box>
  );
};
