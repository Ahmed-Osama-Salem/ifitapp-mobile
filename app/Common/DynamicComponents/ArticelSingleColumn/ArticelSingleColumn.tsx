import {
  I18nManager,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import color from 'Theme/color';
import {moderateScale} from 'react-native-size-matters';
import TypographyText from '../TypographyText/TypographyText';
import {HeartIcon} from 'modules/SvgIcons';
import {convertToDate} from 'utils/ConvertDate';

const ArticelSingleColumn = () => {
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://www.shutterstock.com/image-photo/surveyor-equipment-telescope-construction-site-600nw-1247187910.jpg',
          }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.titleContainer}>
        <TypographyText
          content={
            I18nManager.isRTL
              ? 'معدات المساحة تلسكوب'
              : 'Surveyor equipment telescope'
          }
          color="dark"
          type="12_Bold"
        />
        <View style={styles.rowContainer}>
          <TypographyText
            content={I18nManager.isRTL ? 'محمد الفيت' : 'Mohamed Elfit'}
            type="12_Medium"
            color="dark"
          />
          <TypographyText
            content={convertToDate('2021-09-01T00:00:00Z')}
            color="appGrey"
            type="10_Reguler"
          />
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <HeartIcon
              fillColor={isLiked ? color.sunYellow : 'none'}
              strokeColor={isLiked ? color.sunYellow : color.dark}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default ArticelSingleColumn;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: moderateScale(200),
    borderWidth: 1,
    borderColor: color.lightGrey2,
    borderRadius: 12,
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
  },
  imageStyle: {
    width: '100%',
    height: moderateScale(130),
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
  },
  titleContainer: {
    paddingHorizontal: 10,
    backgroundColor: color.light,
    height: 75,
    borderRadius: 12,
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 5,
  },
});
