/* eslint-disable react-hooks/exhaustive-deps */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import useFetchCategories from '../../askQuestsion/hooks/useFetchCategories';
import {FlatList} from 'react-native-gesture-handler';
import TagItem from '../../../modules/elements/TagItem';

const TagsFilter = () => {
  const {categories, fetchCategories} = useFetchCategories();

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <View>
      <FlatList
        data={categories ? categories[0]?.subCategory : []}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{marginVertical: 10}}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => <TagItem text={item.name.en} />}
      />
    </View>
  );
};

export default TagsFilter;
