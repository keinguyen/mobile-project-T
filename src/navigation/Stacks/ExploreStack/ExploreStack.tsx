import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Explore } from "@src/screens";
import {
  ExploreScreenProps,
  ExploreStackParamList,
} from "@src/navigation/types";

const Stack = createNativeStackNavigator<ExploreStackParamList>();

export const ExploreStack: React.FC<ExploreScreenProps> = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        options={() => {
          return {
            title: "",
            headerShown: false,
          };
        }}
        name="Explore"
        component={Explore}
      />
    </Stack.Navigator>
  );
};
