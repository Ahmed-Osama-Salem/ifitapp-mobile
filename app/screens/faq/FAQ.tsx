/* eslint-disable react-hooks/exhaustive-deps */
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import HeadText from '../../modules/elements/HeadText';
import FAQCard from './components/FAQCard';
import FAQService from '../../server/FAQ/FAQService';

const FAQ = () => {
  const FAQPromise = new FAQService();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useMemo(() => {
    FAQPromise.getFAQs()
      .then(res => {
        if (res) {
          console.log(res.data.data.data);
        }
        return res;
      })
      .catch(err => {
        console.log(err);
        return;
      });
  }, []);

  return (
    <ScreenLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'#F6E117'}
          />
        }>
        <HeadText content="Questions" />
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
    marginVertical: 10,
    gap: 10,
  },
});
