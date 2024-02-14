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
import { TicketStack } from "@src/navigation/Stacks/TicketStack/TicketStack";

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
        iconName = "ArrowLeft";
        break;
      case "ActivityHistoryTab":
        iconName = "ChevronDown";
        break;
      case "NotificationTab":
        iconName = "CornerUpLeft";
        break;
      case "AccountTab":
        iconName = "Clipboard";
        break;
      case "TicketTab":
        iconName = "AlertOctagon";
        break;
      default:
        break;
    }
    return (
      <Icon
        name={iconName}
        size={fontSize.xl}
        color={focused ? "blue500" : "grey300"}
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
        name="TicketTab"
        component={TicketStack}
        options={{
          title: "Yêu cầu",
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="TicketTab"
        component={TicketScreen}
        options={{
          title: 'Yêu cầu',
          headerShown: true,
        }}
      /> */}
      <Tab.Screen
        name="ActivityHistoryTab"
        component={ActivityHistoryStack}
        options={{
          title: "Lịch sử",
        }}
      />
      <Tab.Screen
        name="NotificationTab"
        component={NotificationStack}
        options={{
          title: "Thông Báo",
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
