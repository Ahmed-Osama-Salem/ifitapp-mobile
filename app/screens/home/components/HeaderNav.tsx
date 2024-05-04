import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const isIos = Platform.OS === 'ios';
const HeaderNav = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.headerNav}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Image source={require('../../../assets/header-logo.png')} />
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text>Logout</Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({
  headerNav: {
    backgroundColor: '#F6E117',
    height: isIos ? 120 : 70,
    flexDirection: 'row',
    alignItems: isIos ? 'baseline' : 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // apply shadow to the header
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
