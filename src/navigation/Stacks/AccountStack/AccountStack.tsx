import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@src/components';
import {
  Account,
  AddAddress,
  EditProfile,
  SavedAddresses,
  SelectLocation,
  Settings,
  SupportCenter,
} from '@src/screens';
import {
  AccountScreenProps,
  AccountStackParamList,
} from '@src/navigation/types';

const Stack = createNativeStackNavigator<AccountStackParamList>();

export const AccountStack: React.FC<AccountScreenProps> = (props) => {
  const { navigation } = props;
  const renderAddAddressHeaderRight = () => {
    return (
      <Icon
        name="map"
        size={18}
        isPrimary
        onPress={() => navigation.navigate('SelectLocation')}
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        options={() => {
          return {
            title: 'Tài khoản',
          };
        }}
        name="Account"
        component={Account}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'Chĩnh sửa tài khoản',
          };
        }}
        name="EditProfile"
        component={EditProfile}
      />
      <Stack.Screen
        name="SavedAddresses"
        options={{
          headerTitle: 'Địa chỉ đã lưu',
        }}
        component={SavedAddresses}
      />
      <Stack.Screen
        name="AddAddress"
        options={{
          headerTitle: 'Thêm địa chỉ',
          headerRight: renderAddAddressHeaderRight,
        }}
        component={AddAddress}
      />
      <Stack.Screen
        name="Settings"
        options={{
          headerTitle: 'Cài đặt',
        }}
        component={Settings}
      />
      <Stack.Screen
        name="SupportCenter"
        options={{
          headerTitle: 'Hotline',
        }}
        component={SupportCenter}
      />
      <Stack.Screen
        name="SelectLocation"
        options={{
          headerTitle: 'Chọn vị trí',
        }}
        component={SelectLocation}
      />
    </Stack.Navigator>
  );
};
