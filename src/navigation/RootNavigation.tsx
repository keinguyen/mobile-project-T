import { PortalHost } from "@gorhom/portal";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { AuthContext } from "@src/auth";
import { ChatStreamProvider } from "@src/features/chat";
import { DishDetails, SearchDishes } from "@src/screens";
import {
  ThemeContext,
  darkTheme,
  theme as defaultTheme,
  getNavigationTheme,
} from "@src/theme";
import React, { useContext, useMemo } from "react";
import { Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { AuthenticationStack } from "./Stacks";
import TabNavigation from "./TabNavigation";
import { RootStackParamList } from "./types";
import { TicketRouter } from "@src/features/chat";
import { useSelector } from "react-redux";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const { theme } = useContext(ThemeContext);

  const navigationTheme = React.useMemo(() => {
    return getNavigationTheme(theme);
  }, [theme]);

  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar
          backgroundColor={
            theme === "light"
              ? defaultTheme.colors.background
              : darkTheme.colors.background
          }
          barStyle={theme === "light" ? "dark-content" : "light-content"}
        />
        <ChatStreamProvider>
          <RootNavigator />
        </ChatStreamProvider>
      </NavigationContainer>
      <PortalHost name="rootPortal" />
    </>
  );
};

function RootNavigator(): JSX.Element {
  const rootOptions: NativeStackNavigationOptions = {
    headerBackTitleVisible: false,
    animation: Platform.select({ ios: "default", android: "slide_from_right" }),
    animationTypeForReplace: "push",
    headerTitleAlign: "center",
    // presentation: 'modal',
    title: " ",
  };

  const userProfile = useSelector((state) => {
    return state.app.userProfile;
  });
  const stacks = useMemo(() => {
    if (userProfile.username) {
      return {
        ["MainStacks"]: {
          screen: TabNavigation,
          options: { headerShown: false },
        },
        ...TicketRouter,
      };
    }
    return {
      ["AuthenticationStacks"]: {
        screen: AuthenticationStack,
        options: { headerShown: false },
      },
      ["DishDetailsModal"]: {
        screen: DishDetails,
        options: {
          headerTransparent: true,
          title: "",
          headerBackTitleVisible: false,
        },
      },
      ["SearchDishesModal"]: {
        screen: SearchDishes,
        options: { headerShown: false },
      },
    };
  }, [userProfile.username]);

  return (
    <RootStack.Navigator screenOptions={rootOptions}>
      {Object.keys(stacks).map((name, i) => {
        const page = stacks[name];
        return (
          <RootStack.Screen
            key={`${name}_${i}`}
            component={page.screen}
            options={page.options}
            name={name as keyof RootStackParamList}
          />
        );
      })}
    </RootStack.Navigator>
  );
}
