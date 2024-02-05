import { ImageSourcePropType } from 'react-native';

type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Nhà Đất',
    image: require('@src/assets/categories/category-1.png'),
  },
  {
    id: '2',
    name: 'Thú cưng',
    image: require('@src/assets/categories/category-2.png'),
  },
  {
    id: '3',
    name: 'Xe máy',
    image: require('@src/assets/categories/category-3.png'),
  },
  {
    id: '4',
    name: 'Xe oto',
    image: require('@src/assets/categories/category-4.png'),
  },
  {
    id: '5',
    name: 'Chứng minh',
    image: require('@src/assets/categories/category-5.png'),
  },
  {
    id: '6',
    name: 'Điện máy',
    image: require('@src/assets/categories/category-6.png'),
  },
  {
    id: '7',
    name: 'Đô la',
    image: require('@src/assets/categories/category-7.png'),
  },
  {
    id: '8',
    name: 'Vàng',
    image: require('@src/assets/categories/category-8.png'),
  },
];
