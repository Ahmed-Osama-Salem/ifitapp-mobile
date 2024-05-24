import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import {Fonts} from '../../utils/theme';

const Settings = () => {
  return (
    <ScreenLayout>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://media-hbe1-2.cdn.whatsapp.net/v/t61.24694-24/413127216_1132024591149012_8584608521826069019_n.jpg?ccb=11-4&oh=01_Q5AaIBWH_yUfHEYOVg_jPUPjAEtIEZG-XpFD2ogCNQieDvpM&oe=6639F6AB&_nc_sid=e6ed6c&_nc_cat=102',
          }}
          style={styles.profileImgStyle}
        />
        <Text style={Fonts.title}>Mohamed elfit</Text>
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
  },
});
