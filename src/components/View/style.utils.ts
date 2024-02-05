import { TColorName, theme } from '@src/theme';
import { FlexStyle, StyleProp, ViewProps, ViewStyle } from 'react-native';
type TPadding = {
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
};

type TMargin = {
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

type TRadiusSize = 'large' | 'medium' | 'small' | 'tiny' | 'full';

type TRadius = { [key in TRadiusSize]: number };

const radius: TRadius = {
  large: 24,
  medium: 16,
  small: 12,
  tiny: 8,
  full: 80,
};

const borderUtil = {
  radius,
};

interface TSpacing extends TMargin, TPadding {}

export type TViewProps = ViewProps &
  TSpacing & {
    bg?: TColorName;
    row?: boolean;
    flex?: number;
    align?: FlexStyle['alignItems'];
    alignSelf?: FlexStyle['alignSelf'];
    justify?: FlexStyle['justifyContent'];
    w?: FlexStyle['width'];
    minW?: FlexStyle['minWidth'];
    h?: FlexStyle['height'];
    flexDirection?: FlexStyle['flexDirection'];
    shrink?: FlexStyle['flexShrink'];
    grow?: FlexStyle['flexGrow'];
    wrap?: FlexStyle['flexWrap'];
    borderRadius?: TRadiusSize;
    border?: FlexStyle['borderWidth'];
    borderStyle?: ViewStyle['borderStyle'];
    overflow?: FlexStyle['overflow'];
    borderColor?: TColorName;
    onLayout?: ViewProps['onLayout'];
  };

export const generateSpacingStyle = (spacingProps: TSpacing) => {
  const styles: StyleProp<ViewStyle> = {
    padding: spacingProps.p,
    paddingHorizontal: spacingProps.px,
    paddingVertical: spacingProps.py,
    paddingTop: spacingProps.pt,
    paddingBottom: spacingProps.pb,
    paddingLeft: spacingProps.pl,
    paddingRight: spacingProps.pr,

    margin: spacingProps.m,
    marginHorizontal: spacingProps.mx,
    marginVertical: spacingProps.my,
    marginTop: spacingProps.mt,
    marginBottom: spacingProps.mb,
    marginLeft: spacingProps.ml,
    marginRight: spacingProps.mr,
  };
  return styles;
};

export const generateViewStyle = (viewProps: TViewProps) => {
  const spacingStyle = generateSpacingStyle(viewProps);
  const styles: StyleProp<ViewStyle> = {
    flex: viewProps.flex,
    alignItems: viewProps.align,
    justifyContent: viewProps.justify,
    width: viewProps.w,
    height: viewProps.h,
    flexWrap: viewProps.wrap,
    flexShrink: viewProps.shrink,
    flexGrow: viewProps.grow,
    alignSelf: viewProps.alignSelf,
    borderWidth: viewProps.border,
    minWidth: viewProps.minW,
    overflow: viewProps.overflow,
  };

  let additionalStyles: ViewStyle = {};
  if (viewProps.borderRadius) {
    additionalStyles = {
      ...additionalStyles,
      borderRadius: borderUtil.radius[viewProps.borderRadius],
    };
  }
  if (viewProps.border) {
    additionalStyles.borderColor = theme.colors.grey200;
  }

  if (viewProps.borderColor) {
    additionalStyles = {
      ...additionalStyles,
      borderColor: theme.colors[viewProps.borderColor],
    };
  }

  if (viewProps.bg) {
    styles.backgroundColor = theme.colors[viewProps.bg];
  }

  if (viewProps.row) {
    styles.flexDirection = 'row';
  }
  if (viewProps.flexDirection) {
    styles.flexDirection = viewProps.flexDirection;
  }

  return { ...styles, ...additionalStyles, ...spacingStyle };
};
