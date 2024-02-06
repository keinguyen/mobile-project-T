import React from "react";
import { Alert } from "react-native";
import { AuthenticationLayout, Box, Button, TextField } from "@src/components";
import { AuthenticationWithPhoneProps } from "./AuthenticationWithPhone.type";

export const AuthenticationWithPhone: React.FC<
  AuthenticationWithPhoneProps
> = ({ navigation }) => {
  const [username, setUsername] = React.useState("");

  const onUsernameFieldChange = (value: string) => {
    setUsername(value);
  };

  const onNextButtonPress = () => {
    if (!username) {
      Alert.alert("Lỗi", "Vui lòng nhập tên người dùng!");
      return;
    }

    navigation.navigate("Login", {
      username,
    });
  };

  return (
    <Box flex={1}>
      <AuthenticationLayout
        title="Tiếp tục đăng nhập"
        subtitle="Tiếp tục đăng nhập để sử dụng Appraise Hub"
        footer={
          <Button isFullWidth label="Tiếp tục" onPress={onNextButtonPress} />
        }
      >
        <TextField
          inputProps={{
            value: username,
            onChangeText: onUsernameFieldChange,
            placeholder: "Nhập tên người dùng",
            keyboardType: "default",
            autoFocus: true,
          }}
        />
      </AuthenticationLayout>
    </Box>
  );
};
