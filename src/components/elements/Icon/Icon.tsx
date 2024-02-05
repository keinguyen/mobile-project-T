import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBox } from '@shopify/restyle';
import { Theme, fontSize, useAppTheme } from '@src/theme';
import { IconProps } from './Icon.type';

const InnerIcon = createBox<Theme>(IconFontAwesome);

export const Icon: React.FC<IconProps> = ({ isPrimary, ...rest }) => {
  const { colors } = useAppTheme();
  return <InnerIcon {...rest} />;
};
