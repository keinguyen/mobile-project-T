import React from 'react';
import { Alert } from 'react-native';
import {
  AuthenticationLayout,
  BottomSheetModal,
  Box,
  Button,
  Text,
  TextField,
} from '@src/components';
import { fontSize } from '@src/theme';
import { AuthenticationWithPhoneProps } from './AuthenticationWithPhone.type';

export const AuthenticationWithPhone: React.FC<
  AuthenticationWithPhoneProps
> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  const onPhoneNumberFieldChange = (value: string) => {
    setPhoneNumber(value);
  };

  const hideModal = () => {
    setIsModalOpened(false);
  };

  const onNextButtonPress = () => {
    if (!phoneNumber) {
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại!');
      return;
    }
    setIsModalOpened(true);
  };

  const onConfirmButtonPress = () => {
    navigation.navigate('AuthenticationCodeVerification');
    hideModal();
  };

  return (
    <Box flex={1}>
      <AuthenticationLayout
        title="Tiếp tục đăng nhập"
        subtitle="Tiếp tục đăng nhập để sử dụng Appraise Hub"
        footer={
          <Button isFullWidth label="Tiếp tục" onPress={onNextButtonPress} />
        }>
        <TextField
          inputProps={{
            value: phoneNumber,
            onChangeText: onPhoneNumberFieldChange,
            placeholder: 'Nhập số điện thoại',
            keyboardType: 'phone-pad',
            autoFocus: true,
          }}
        />
      </AuthenticationLayout>
      <BottomSheetModal
        isOpened={isModalOpened}
        snapPoints={['40%']}
        onClose={hideModal}>
        <Box flex={1} alignItems="center" justifyContent="center">
          <Text textAlign="center" variant="header">
            Đăng nhập bằng số điện thoại
          </Text>
          <Text
            variant="primary"
            textAlign="center"
            fontWeight="bold"
            fontSize={fontSize.l}
            marginVertical="m">
            {phoneNumber}
          </Text>
          <Text textAlign="center">
            Chúng tôi sẽ gửi mã xác thực đến số điện thoại mà bạn đã nhập.
          </Text>
          <Text textAlign="center" marginTop="s">
            Bạn có muốn tiếp tục không?
          </Text>
          <Button
            marginTop="m"
            isFullWidth
            onPress={onConfirmButtonPress}
            label="Đồng ý"
          />
          <Button
            isFullWidth
            variant="transparent"
            onPress={hideModal}
            label="Huỷ"
          />
        </Box>
      </BottomSheetModal>
    </Box>
  );
};
