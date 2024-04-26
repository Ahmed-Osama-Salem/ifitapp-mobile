import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArticleCard from '../../modules/homeApp/ArticleCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Top Articles</Text>
        <View style={styles.ArticlesContainer}>
          {[...Array(8).keys()].map(i => (
            <ArticleCard key={i} />
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
  },
  ArticlesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
  },
});
