import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useAppTheme } from "@src/theme";

export const useTransparentHeaderOptions = (): NativeStackNavigationOptions => {
  const { colorScheme } = useAppTheme();
  return {
    headerShown: true,
    headerTitle: "",
    headerTransparent: true,
    headerBackTitleVisible: false,
    headerBlurEffect: colorScheme === "dark" ? "dark" : "light",
  };
};
