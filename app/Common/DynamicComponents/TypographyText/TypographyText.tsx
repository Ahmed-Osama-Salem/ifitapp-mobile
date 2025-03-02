import React from 'react';
import {useTranslation} from 'react-i18next';
import {Platform, Text, TextStyle as TextSystem} from 'react-native';

import {allowFontScaling, TextStyle} from './Typography.system';
import {useRTL} from 'Hooks/useRTL';
import {Color, lightPalette} from 'Theme/color';

interface TypographyTextProps {
  type: keyof typeof TextStyle;
  content: string;
  color: Color;
  styles?: TextSystem;
  notTranslate?: boolean;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  ref?: any;
  onLayout?: any;
}

const TypographyText = (props: TypographyTextProps) => {
  const {t} = useTranslation('translation');
  const {textDir} = useRTL();
  return (
    <Text
      allowFontScaling={allowFontScaling}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      ref={props.ref}
      onLayout={props.onLayout}
      style={[
        TextStyle[props.type],
        props.styles,
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // color: isDarkMode
          //   ? darkColor()[props.color]
          //   : color[props.color as keyof typeof lightPalette],
          color: lightPalette[props.color as keyof typeof lightPalette],
          ...(Platform.OS === 'android' && {includeFontPadding: false}),
        },
        textDir,
        {
          // backgroundColor: 'red',
          // textAlgn: 'center',
          // paddingTop: 2,
        },
      ]}>
      {props.notTranslate ? props.content : t(props.content)}
    </Text>
  );
};

export default TypographyText;
