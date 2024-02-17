import React from "react";
import { ScrollView } from "react-native";
import { AuthenticationLayoutProps } from "./AuthenticationLayout.type";
import { Box, Text } from "../elements";
import { useSafeAreaScrollViewStyles } from "@src/hooks";

export const AuthenticationLayout = ({
  title,
  subtitle,
  children,
  footer,
}: AuthenticationLayoutProps) => {
  const styles = useSafeAreaScrollViewStyles(true, true);
  return (
    <ScrollView
      contentContainerStyle={[styles.contentContainer]}
      keyboardShouldPersistTaps={true}
    >
      <Box marginTop="20%" marginBottom="m" flex={1}>
        <Box alignItems={"center"} px={"m"}>
          <Text fontWeight="bold" variant="largeHeader">
            {title}
          </Text>
          {subtitle ? (
            <Text variant="secondary" marginVertical="s">
              {subtitle}
            </Text>
          ) : null}
        </Box>
        <Box marginTop="m" width={"100%"}>
          {children}
        </Box>
      </Box>

      {footer ? <Box>{footer}</Box> : null}
    </ScrollView>
  );
};
