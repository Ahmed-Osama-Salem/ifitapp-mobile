/* eslint-disable react-hooks/exhaustive-deps */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import BackArrowButton from '../../modules/elements/BackArrowButton';
import {Buttons, Fonts} from '../../utils/theme';
import {TextInput} from 'react-native';
import {AskIcon} from '../../modules/SvgIcons';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import CatrgoryPicker from './components/CategoryPicker';
import useFetchCategories from './hooks/useFetchCategories';
import CustomBottomSheet from './components/CustomBottomSheet';
import CategoryItem from './components/CategoryItem';
import TagItem from '../../modules/elements/TagItem';
import SelectPlaceholder from './components/SelectPlaceholder';
import ResetSelectionButton from './components/ResetSelectionButton';
import {FlatList} from 'react-native-gesture-handler';

const questionSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
});

const AskQuestion = () => {
  const {categories, fetchCategories} = useFetchCategories();
  const [selectedParentCategory, setSelectedParentCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  // ref for parent category bottom sheet
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const closeParentCategoryModal = () => {
    if (selectedParentCategory !== '') {
      bottomSheetModalRef.current?.close();
    }
  };

  const findSubCategoriesOfTheParent = () => {
    if (selectedParentCategory !== '') {
      const subcategoryObj = categories.find(
        el => el.name.en === selectedParentCategory,
      );
      setSubCategories(subcategoryObj.subCategory);
    }
  };

  // ref for parent category bottom sheet
  const bottomSheetSubCategoryRef = useRef<BottomSheetModal>(null);

  const handlePresentSubCategoryModal = useCallback(() => {
    bottomSheetSubCategoryRef.current?.present();
    findSubCategoriesOfTheParent();
  }, [selectedParentCategory, categories]);

  const closeSubCategoryModal = () => {
    if (selectedSubCategory !== '') {
      bottomSheetSubCategoryRef.current?.close();
    }
  };

  const handleResetParentSelection = () => {
    setSelectedParentCategory('');
  };

  const handleResetSubSelection = () => {
    setSelectedSubCategory('');
  };

  const isSelected = (category: string, selectedCategory: string) => {
    if (category === selectedCategory) {
      return true;
    }
  };

  useEffect(() => {
    closeParentCategoryModal();
  }, [selectedParentCategory]);

  useEffect(() => {
    closeSubCategoryModal();
  }, [selectedSubCategory]);

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenLayout>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <BackArrowButton />
          <Text style={Fonts.title}>Ask a Question</Text>
        </View>
        <Formik
          initialValues={{title: '', content: ''}}
          validationSchema={questionSchema}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={{paddingBottom: 40}}>
              <Text style={Fonts.body}>Title</Text>
              <TextInput
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                placeholder="Ex: Power generation"
                placeholderTextColor="#98A1B3"
                style={{...styles.QAinput, height: 58}}
              />
              <Text style={Fonts.body}>Content</Text>
              <TextInput
                onChangeText={handleChange('content')}
                onBlur={handleBlur('content')}
                value={values.content}
                placeholder="Ex: How does power generation work?"
                placeholderTextColor="#98A1B3"
                style={{...styles.QAinput, height: 200}}
                multiline
              />
              <View style={styles.selectWrapper}>
                <View style={styles.selectContainer}>
                  <View style={styles.selectionHeader}>
                    <TouchableOpacity onPress={handlePresentModalPress}>
                      <Text>Select a Field</Text>
                    </TouchableOpacity>
                    <ResetSelectionButton
                      onPress={handleResetParentSelection}
                    />
                  </View>
                  {selectedParentCategory !== '' ? (
                    <TagItem text={selectedParentCategory} />
                  ) : (
                    <SelectPlaceholder onPress={handlePresentModalPress} />
                  )}
                </View>
                {selectedParentCategory !== '' ? (
                  <View style={styles.selectContainer}>
                    <View style={styles.selectionHeader}>
                      <TouchableOpacity onPress={handlePresentSubCategoryModal}>
                        <Text>Select a Specialization</Text>
                      </TouchableOpacity>
                      <ResetSelectionButton onPress={handleResetSubSelection} />
                    </View>
                    {selectedSubCategory !== '' ? (
                      <TagItem text={selectedSubCategory} />
                    ) : (
                      <SelectPlaceholder
                        onPress={handlePresentSubCategoryModal}
                      />
                    )}
                  </View>
                ) : null}
              </View>

              <TouchableOpacity
                style={Buttons.primary}
                // disabled={isSubmitting}
                onPress={handleSubmit as any}>
                <View style={styles.buttonContent}>
                  <AskIcon colorStroke="#231A16" width={24} height={25} />
                  <Text style={Buttons.buttonText}>Send my Question</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>

      <CatrgoryPicker
        ref={bottomSheetModalRef}
        categories={categories}
        parentCategory={(value: string) => {
          setSelectedParentCategory(value);
        }}
      />
      <CustomBottomSheet ref={bottomSheetSubCategoryRef}>
        <FlatList
          data={subCategories}
          style={styles.listStyle}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContaier}
          keyExtractor={item => item._id.toString()}
          renderItem={({item}) => (
            <CategoryItem
              item={item}
              isSelected={isSelected(item.name.en, selectedSubCategory)}
              onPress={sub => {
                setSelectedSubCategory(sub);
              }}
            />
          )}
        />
      </CustomBottomSheet>
    </ScreenLayout>
  );
};

export default AskQuestion;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  QAinput: {
    width: '100%',
    borderRadius: 10,
    borderColor: '#E1E2E6FC',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  selectWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 15,
    marginVertical: 15,
  },
  selectContainer: {gap: 5, flexDirection: 'column'},
  selectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listStyle: {
    marginTop: 10,
    marginBottom: 30,
    flex: 1,
  },
  listContaier: {
    alignItems: 'center',
    gap: 10,
    width: '100%',
    flexGrow: 1,
  },
});
