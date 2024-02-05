import React from 'react';
import {
  Box,
  Divider,
  TextField,
  Button,
  ListRowItem,
  Image,
} from '@src/components';
import { ScrollView, Alert, AlertButton } from 'react-native';
import { profile } from '@src/data/mock-profile';
import { AuthContext } from '@src/auth';
import { AccountProps } from './Account.type';

export const Account: React.FC<AccountProps> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { signOut } = React.useContext(AuthContext);

  const alertButtons: AlertButton[] = [
    {
      text: 'Huỷ',
      style: 'cancel',
    },
    { text: 'OK', onPress: () => signOut() },
  ];

  const onSearch = (e: string) => {
    setSearchTerm(e);
  };

  const onLogoutButtonPress = () => {
    Alert.alert('Xác nhận', 'Bạn chắc chắn muốn đăng xuất chứ?', alertButtons);
  };

  return (
    <ScrollView>
      <Box padding="m" backgroundColor="card">
        <TextField
          leftIcon="search"
          inputProps={{
            value: searchTerm,
            placeholder: 'Tìm kiếm',
            onChangeText: onSearch,
          }}
        />
      </Box>
      <Divider />
      <Box backgroundColor="card">
        <ListRowItem
          title={profile.name}
          subTitle="Chỉnh sữa tài khoản"
          onPress={() => navigation.navigate('EditProfile')}
          leftElement={<Image source={profile.avatar} width={60} height={60} />}
          hasChevron
        />
      </Box>
      <Box backgroundColor="card" marginTop="m">
        {/* <Divider />
        <ListRowItem
          title="Địa chỉ đã lưu"
          onPress={() => navigation.navigate('SavedAddresses')}
          hasChevron
        /> */}
        <Divider />
        <ListRowItem
          title="Cài đặt"
          onPress={() => navigation.navigate('Settings')}
          hasChevron
        />
        <Divider />
        <ListRowItem
          title="Hotline"
          onPress={() => navigation.navigate('SupportCenter')}
          hasChevron
        />
        <Divider />
        {/* <ListRowItem title="Share Feedback" hasChevron /> */}
      </Box>
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
