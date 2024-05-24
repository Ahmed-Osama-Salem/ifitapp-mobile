import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../utils/theme';

const TagItem = ({text}: {text: string}) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagStyle}>{text}</Text>
    </View>
  );
};

export default TagItem;

const styles = StyleSheet.create({
  tagContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    alignSelf: 'baseline',
  },
  tagStyle: {
    ...Fonts.body,
    textTransform: 'capitalize',
    color: '#000',
  },
});
