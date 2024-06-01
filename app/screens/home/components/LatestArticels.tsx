import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from '../../../utils/theme';

const LatestArticels = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.listStyle}
      scrollEnabled
      // contentContainerStyle={styles.listContainer}
      snapToAlignment="start"
      initialScrollIndex={0}
      keyExtractor={item => item.toString()}
      nestedScrollEnabled
      pagingEnabled
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text>Article {item}</Text>
        </View>
      )}
    />
  );
};

export default LatestArticels;

const styles = StyleSheet.create({
  listStyle: {
    marginTop: 10,
    marginBottom: 10,
    flexGrow: 0,
  },
  listContainer: {
    gap: 10,
    justifyContent: 'center',
  },
  itemContainer: {
    width: 300,
    height: 150,
    borderRadius: 10,
    backgroundColor: Colors.background.tertiary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    alignSelf: 'baseline',
  },
});
