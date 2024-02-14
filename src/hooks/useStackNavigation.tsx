import { useNavigation } from "@react-navigation/native";
import {
  ActivityHistoryStackNavigationProp,
  ExploreStackNavigationProp,
  TicketScreenProps,
} from "@src/navigation";

export const useExploreStackNavigation = () => {
  return useNavigation<ExploreStackNavigationProp>();
};

export const useActivityHistoryStackNavigation = () => {
  return useNavigation<ActivityHistoryStackNavigationProp>();
};

export const useTicketNavigation = () => {
  return useNavigation<TicketScreenProps>();
};
