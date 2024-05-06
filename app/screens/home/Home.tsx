import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import ArticleCard from '../../modules/homeApp/ArticleCard';
import BlogService, {BlogPost} from '../../server/blog/BlogService';
import {RefreshControl} from 'react-native-gesture-handler';
import HeadText from '../../modules/elements/HeadText';
import ScreenLayout from '../../modules/elements/ScreenLayout';

const Home = () => {
  const articles = new BlogService();

  const [featuredArticles, setFeaturedArticles] = useState<BlogPost[]>([]);
  const [newestArticles, setNewestArticles] = useState<BlogPost[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  console.log(featuredArticles);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useMemo(() => {
    articles
      .getBlogPosts()
      .then(res => {
        if (res) {
          setFeaturedArticles(res.data.data.data.featured);
          setNewestArticles(res.data.data.data.newest);
        }
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
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
        <HeadText content="Top Articles" />
        <View style={styles.ArticlesContainer}>
          {featuredArticles.map(article => (
            <ArticleCard key={article._id} data={article} />
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  ArticlesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
  },
});
