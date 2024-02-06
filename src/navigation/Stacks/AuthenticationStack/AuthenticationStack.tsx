import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@src/navigation/types";
import {
  Authentication,
  AuthenticationCodeVerification,
  AuthenticationWithPhone,
  ForgotPassword,
  Login,
} from "@src/screens";
import { useTransparentHeaderOptions } from "@src/utils";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthenticationStack = () => {
  const transparentHeaderOptions = useTransparentHeaderOptions();
  return (
    <>
      <Stack.Navigator
        initialRouteName="AuthenticationWithPhone"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen
          name="AuthenticationWithPhone"
          component={AuthenticationWithPhone}
          options={transparentHeaderOptions}
        />
        <Stack.Screen
          name="AuthenticationCodeVerification"
          component={AuthenticationCodeVerification}
          options={transparentHeaderOptions}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={transparentHeaderOptions}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={transparentHeaderOptions}
        />
      </Stack.Navigator>
    </>
  );
};
