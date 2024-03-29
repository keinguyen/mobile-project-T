import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import { AuthContext } from "@src/auth";
import { AuthStackParamList, ScreenProps } from "@src/navigation/types";
import { AuthenticationLayout, Button, TextField } from "@src/components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actions } from "@src/store/redux";
import { FadeInOverlay } from "@src/components/FadeInOverlay";

export const Login: React.FC<ScreenProps<AuthStackParamList, "Login">> = ({
  navigation,
  route,
}) => {
  const { signIn } = React.useContext(AuthContext);
  const [password, setPassword] = React.useState("");
  const { username } = route.params;
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onPasswordFieldChange = (value: string) => {
    setPassword(value);
  };

  const onSignIn = async () => {
    if (!password) {
      Alert.alert("Lỗi", "Vui lòng nhập mật khẩu của bạn!");
      return;
    }
    Keyboard.dismiss();
    setLoading(true);

    try {
      const res = await axios.get(
        `https://ephemeral-salmiakki-1ae238.netlify.app/.netlify/functions/users?username=${username}&password=${password}`
      );

      if (res?.data?.accessToken) {
        dispatch(
          actions.app.updateProfile({
            username,
            accessToken: res?.data?.accessToken,
          })
        );
        signIn(username, res?.data?.accessToken);
      } else {
        throw "";
      }
    } catch (error) {
      Alert.alert("Lỗi", "Đăng nhập không thành công!");
    } finally {
      setLoading(false);
    }
  };

  const onForgotPassword = () => {
    Alert.alert("Lỗi", "Vui lòng liên hệ nhân viên IT\nHotline: 0973330980");
  };

  return (
    <>
      <AuthenticationLayout
        title="Xin chào bạn"
        subtitle="Vui lòng nhập mật khẩu để sử dụng dịch vụ của chúng tôi."
        footer={
          <>
            <Button
              label="Đăng nhập"
              isFullWidth
              onPress={onSignIn}
              loading={isLoading}
            />
            <Button
              label="Quên mật khẩu"
              isFullWidth
              variant="transparent"
              onPress={onForgotPassword}
            />
          </>
        }
      >
        <TextField
          inputProps={{
            autoFocus: true,
            value: password,
            onChangeText: onPasswordFieldChange,
            placeholder: "Nhập mật khẩu của bạn.",
            secureTextEntry: true,
          }}
        />
      </AuthenticationLayout>
      <FadeInOverlay visible={isLoading} />
    </>
  );
};
