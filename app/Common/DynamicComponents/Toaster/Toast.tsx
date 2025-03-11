/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Image, Platform, I18nManager} from 'react-native';
import {styles} from './styles';
import {ToastConfig} from 'react-native-toast-message';
import {useTranslation} from 'react-i18next';
import {TFunction} from 'i18next';
import LinearGradient from 'react-native-linear-gradient';
import TypographyText from '../TypographyText/TypographyText';
import color from 'Theme/color';

const allStatus = (t: TFunction<'translation'>) => ({
  success: {
    icon: require('../../../assets/toaster/success.png'),
    header: t('successfully'),
  },
  error: {
    icon: require('../../../assets/toaster/error.png'),
    header: t('wentWrong'),
  },
});
enum ToastVariant {
  SUCCESS = 'success',
  ERROR = 'error',
}

interface HomzToastProps {
  variant: ToastVariant;
  message: string;
}

const toastConfig: ToastConfig = {
  ifit: ({props}: {props: HomzToastProps}) => {
    const {t} = useTranslation('translation');

    const status = allStatus(t);

    return (
      <View
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          transform: [{translateY: Platform.OS == 'ios' ? 25 : 0}],
          // shadowColor: props.variant === 'success' ? 'green' : color.redRibbon,
          // shadowOffset: {width: 0, height: 0},
          // shadowOpacity: 0.3,
          // shadowRadius: 3,
          // elevation: 5,
          zIndex: 9999,
        }}>
        <LinearGradient
          start={{x: I18nManager.isRTL ? 1 : 0, y: 0}}
          end={{x: I18nManager.isRTL ? 0 : 1, y: 1}}
          colors={
            props.variant === 'success'
              ? ['#ECFBF4', '#ffffff']
              : ['#f7d9d9', '#ffffff']
          }
          style={[
            styles.toasterContainer,
            {
              shadowColor:
                props.variant === 'success'
                  ? color.greenWhatsapp
                  : color.redRibbon,
            },
          ]}>
          <View style={styles.toasterContent}>
            {status[props.variant].icon ? (
              <Image
                source={status[props.variant].icon}
                style={[styles.image, {objectFit: 'contain'}]}
              />
            ) : null}

            <View style={styles.toasterMessage}>
              <TypographyText
                content={props.message}
                type="14_Medium"
                color="dark"
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  },
};

export default toastConfig;
