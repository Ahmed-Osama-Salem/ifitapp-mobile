import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostInteractions = () => {
  return (
    <View style={styles.container}>
      <Text>Save</Text>
      <Text>Helpful</Text>
      <Text>Comment</Text>
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
});
