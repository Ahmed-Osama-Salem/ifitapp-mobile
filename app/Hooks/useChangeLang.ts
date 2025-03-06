import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n/i18n';
import i18next from 'i18next';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

const useChangeLang = (loading?: (arg: boolean) => void) => {
  const switchLanguage = async (lang: string) => {
    try {
      loading && loading(true);

      await i18n.changeLanguage(lang);
      //   i18next.changeLanguage(lang);
      const isRTL = lang === 'ar';
      if (I18nManager.isRTL !== isRTL) {
        I18nManager.forceRTL(isRTL);
      }

      await AsyncStorage.setItem('selectedLang', lang);

      RNRestart.Restart(); // Restart the app after language change
    } catch (error) {
      console.log('Error switching language:', error);
      loading && loading(false);
    }
  };

  return {switchLanguage};
};

export default useChangeLang;
