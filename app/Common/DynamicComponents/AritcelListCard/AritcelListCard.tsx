import {
  FlatList,
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import color from 'Theme/color';
import TypographyText from '../TypographyText/TypographyText';
import {convertToDate} from 'utils/ConvertDate';
import {ProfileIcon} from 'modules/SvgIcons';

export const categories = [
  {id: 1, name_en: 'Structural Engineering', name_ar: 'الهندسة الإنشائية'},
  {id: 3, name_en: 'Transportation Engineering', name_ar: 'هندسة النقل'},
  {id: 2, name_en: 'Geotechnical Engineering', name_ar: 'الهندسة الجيوتقنية'},
  {
    id: 4,
    name_en: 'Water Resources Engineering',
    name_ar: 'هندسة الموارد المائية',
  },
  {id: 5, name_en: 'Environmental Engineering', name_ar: 'الهندسة البيئية'},
  {id: 6, name_en: 'Construction Management', name_ar: 'إدارة التشييد'},
  {id: 7, name_en: 'Surveying and Geomatics', name_ar: 'المساحة والجيوماتكس'},
  {id: 8, name_en: 'Materials Engineering', name_ar: 'هندسة المواد'},
  {id: 9, name_en: 'Coastal Engineering', name_ar: 'الهندسة الساحلية'},
  {id: 10, name_en: 'Earthquake Engineering', name_ar: 'هندسة الزلازل'},
];
const AritcelListCard = () => {
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
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.authorContainer}>
              <ProfileIcon colorStroke="#666E80" />
              <TypographyText
                content={I18nManager.isRTL ? 'محمد الفيت' : 'Mohamed Elfit'}
                type="12_Medium"
                color="dark"
              />
            </View>
            <TypographyText
              content={convertToDate('2021-09-01T00:00:00Z')}
              color="appGrey"
              type="12_Reguler"
            />
          </View>
          <View>
            <TypographyText
              content={
                I18nManager.isRTL
                  ? 'معدات المساحة تلسكوب معدات المساحة تلسكوب معدات'
                  : 'Surveyor equipment telescope Surveyor equipment telescope'
              }
              type="12_Bold"
              color="dark"
            />
            <TypographyText
              content={
                I18nManager.isRTL
                  ? 'معدات المساحة تلسكوب  معدات المساحة تلسكوب معدات المساحة تلسكوب معدات'
                  : 'Surveyor equipment telescope Surveyor equipment telescope'
              }
              type="9_Reguler"
              color="appGrey"
            />
          </View>
          <View>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{width: 10}} />}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://www.shutterstock.com/image-photo/surveyor-equipment-telescope-construction-site-600nw-1247187910.jpg',
            }}
            style={styles.imageStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default AritcelListCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(12),
  },
  cardContainer: {
    width: '100%',
    height: moderateScale(160),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.lightGrey2,
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    padding: moderateScale(10),
    gap: moderateScale(10),
  },
  imageContainer: {
    width: '30%',
  },
  imageStyle: {
    width: '100%',
    height: moderateScale(130),
    borderRadius: moderateScale(12),
  },
  contentContainer: {
    flexGrow: 1,
    width: '60%',
    height: '100%',
    gap: moderateScale(8),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  category: {
    backgroundColor: '#fff59b',
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: I18nManager.isRTL ? moderateScale(2) : moderateScale(4),
  },
});
