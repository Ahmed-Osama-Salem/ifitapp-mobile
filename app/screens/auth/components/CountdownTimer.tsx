import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

interface CountdownTimerProps {
  seconds: number;
  setSeconds: (seconds: number) => void;
}
const CountdownTimer = (props: CountdownTimerProps) => {
  const styles = useStyles();

  const {seconds, setSeconds} = props;

  useEffect(() => {
    if (seconds <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <TypographyText
        content={formatTime(seconds)}
        color="tundora"
        type="16_Bold"
      />
    </View>
  );
};

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
  });
};

export default CountdownTimer;
