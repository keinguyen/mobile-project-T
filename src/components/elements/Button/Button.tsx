import { LayoutProps, color } from "@shopify/restyle";
import { Theme, extractSpacingProps, useAppTheme } from "@src/theme";
import { Text } from "../Text";
import { ButtonProps } from "./Button.type";
import { getTextColor, getTextFontSize } from "./Button.util";
import { ButtonContainer } from "./ButtonContainer";
import { Touchable } from "../Touchable";
import { Box } from "../Box";
import { ActivityIndicator } from "../ActivityIndicator";
import { StyleSheet } from "react-native";

export const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  isFullWidth,
  textAlign = "center",
  variant,
  buttonSize,
  children,
  loading = false,
  borderRadius = "l",
  ...rest
}) => {
  const alignSelf: LayoutProps<Theme>["alignSelf"] = isFullWidth
    ? "auto"
    : "flex-start";
  const textColor = getTextColor(variant);
  const fontSize = getTextFontSize(buttonSize);
  const { colors } = useAppTheme();
  const { spacingProps, rest: otherProps } = extractSpacingProps(rest);

  const renderContent = () => {
    if (children) {
      return children;
    }
    return (
      <Text color={textColor} textAlign={textAlign} fontSize={fontSize}>
        {label}
      </Text>
    );
  };

  return (
    <Box
      borderRadius={borderRadius}
      overflow="hidden"
      width={isFullWidth ? "100%" : undefined}
      {...spacingProps}
    >
      <Touchable
        variant={variant}
        alignSelf={alignSelf}
        onPress={onPress}
        activeOpacity={0.7}
        borderRadius={borderRadius}
        {...otherProps}
      >
        <ButtonContainer
          variant={variant}
          buttonSize={buttonSize}
          borderRadius={borderRadius}
        >
          {renderContent()}
          {loading && (
            <ActivityIndicator
              color={colors.white}
              style={styles.activityIndicator}
              size={"small"}
            />
          )}
        </ButtonContainer>
      </Touchable>
    </Box>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    position: "absolute",
    right: 10,
    top: 18,
  },
});
