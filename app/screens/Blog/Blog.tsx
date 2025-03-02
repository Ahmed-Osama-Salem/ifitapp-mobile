import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import {RefreshControl} from 'react-native-gesture-handler';
import ArticleCard from '../../modules/homeApp/ArticleCard';
import TagsFilter from '../home/components/TagsFilter';
import ScreenGradientHeader from 'Common/DynamicComponents/ScreenGradientHeader/ScreenGradientHeader';

const Blog = () => {
  // const [featuredArticles, setFeaturedArticles] = useState<BlogPost[]>([]);
  // const [newestArticles, setNewestArticles] = useState<BlogPost[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScreenLayout>
      <ScreenGradientHeader content="Articles" />
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
        {/* <View style={styles.ArticlesContainer}>
          {featuredArticles.map(article => (
            <ArticleCard key={article._id} data={article} />
          ))}
        </View> */}
      </ScrollView>
    </ScreenLayout>
  );
};

export default Blog;

const styles = StyleSheet.create({
  ArticlesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
  },
});
