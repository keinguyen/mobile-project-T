import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@src/components";
import {
  Account,
  AddAddress,
  EditProfile,
  SavedAddresses,
  SelectLocation,
  Settings,
  SupportCenter,
} from "@src/screens";
import {
  AccountScreenProps,
  AccountStackParamList,
} from "@src/navigation/types";

const Stack = createNativeStackNavigator<AccountStackParamList>();

export const AccountStack: React.FC<AccountScreenProps> = (props) => {
  const { navigation } = props;
  const renderAddAddressHeaderRight = () => {
    return (
      <Icon
        name="map"
        size={18}
        isPrimary
        onPress={() => navigation.navigate("SelectLocation")}
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Account"
        component={Account}
      />
    </Stack.Navigator>
  );
};
