import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon, { IconName } from "@src/components/Icon";
import { TicketScreen } from "@src/features/chat/screens/Ticket";
import { fontSize } from "@src/theme";
import React from "react";
import {
  AccountStack,
  ActivityHistoryStack,
  ExploreStack,
  NotificationStack,
} from "../Stacks";
import { TabParamList } from "../types";
import styles from "./TabNavigation.style";

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator<TabParamList>();
const { Navigator } = Tab;

const renderTabBarIcon = (routeName: keyof TabParamList) => {
  return (props: TabBarIconProps) => {
    const { focused } = props;
    let iconName: IconName = "Archive";
    switch (routeName) {
      case "ExploreTab":
        iconName = "HomeSelected";
        break;
      case "AccountTab":
        iconName = "UserCircle";
        break;
      default:
        break;
    }
    return (
      <Icon
        name={iconName}
        size={fontSize.xl}
        color={focused ? "accent" : "grey300"}
      />
    );
  };
};

const TabNavigation = () => {
  return (
    <Navigator
      initialRouteName="ExploreTab"
      screenOptions={(props) => {
        const {
          route: { name: routeName },
        } = props;
        return {
          headerShown: false,
          tabBarIcon: renderTabBarIcon(routeName),
          tabBarItemStyle: styles.tabItem,
        };
      }}
    >
      <Tab.Screen
        name="ExploreTab"
        component={ExploreStack}
        options={{
          title: "Trang chủ",
        }}
      />

      <Tab.Screen
        name="AccountTab"
        component={AccountStack}
        options={{
          title: "Tài khoản",
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;
