/* eslint-disable react-hooks/exhaustive-deps */
import {
  I18nManager,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import {Buttons, Colors, Fonts} from '../../utils/theme';
import {TextInput} from 'react-native';
import {AskIcon} from '../../modules/SvgIcons';

import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';

const questionSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
});

const AskQuestion = () => {
  // ref for parent category bottom sheet

  return (
    <ScreenLayout>
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{title: '', content: ''}}
          validationSchema={questionSchema}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={styles.formContainer}>
              <TypographyText
                content="Title"
                type="16_Reguler"
                color="ifitGrey"
              />
              <TextInput
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                placeholder="Ex: Power generation"
                placeholderTextColor="#98A1B3"
                style={{...styles.QAinput, height: 58}}
              />
              <TypographyText
                content="content"
                type="16_Reguler"
                color="ifitGrey"
              />
              <TextInput
                onChangeText={handleChange('content')}
                onBlur={handleBlur('content')}
                value={values.content}
                placeholder="Ex: How does power generation work?"
                placeholderTextColor="#98A1B3"
                style={{
                  ...styles.QAinput,
                  height: 200,
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  textAlignVertical: 'top',
                }}
                multiline
              />
              <View style={styles.selectWrapper}>
                <View style={styles.selectContainer}>
                  <View style={styles.selectionHeader}>
                    {/* <TouchableOpacity onPress={handlePresentModalPress}>
                      <Text
                        style={{...Fonts.body, color: Colors.text.secondary}}>
                        Select a Field
                      </Text>
                    </TouchableOpacity>
                    <ResetSelectionButton
                      onPress={handleResetParentSelection}
                    /> */}
                  </View>
                </View>
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

      {/* <CatrgoryPicker
        ref={bottomSheetModalRef}
        categories={categories}
        parentCategory={(value: string) => {
          setSelectedParentCategory(value);
        }}
      /> */}
    </ScreenLayout>
  );
};

export default AskQuestion;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    direction: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
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
    color: Colors.text.primary,
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
  formContainer: {
    paddingBottom: 40,
    width: '100%',
  },
});
