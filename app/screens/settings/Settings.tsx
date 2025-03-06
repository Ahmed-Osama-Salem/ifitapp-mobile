import {I18nManager, Image, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import {Fonts, Shadows} from '../../utils/theme';
import {useGetUserData} from '../../helpers/hooks/useGetUserData';
import ScreenGradientHeader from 'Common/DynamicComponents/ScreenGradientHeader/ScreenGradientHeader';
import {useTranslation} from 'react-i18next';
import color from 'Theme/color';
import useChangeLang from 'Hooks/useChangeLang';

const Settings = () => {
  const {user} = useGetUserData();
  const [isArabic, setIsArabic] = useState(I18nManager.isRTL);
  const {t} = useTranslation('translation');
  const {switchLanguage} = useChangeLang();
  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    switchLanguage(isArabic ? 'en' : 'ar');
  };
  return (
    <ScreenLayout>
      <ScreenGradientHeader content="Profile" />
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-photo/civil-engineer-digital-avatar-generative-ai_934475-9025.jpg',
          }}
          style={styles.profileImgStyle}
        />
        <Text style={Fonts.title}>{user?.name}</Text>
        <Text style={Fonts.body}>{user?.phone}</Text>

        <Switch
          value={isArabic}
          onValueChange={toggleLanguage}
          thumbColor={isArabic ? color.light : color.gray1}
          trackColor={{false: '#767577', true: '#81b0ff'}}
        />
      </View>
    </ScreenLayout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  profileImgStyle: {
    width: 100,
    height: 100,
    marginVertical: 20,
    borderRadius: 100,
    ...Shadows.container,
  },
});
