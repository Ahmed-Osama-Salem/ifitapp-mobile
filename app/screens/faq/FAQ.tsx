/* eslint-disable react-hooks/exhaustive-deps */
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import FAQCard from './components/FAQCard';
import TagsFilter from '../home/components/TagsFilter';
import ScreenGradientHeader from 'Common/DynamicComponents/ScreenGradientHeader/ScreenGradientHeader';

const FAQ = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
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
          {[...Array(5)].map((_, index) => (
            <FAQCard key={index} />
          ))}
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
  },
});
