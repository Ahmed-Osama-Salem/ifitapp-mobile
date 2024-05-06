/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import BackArrowButton from '../../modules/elements/BackArrowButton';
import {Buttons, Fonts} from '../../utils/theme';
import {TextInput} from 'react-native';
import {AskIcon} from '../../modules/SvgIcons';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import CustomBottomSheet from './components/CustomBottomSheet';

const questionSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
});

const AskQuestion = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <ScreenLayout>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
              <View style={{marginVertical: 20, flexDirection: 'row'}}>
                <Button
                  onPress={handlePresentModalPress}
                  title="Select a Category"
                  color="black"
                />
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
      <CustomBottomSheet ref={bottomSheetModalRef}>
        <Text>hello</Text>
      </CustomBottomSheet>
    </ScreenLayout>
  );
};

export default AskQuestion;

const styles = StyleSheet.create({
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
});
