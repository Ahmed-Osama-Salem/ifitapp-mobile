import {
  FlatList,
  I18nManager,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import {RefreshControl} from 'react-native-gesture-handler';
import ArticleCard from '../../modules/homeApp/ArticleCard';
import ScreenGradientHeader from 'Common/DynamicComponents/ScreenGradientHeader/ScreenGradientHeader';
import {RootState, store} from 'Redux/Store';
import {BlogList, fetchBlogs} from 'Redux/Slices/Blog/BlogSlice';
import {useSelector} from 'react-redux';
import {moderateScale, scale} from 'react-native-size-matters';
import SkeletonLoader from 'Common/DynamicComponents/SkeletonLoader/SkeletonLoader';

const Blog = () => {
  const {blogs, loading} = useSelector((state: RootState) => state.blogs);
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

  const renderItem = ({item}: {item: BlogList}) => {
    return <ArticleCard data={item} />;
  };

  const renderPlaceholder = () => (
    <View style={styles.skeletonContainer}>
      <SkeletonLoader style={styles.skeletonImage} />
    </View>
  );

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
        <FlatList
          data={!loading ? blogs : new Array(8).fill({})}
          keyExtractor={(item, index) => index.toString()}
          renderItem={!loading ? renderItem : renderPlaceholder}
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
  skeletonImage: {
    width: '100%',
    height: scale(250),
    borderRadius: 10,
  },
  skeletonContainer: {
    width: '100%',
    gap: moderateScale(10),
    alignItems: 'center',
    marginVertical: I18nManager.isRTL ? 10 : 11,
    minHeight: 200,
    height: 'auto',
    paddingHorizontal: moderateScale(10),
  },
});
