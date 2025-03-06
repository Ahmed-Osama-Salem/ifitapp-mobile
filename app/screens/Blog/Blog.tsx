import {FlatList, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import {RefreshControl} from 'react-native-gesture-handler';
import ArticleCard from '../../modules/homeApp/ArticleCard';
import TagsFilter from '../home/components/TagsFilter';
import ScreenGradientHeader from 'Common/DynamicComponents/ScreenGradientHeader/ScreenGradientHeader';
import {RootState, store} from 'Redux/Store';
import {fetchBlogs} from 'Redux/Slices/Blog/BlogSlice';
import {useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

const Blog = () => {
  const {blogs} = useSelector((state: RootState) => state.blogs);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    store.dispatch(fetchBlogs()).unwrap();
  }, []);

  return (
    <ScreenLayout>
      <ScreenGradientHeader content="Blog" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.screenContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'#F6E117'}
          />
        }>
        {/* <TagsFilter /> */}
        <FlatList
          data={blogs}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ArticleCard data={item} />}
          scrollEnabled={false}
          contentContainerStyle={styles.ArticlesContainer}
        />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Blog;

const styles = StyleSheet.create({
  ArticlesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  screenContainer: {
    paddingBottom: 40,
  },
});
