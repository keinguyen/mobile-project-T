import { theme } from "@src/theme";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Animated, Easing, StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  testID?: string;
  containerStyle?: ViewStyle;
  customLottieStyle?: ViewStyle;
  backdropColor?: string;
  visible: boolean;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  hideBackground?: boolean;
  isShowActivityIndicator?: boolean;
}

/**
 * An overlay that slowly fade-in when props.visible set to TRUE
 * Why fade-in?
 * You will use this component when calling API.
 * If the API duration is very short, the user won't notice there is loading at all.
 * But if the API duration is more than 3s, the overlay will fully visible.
 * @param props
 */
export function FadeInOverlay(props: Props): JSX.Element {
  const {
    testID,
    visible,
    hideBackground,
    customLottieStyle,
    containerStyle,
    fadeInDuration = 100,
    fadeOutDuration = 100,
    backdropColor,
    isShowActivityIndicator,
  } = props;

  const [innerVisible, setInnerVisible] = useState<boolean>(visible);

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Only animate if there previous state
    if (typeof visible !== "boolean") return;

    if (visible) setInnerVisible(true);

    const animate = Animated.timing(animation, {
      toValue: visible ? 1 : 0,
      duration: visible ? fadeInDuration : fadeOutDuration,
      useNativeDriver: false,
      easing: visible ? Easing.in(Easing.ease) : Easing.out(Easing.ease),
    });

    animate.start(() => {
      if (!visible) setInnerVisible(false);
    });
  }, [animation, visible, fadeInDuration, fadeOutDuration]);

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0,0,0,0)", backdropColor || "rgba(121, 123, 124, 0.8)"],
  });

  if (!innerVisible) return <View />;

  return (
    <Animated.View
      style={[
        styles.backdrop,
        containerStyle,
        !hideBackground ? { backgroundColor } : {},
      ]}
    >
      <Animated.View
        style={[
          styles.loadingWrap,
          { opacity: animation, backgroundColor: theme.colors.white },
        ]}
      >
        {isShowActivityIndicator ? (
          <ActivityIndicator
            color={theme.colors.grey300}
            animating
            size="small"
          />
        ) : (
          <LottieView
            loop
            autoPlay
            testID={testID}
            source={require("../assets/animations/loading.json")}
            style={[styles.lottieView, customLottieStyle]}
          />
        )}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
  },
  loadingWrap: {
    padding: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieView: {
    width: 40,
    height: 40,
  },
});
