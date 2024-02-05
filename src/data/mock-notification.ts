import Chance from 'chance';
const chance = new Chance();

export type Notification = {
  id: string;
  title: string;
  subTitle: string;
};

export const notifications: Notification[] = Array(4)
  .fill(0)
  .map((_) => ({
    id: chance.string({
      length: 8,
      casing: 'upper',
      alpha: true,
      numeric: true,
    }),
    title: 'Sử dụng Appraise Hub',
    subTitle: 'Tiếp tục đăng nhập để sử dụng Appraise Hub',
  }));
