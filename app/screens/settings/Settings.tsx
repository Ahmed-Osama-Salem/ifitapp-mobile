import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenLayout from '../../modules/elements/ScreenLayout';
import {Fonts, Shadows} from '../../utils/theme';
import {useGetUserData} from '../../helpers/hooks/useGetUserData';

const Settings = () => {
  const {user} = useGetUserData();

  return (
    <ScreenLayout>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-photo/civil-engineer-digital-avatar-generative-ai_934475-9025.jpg',
          }}
          style={styles.profileImgStyle}
        />
        <Text style={Fonts.title}>{user?.name}</Text>
        <Text style={Fonts.body}>{user?.phone}</Text>
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
