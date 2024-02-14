import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
  ParamListBase,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { TicketStackParamList } from "@src/features/chat";

// Stack Param List
export type RootStackParamList = {
  MainStacks: undefined;
  AuthenticationStacks: undefined;
  DishDetailsModal: undefined;
  SearchDishesModal: undefined;
};

export type AuthStackParamList = {
  Authentication: undefined;
  AuthenticationWithPhone: undefined;
  AuthenticationCodeVerification: undefined;
  Login: {
    username: string;
  };
  ForgotPassword: undefined;
};

export type ExploreStackParamList = {
  Explore: undefined;
  PlaceDetails: undefined;
  Checkout: undefined;
  PlaceList: {
    title?: string;
  };
  ChangeAddress: undefined;
  SavedAddresses: undefined;
  AddAddress: undefined;
  SelectLocation: undefined;
  PaymentMethod: undefined;
  Promotion: undefined;
  TrackOrder: undefined;
  PreJoinPage: undefined;
  RoomPage: { url: string; token: string };
};

export type ActivityHistoryStackParamList = {
  ActivityHistory: undefined;
  ActivityHistoryDetail: undefined;
};

export type NotificationStackParamList = {
  Notification: undefined;
};

export type AccountStackParamList = {
  Account: undefined;
};

export type TabParamList = {
  ExploreTab: NavigatorScreenParams<ExploreStackParamList>;
  ActivityHistoryTab: NavigatorScreenParams<ActivityHistoryStackParamList>;
  NotificationTab: NavigatorScreenParams<NotificationStackParamList>;
  AccountTab: NavigatorScreenParams<AccountStackParamList>;
  TicketTab: NavigatorScreenParams<TicketStackParamList>;
};

// Screen Props
export type ExploreScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "ExploreTab">,
  CompositeScreenProps<
    NativeStackScreenProps<ExploreStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type TicketScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "TicketTab">,
  CompositeScreenProps<
    NativeStackScreenProps<TicketStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type ActivityHistoryScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "ActivityHistoryTab">,
  CompositeScreenProps<
    NativeStackScreenProps<ActivityHistoryStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type NotificationScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "NotificationTab">,
  CompositeScreenProps<
    NativeStackScreenProps<NotificationStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type AccountScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "AccountTab">,
  CompositeScreenProps<
    NativeStackScreenProps<AccountStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type ScreenProps<
  T extends ParamListBase,
  K extends keyof T
> = NativeStackScreenProps<T, K>;

// Navigation Props
export type ExploreStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "ExploreTab">,
  NativeStackNavigationProp<RootStackParamList & ExploreStackParamList>
>;

export type ActivityHistoryStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "ActivityHistoryTab">,
  NativeStackNavigationProp<RootStackParamList & ActivityHistoryStackParamList>
>;

export type AccountStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "AccountTab">,
  NativeStackNavigationProp<RootStackParamList & AccountStackParamList>
>;
