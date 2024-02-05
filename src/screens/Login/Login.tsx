import React from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '@src/auth';
import { AuthStackParamList, ScreenProps } from '@src/navigation/types';
import { AuthenticationLayout, Button, TextField } from '@src/components';

export const Login: React.FC<ScreenProps<AuthStackParamList, 'Login'>> = ({
  navigation,
}) => {
  const { signIn } = React.useContext(AuthContext);
  const [password, setPassword] = React.useState('');

  const onPasswordFieldChange = (value: string) => {
    setPassword(value);
  };

  const onSignIn = () => {
    if (!password) {
      Alert.alert('Lỗi', 'Vui lòng nhập mật khẩu của bạn!');
      return;
    }
    signIn();
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <AuthenticationLayout
      title="Xin chào bạn"
      subtitle="Vui lòng nhập mật khẩu để sử dụng dịch vụ của chúng tôi."
      footer={
        <>
          <Button label="Đăng nhập" isFullWidth onPress={onSignIn} />
          <Button
            label="Quên mật khẩu"
            isFullWidth
            variant="transparent"
            onPress={onForgotPassword}
          />
        </>
      }>
      <TextField
        inputProps={{
          autoFocus: true,
          value: password,
          onChangeText: onPasswordFieldChange,
          placeholder: 'Nhập mật khẩu của bạn.',
          secureTextEntry: true,
        }}
      />
    </AuthenticationLayout>
  );
};
