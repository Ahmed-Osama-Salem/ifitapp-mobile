import {
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';
import {HeartIcon, ProfileIcon} from '../SvgIcons';
import {Colors} from '../../utils/theme';
import TypographyText from 'Common/DynamicComponents/TypographyText/TypographyText';
import {FlatList} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import color from 'Theme/color';
import {convertToDate} from 'utils/ConvertDate';
import {TextStyle} from 'Common/DynamicComponents/TypographyText/Typography.system';
import {BlogList} from 'Redux/Slices/Blog/BlogSlice';

interface ArticleCardProps {
  data: BlogList;
}

const ArticleCard = (props: ArticleCardProps) => {
  const {width} = useWindowDimensions();
  const navigation: any = useNavigation();
  const systemFonts = [
    ...defaultSystemFonts,
    'Nunito-Regular',
    'Nunito-Bold',
    'NotoKufiArabic-Regular',
    'NotoKufiArabic-Bold',
  ];

  const tagsStyles = {
    p: {
      fontSize: TextStyle['12_Reguler'].fontSize,
      color: '#98A1B3',
      fontFamily: TextStyle['12_Reguler'].fontFamily,
      textAlign: 'left',
    },
  };
  const source = {
    html: props.data.content.replace('h1>', 'p>').slice(0, 100) + '...',
  };

  const navigateToSinglePost = () => {
    navigation.navigate('PostDetails', {
      slug: props.data.slug,
      title: props.data.title,
    });
  };

  const renderItem = ({item}: {item: BlogList['categories']}) => {
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
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.autherHeader}>
          <ProfileIcon colorStroke="#666E80" />
          <TypographyText
            content={I18nManager.isRTL ? 'محمد الفيت' : 'Mohamed Elfit'}
            type="12_Medium"
            color="dark"
          />

          <TypographyText
            content={convertToDate(props?.data?.created_at)}
            type="12_Medium"
            color="ifitGrey"
          />
        </View>
        <View style={styles.contentContainer}>
          <TypographyText
            content={props.data.title.slice(0, 30)}
            type="16_Bold"
            color="dark"
            numberOfLines={2}
          />
          <TypographyText
            content={!I18nManager.isRTL ? '4 min read' : '4 دقائق قراءة'}
            type="12_Medium"
            color="ifitGrey"
          />
        </View>
      </View>
      <View>
        <FlatList
          data={props.data.categories as unknown as BlogList['categories'][]}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
        />
      </View>
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.cardHeader}>
        <RenderHtml
          contentWidth={width}
          source={source}
          systemFonts={systemFonts}
          tagsStyles={tagsStyles}
        />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.cardHeader}>
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => {
              navigateToSinglePost();
            }}>
            <TypographyText content="Read" type="12_Medium" color="dark" />
          </TouchableOpacity>
        </View>
        <View style={styles.footerIcon}>
          <HeartIcon size={30} />
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    paddingVertical: moderateScale(10),
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#E1E2E680',
    borderWidth: 1,
    minHeight: 200,
    height: 'auto',
    direction: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  cardHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    gap: 10,
  },
  autherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyles: {
    color: Colors.text.tertiary,
    fontFamily: TextStyle['12_Reguler'].fontFamily,
    fontSize: TextStyle['12_Reguler'].fontSize,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#231A16',
    fontFamily: 'Nunito-Bold',
  },
  imageStyle: {
    width: '100%',
    height: 200,
    marginVertical: moderateScale(12),
  },
  authButton: {
    backgroundColor: '#F6E117',
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    width: '100%',
  },
  buttonText: {
    color: '#231A16',
    textAlign: 'center',
    // fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Nunito-ExtraBold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  footerIcon: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  category: {
    backgroundColor: color.lightGrey,
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: moderateScale(5),
  },
});
