import React from "react";
import { TextInput } from "react-native";
import { Box } from "../Box";
import { InputRestyleProps, TextFieldProps } from "./TextField.type";
import {
  backgroundColor,
  border,
  color,
  createRestyleComponent,
  layout,
  opacity,
  spacing,
  typography,
  visible,
} from "@shopify/restyle";
import { Theme, fontSize, useAppTheme } from "@src/theme";

const InnerTextInput = createRestyleComponent<
  InputRestyleProps & React.ComponentProps<typeof TextInput>,
  Theme
>(
  [
    spacing,
    color,
    backgroundColor,
    layout,
    visible,
    opacity,
    border,
    typography,
  ],
  TextInput
);

export const TextField: React.FC<TextFieldProps> = ({
  leftIcon,
  leftIconSize = fontSize.l,
  hasMargin,
  inputProps: { onFocus, onBlur, ...restInputProps },
  ...rest
}) => {
  const { colors } = useAppTheme();
  const [borderWidth, setBorderWidth] = React.useState(1);
  const handleOnFocus = (e) => {
    setBorderWidth(2);
    onFocus?.(e);
  };

  const handleOnBlur = (e) => {
    setBorderWidth(1);
    onBlur?.(e);
  };

  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      borderRadius="l"
      backgroundColor="card"
      borderWidth={1}
      borderColor={borderWidth === 2 ? "accent" : "border"}
      height={45}
      {...rest}
      margin={hasMargin ? "s" : undefined}
    >
      <InnerTextInput
        color="text"
        fontSize={fontSize.s}
        placeholderTextColor={colors.secondary}
        underlineColorAndroid="transparent"
        flex={1}
        padding="s"
        paddingHorizontal="s"
        paddingLeft={leftIcon ? "s" : undefined}
        borderRadius="l"
        backgroundColor="transparent"
        height="100%"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...restInputProps}
      />
    </Box>
  );
};
