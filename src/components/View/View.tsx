import {
  TViewProps,
  generateViewStyle,
} from '@src/components/View/style.utils';
import React from 'react';
import { View as ViewOriginal } from 'react-native';

export const View: React.FC<TViewProps> = (props: TViewProps) => {
  const viewStyle = generateViewStyle(props);
  return <ViewOriginal {...props} style={[viewStyle, props.style]} />;
};
