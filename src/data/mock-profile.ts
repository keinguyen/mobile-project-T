import { ImageSourcePropType } from 'react-native';

import Chance from 'chance';
const chance = new Chance();

export type Profile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: ImageSourcePropType;
  coverPhoto: ImageSourcePropType;
};

export const profile: Profile = {
  id: chance.string({ length: 8, casing: 'upper', alpha: true, numeric: true }),
  name: 'Nguyễn Văn A',
  email: 'nguyenvana@gmail.com',
  phone: '0973333333',
  avatar: require('../assets/profile/cover-photo.jpg'),
  coverPhoto: require('../assets/profile/cover-photo.jpg'),
};
