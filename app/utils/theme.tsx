// create a style sheet for fonts of app based on the design system and fonts of the app.

import {StyleSheet} from 'react-native';

const Fonts = StyleSheet.create({
  caption: {
    fontFamily: 'Nunito-medium',
    fontSize: 14,
  },
  body: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
});

const Buttons = StyleSheet.create({
  primary: {
    backgroundColor: '#F6E117',
    borderRadius: 100,
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
  },
  secondary: {
    backgroundColor: '#F6E117',
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
  },
  buttonText: {
    color: '#231A16',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Nunito-ExtraBold',
  },
});

const Shadows = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export {Fonts, Buttons, Shadows};
