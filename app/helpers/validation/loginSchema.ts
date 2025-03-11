import {I18nManager} from 'react-native';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(
      I18nManager.isRTL
        ? 'الرجاء إدخال بريد إلكتروني صالح'
        : 'Please enter valid email',
    )
    .required(
      I18nManager.isRTL ? 'البريد الإلكتروني مطلوب' : 'Email is required',
    ),
  password: yup
    .string()
    .required(
      I18nManager.isRTL ? 'كلمة المرور مطلوبة' : 'Password is required',
    ),
});

export default loginSchema;
