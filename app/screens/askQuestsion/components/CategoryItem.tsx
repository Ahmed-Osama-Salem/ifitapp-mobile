import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Fonts} from '../../../utils/theme';
import React from 'react';

const CategoryItem = ({item, onPress, isSelected}: any) => {
  return (
    <TouchableOpacity
      style={
        !isSelected
          ? styles.container
          : {...styles.container, backgroundColor: '#f5f5f5'}
      }
      onPress={() => onPress(item.name.en)}>
      <Text
        style={
          !isSelected
            ? {...styles.text, color: 'gray'}
            : {...styles.text, color: '#000'}
        }>
        {item.name.en}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 50,
    borderColor: '#E1E2E6FC',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
  },
  text: {...Fonts.title, textTransform: 'capitalize'},
});
