import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import color from 'Theme/color';

export const styles = StyleSheet.create({
  toasterContainer: {
    width: '95%',
    marginHorizontal: 'auto',
    height: 65,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: color.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  toasterContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  toasterMessage: {
    paddingLeft: moderateScale(20),
    flex: 1,
  },
  header: {
    fontWeight: '600',
    textAlign: 'left',
    fontSize: scale(16),
  },
  message: {
    fontWeight: '400',
    textAlign: 'auto',
    fontSize: scale(14),
  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  toasterClose: {
    color: color.black,
    padding: moderateScale(8),
  },
  errorContainer: {
    borderColor: color.sunYellow,
    borderWidth: 1,
  },
  successContainer: {
    borderColor: color.success,
    borderWidth: 1,
  },
});
