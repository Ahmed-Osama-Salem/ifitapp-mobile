/* eslint-disable react-hooks/exhaustive-deps */
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import FAQCard from './components/FAQCard';
import TagsFilter from '../home/components/TagsFilter';
import ScreenGradientHeader from 'Common/DynamicComponents/ScreenGradientHeader/ScreenGradientHeader';
import {RootState, store} from 'Redux/Store';
import {fetchQuestions} from 'Redux/Slices/Questions/questionSlice';
import {useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

const FAQ = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {questions} = useSelector((state: RootState) => state.questions);
  console.log(questions);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Fetch questions
    store
      .dispatch(fetchQuestions())
      .unwrap()
      .catch(() => {});
  }, []);

  return (
    <ScreenLayout>
      <ScreenGradientHeader content="Questions" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'#F6E117'}
          />
        }>
        <TagsFilter />
        <View style={styles.faqContainer}>
          <FlatList
            data={questions?.results}
            renderItem={({item}) => <FAQCard question={item} />}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{height: 12}} />}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  faqContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 60,
    gap: 10,
    paddingHorizontal: moderateScale(12),
  },
});
