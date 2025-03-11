import React, {useEffect} from 'react';
import {ViewStyle} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import color from 'Theme/color';

const SkeletonLoader = ({style}: {style: ViewStyle}) => {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, []); // Runs once when component mounts

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[style, animatedStyle, {backgroundColor: color.lightGrey2}]}
    />
  );
};

export default SkeletonLoader;
