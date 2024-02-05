import React from 'react';
import { SvgProps } from 'react-native-svg';
import * as icons from './icons';
import { TColorName, theme } from '@src/theme';
export type IconName = keyof typeof icons;
interface IIcon extends SvgProps {
  name: IconName;
  size?: number;
  color?: TColorName;
}
const Icon: React.ComponentType<IIcon> = ({
  name,
  color = 'brandPrimary',
  size = 24,
  ...props
}) => {
  const Component = icons[name] as React.ComponentType<SvgProps>;
  return (
    <Component
      width={size}
      height={size}
      color={theme.colors[color]}
      {...props}
    />
  );
};
export default React.memo(Icon);
