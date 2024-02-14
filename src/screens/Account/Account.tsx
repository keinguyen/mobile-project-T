import React from "react";
import {
  Box,
  Divider,
  TextField,
  Button,
  ListRowItem,
  Image,
  Text,
  Card,
  LottieView,
  View,
} from "@src/components";
import {
  ScrollView,
  Alert,
  AlertButton,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { profile } from "@src/data/mock-profile";
import { AuthContext } from "@src/auth";
import { AccountProps } from "./Account.type";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@src/components/Icon";
import { actions } from "@src/store/redux";

export const Account: React.FC<AccountProps> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { signOut } = React.useContext(AuthContext);
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => {
    return state.app.userProfile;
  });

  const alertButtons: AlertButton[] = [
    {
      text: "Huỷ",
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => {
        signOut();
        dispatch(actions.app.deleteProfile());
      },
    },
  ];

  const onSearch = (e: string) => {
    setSearchTerm(e);
  };

  const onLogoutButtonPress = () => {
    Alert.alert("Xác nhận", "Bạn chắc chắn muốn đăng xuất chứ?", alertButtons);
  };

  return (
    <ScrollView>
      <ImageBackground
        resizeMode="stretch"
        style={styles.imageBackground}
        source={require("../../assets/app/profile.jpg")}
      ></ImageBackground>
      <Box style={styles.username} flexDirection={"row"}>
        <View mr={12} />
        <Text
          variant={"secondary"}
          fontSize={18}
          color={"grey400"}
          fontWeight={"500"}
        >
          Xin chào {userProfile.username}!
        </Text>
      </Box>

      <Card borderRadius="m" marginTop="m" marginHorizontal="m">
        <Box flexDirection="row">
          <Box flex={1} justifyContent="center">
            <Text
              variant="secondary"
              fontWeight={"500"}
              fontSize={17}
              color="grey400"
            >
              Hotline hổ trợ kỹ thuật: 0973330980
            </Text>
          </Box>
          <Box width={120} justifyContent="center" alignItems="center">
            <LottieView
              source={require("@src/assets/animations/support-center.json")}
              autoPlay
              width="100%"
            />
          </Box>
        </Box>
      </Card>

      <Box padding="m">
        <Button
          label="Đăng xuất"
          isFullWidth
          variant="transparent"
          onPress={onLogoutButtonPress}
        />
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 80,
  },
  username: {
    position: "absolute",
    top: 24,
    left: 12,
  },
});
