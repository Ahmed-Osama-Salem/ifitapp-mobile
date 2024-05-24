import {FlatList} from 'react-native-gesture-handler';
import CustomBottomSheet, {Ref} from './CustomBottomSheet';
import React, {forwardRef} from 'react';
import CategoryItem from './CategoryItem';

const CatrgoryPicker = forwardRef<Ref, any>((props, ref) => {
  const handleCategoryPress = (categoryName: string) => {
    props.parentCategory(categoryName);
  };

  return (
    <>
      <CustomBottomSheet ref={ref}>
        <FlatList
          data={props.categories}
          style={{marginVertical: 10}}
          keyExtractor={item => item._id.toString()}
          renderItem={({item}) => (
            <CategoryItem item={item} onPress={handleCategoryPress} />
          )}
        />
      </CustomBottomSheet>
    </>
  );
});

export default CatrgoryPicker;
