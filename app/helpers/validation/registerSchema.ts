import * as yup from 'yup';
import {I18nManager} from 'react-native';

const registerSchema = yup.object().shape({
  firstName: yup
    .string()

    .required(
      I18nManager.isRTL ? 'الاسم الأول مطلوب' : 'First name is required',
    ),
  lastName: yup
    .string()

    .required(
      I18nManager.isRTL ? 'الاسم الأخير مطلوب' : 'Last name is required',
    ),
  email: yup
    .string()
    .email(
      I18nManager.isRTL
        ? 'يرجى إدخال بريد إلكتروني صالح'
        : 'Please enter valid email',
    )
    .required(
      I18nManager.isRTL ? 'البريد الإلكتروني مطلوب' : 'Email is required',
    ),
  password: yup
    .string()
    .matches(
      /\w*[a-z]\w*/,
      I18nManager.isRTL
        ? 'يجب أن تحتوي كلمة المرور على حرف صغير'
        : 'Password must have a small letter',
    )
    .matches(
      /\w*[A-Z]\w*/,
      I18nManager.isRTL
        ? 'يجب أن تحتوي كلمة المرور على حرف كبير'
        : 'Password must have a capital letter',
    )
    .matches(
      /\d/,
      I18nManager.isRTL
        ? 'يجب أن تحتوي كلمة المرور على رقم'
        : 'Password must have a number',
    )
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      I18nManager.isRTL
        ? 'يجب أن تحتوي كلمة المرور على حرف خاص'
        : 'Password must have a special character',
    )
    .min(8, ({min}) =>
      I18nManager.isRTL
        ? `يجب أن تكون كلمة المرور على الأقل ${min} أحرف`
        : `Password must be at least ${min} characters`,
    )
    .required(
      I18nManager.isRTL ? 'كلمة المرور مطلوبة' : 'Password is required',
    ),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      I18nManager.isRTL ? 'كلمات المرور غير متطابقة' : 'Passwords do not match',
    )
    .required(
      I18nManager.isRTL
        ? 'تأكيد كلمة المرور مطلوب'
        : 'Confirm password is required',
    ),
});

export default registerSchema;
