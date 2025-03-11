/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const LottiLogoView = () => {
  const ref = useRef<AnimatedLottieView>(null);
  const [appIsReady, setAppIsReady] = useState(false);

  const navigation: any = useNavigation();

  useEffect(() => {
    async function prepare() {
      try {
        setTimeout(() => ref.current?.play());

        return () => {
          ref.current?.reset();
        };
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        // setAppIsReady(true);
        // appReady(isReady);
        // onLayoutRootView();
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      navigation.navigate('HomeApp');
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeApp'}],
      });
    }
  }, [appIsReady]);

  return (
    <LottieView
      ref={ref}
      autoPlay
      source={require('../../assets/logo.json')}
      loop={false}
      onAnimationFinish={isCancelled => {
        if (!isCancelled) {
          setAppIsReady(true);
        }
      }}
      style={{
        width: 240,
        height: 240,
        transform: [{translateX: -3}],
      }}
      autoSize
      resizeMode="cover"
      speed={0.9}
    />
  );
};

export default LottiLogoView;
