import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { View } from 'react-native';
import Animated, { ZoomOut } from 'react-native-reanimated';
import styles from './AnimatedSplashScreen.style';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = (props: {
  onAnimationFinish: (value: boolean) => void;
}) => {
  const { onAnimationFinish } = props;
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.main}>
      <AnimatedLottieView
        exiting={ZoomOut}
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        speed={3}
        style={styles.lottieSize}
        source={require('@src/assets/lottie/expertise.json')}
      />
    </View>
  );
};

export default AnimatedSplashScreen;
