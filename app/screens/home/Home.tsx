import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import ArticleCard from '../../modules/homeApp/ArticleCard';
import BlogService, {BlogPost} from '../../server/blog/BlogService';
import {RefreshControl} from 'react-native-gesture-handler';
import ScreenLayout from '../../modules/elements/ScreenLayout';
// import LatestArticels from './components/LatestArticels';

const Home = () => {
  // const articles = new BlogService();

  const [featuredArticles, setFeaturedArticles] = useState<BlogPost[]>([]);
  const [newestArticles, setNewestArticles] = useState<BlogPost[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  //  useEffect(() => {

  //  }, []);

  return (
    <ScreenLayout>
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
        {/* <LatestArticels /> */}
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
  screenContainer: {
    marginVertical: 20,
  },
  ArticlesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 20,
  },
});
