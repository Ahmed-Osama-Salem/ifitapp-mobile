import {StyleSheet, Text} from 'react-native';
import React from 'react';

const HeadText = ({content}: {content: string}) => {
  return <Text style={styles.headText}>{content}</Text>;
};

export default HeadText;

const styles = StyleSheet.create({
  headText: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'Nunito-ExtraBold',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});
