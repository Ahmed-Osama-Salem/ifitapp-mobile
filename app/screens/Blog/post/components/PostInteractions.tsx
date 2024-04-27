import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostInteractions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Save</Text>
      <Text style={styles.textStyle}>Helpful</Text>
      <Text style={styles.textStyle}>Comment</Text>
    </View>
  );
};

export default PostInteractions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 40,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Nunito-Regular',
  },
});
