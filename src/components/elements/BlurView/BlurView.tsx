import { createBox } from '@shopify/restyle';
import { Theme, useAppTheme } from '@src/theme';
import { BlurViewProps } from './BlurView.type';

const InnerBlurView = createBox<Theme, BlurViewProps>();

export const BlurView: React.FC<BlurViewProps> = (props) => {
  const { colorScheme } = useAppTheme();
  return (
    <InnerBlurView
      tint={colorScheme === 'dark' ? 'dark' : 'light'}
      {...props}
    />
  );
};
