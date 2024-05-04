import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import ArticleCard from '../../modules/homeApp/ArticleCard';
import BlogService, {BlogPost} from '../../server/blog/BlogService';
import {RefreshControl} from 'react-native-gesture-handler';

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
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'#F6E117'}
          />
        }>
        <Text style={styles.text}>Top Articles</Text>
        <View style={styles.ArticlesContainer}>
          {featuredArticles.map(article => (
            <ArticleCard key={article._id} data={article} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginVertical: 20,
    fontFamily: 'Nunito-ExtraBold',
  },
  ArticlesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
  },
});
