import {
  FlatList,
  I18nManager,
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
import ArticelSingleColumn from 'screens/home/components/ArticelSingleColumn/ArticelSingleColumn';
import QuestionSingleColumn from 'screens/home/components/QuestionSingleColumn/QuestionSingleColumn';
import AritcelListCard, {
  categories,
} from 'screens/home/components/AritcelListCard/AritcelListCard';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity style={styles.category}>
        <TypographyText
          content={I18nManager.isRTL ? item.name_ar : item.name_en}
          type="12_Medium"
          color="dark"
        />
      </TouchableOpacity>
    );
  };

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
        <View>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: moderateScale(18),
            }}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
          />
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
              paddingBottom: moderateScale(15),
              paddingTop: moderateScale(7),
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
              paddingBottom: moderateScale(15),
              paddingTop: moderateScale(7),
              paddingHorizontal: 20,
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
        <View>
          <TypographyText
            content="Choose_your_route"
            color="dark"
            type="18_Bold"
            styles={styles.recomendedTitle}
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
    marginHorizontal: moderateScale(18),
    marginVertical: moderateScale(12),
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
    paddingVertical: moderateScale(8),
  },
  recommendedQuestions: {
    paddingVertical: moderateScale(8),
  },
  recomendedTitle: {
    paddingHorizontal: 20,
  },
  category: {
    backgroundColor: '#fff59b',
    borderRadius: 100,
    paddingHorizontal: 15,
    marginBottom: moderateScale(14),
    paddingVertical: moderateScale(5),
  },
});
