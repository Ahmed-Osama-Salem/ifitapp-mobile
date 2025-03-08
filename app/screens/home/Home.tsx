import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RefreshControl} from 'react-native-gesture-handler';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import color from 'Theme/color';
import {SearchIcon} from 'modules/SvgIcons';
import {moderateScale} from 'react-native-size-matters';
import ArticelSingleColumn from 'Common/DynamicComponents/ArticelSingleColumn/ArticelSingleColumn';
import QuestionSingleColumn from 'Common/DynamicComponents/QuestionSingleColumn/QuestionSingleColumn';
import AritcelListCard from 'Common/DynamicComponents/AritcelListCard/AritcelListCard';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchInput}>
            <TypographyText
              content="Search_For_Article_Question"
              color="ifitGrey"
              type="12_Reguler"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSearch}>
            <SearchIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.recomendedArticles}>
          <TypographyText
            content="Top_Rated_Articles"
            color="dark"
            type="18_Bold"
            styles={styles.recomendedTitle}
          />
          <FlatList
            data={[1, 2, 3, 4]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.toString()}
            renderItem={() => <ArticelSingleColumn />}
            contentContainerStyle={{
              paddingVertical: moderateScale(15),
              paddingHorizontal: 20,
            }}
            ItemSeparatorComponent={() => <View style={{width: 15}} />}
          />
        </View>
        <View style={styles.recommendedQuestions}>
          <TypographyText
            content="Top_Rated_Questions"
            color="dark"
            type="18_Bold"
            styles={styles.recomendedTitle}
          />
          <FlatList
            data={[1, 2, 3, 4]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.toString()}
            renderItem={() => <QuestionSingleColumn />}
            contentContainerStyle={{
              paddingVertical: moderateScale(15),
              paddingHorizontal: 20,
              // height: moderateScale(200),
            }}
            ItemSeparatorComponent={() => <View style={{width: 15}} />}
          />
        </View>
        <View>
          <TypographyText
            content="Articles_for_you"
            color="dark"
            type="18_Bold"
            styles={styles.recomendedTitle}
          />
          <FlatList
            data={[1, 2, 3, 4]}
            keyExtractor={item => item.toString()}
            renderItem={() => <AritcelListCard />}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    marginVertical: 20,
    paddingBottom: 40,
  },
  ArticlesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 8,
    height: 80,
  },
  searchInput: {
    width: '84%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: color.lightGrey2,
  },
  iconSearch: {
    width: 50,
    height: 50,
    backgroundColor: color.sunYellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  recomendedArticles: {
    height: moderateScale(250),
  },
  recommendedQuestions: {
    height: moderateScale(210),
  },
  recomendedTitle: {
    paddingHorizontal: 20,
  },
});
