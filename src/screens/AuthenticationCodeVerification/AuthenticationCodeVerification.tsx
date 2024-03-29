import React from 'react';
import { Alert } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { AuthenticationLayout, Box, Button, Text } from '@src/components';
import { fontSize } from '@src/theme';
import { AuthenticationCodeVerificationProps } from './AuthenticationCodeVerification.type';

const CELL_COUNT = 5;
const CODE_FIELD_SIZE = 60;

export const AuthenticationCodeVerification: React.FC<
  AuthenticationCodeVerificationProps
> = ({ navigation }) => {
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onNextButtonPress = () => {
    if (value.length !== 5) {
      Alert.alert('Lỗi', 'Mã xác thực không hợp lệ!');
      return;
    }
    navigation.replace('Login');
  };

  return (
    <AuthenticationLayout
      title="Mã Xác Thực"
      subtitle="Một mã xác thực đã được gửi đến điện thoại di động của bạn."
      footer={
        <Button label="Tiếp tục" isFullWidth onPress={onNextButtonPress} />
      }>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoFocus
        renderCell={({ index, symbol, isFocused }) => (
          <Box
            key={index}
            width={CODE_FIELD_SIZE}
            height={CODE_FIELD_SIZE}
            borderWidth={2}
            borderColor={isFocused ? 'primary' : 'border'}
            borderRadius="m">
            <Text
              textAlign="center"
              fontSize={fontSize.xl}
              lineHeight={CODE_FIELD_SIZE}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </Box>
        )}
      />
    </AuthenticationLayout>
  );
};
