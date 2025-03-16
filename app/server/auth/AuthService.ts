import {appEnvConfig} from '../../utils/Config';
import {I18nManager} from 'react-native';
import apiHelper from 'utils/ApiHelper';
interface RegisterPayload {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
interface VerifyOtpPayload {
  otp: string | any;
  email: string;
}

interface LoginPayload {
  email: string;
  password: string;
}
class AuthService {
  private BASE_URL = appEnvConfig.BASE_URL;

  public async login(email: string, password: string): Promise<LoginPayload> {
    return apiHelper.POST(
      this.BASE_URL + '/auth/login/',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': I18nManager.isRTL ? 'ar' : 'en',
        },
      },
    );
  }

  public async register(payload: RegisterPayload): Promise<RegisterPayload> {
    return apiHelper.POST(
      this.BASE_URL + '/auth/register/',
      {
        email: payload.email,
        password: payload.password,
        first_name: payload.first_name,
        last_name: payload.last_name,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': I18nManager.isRTL ? 'ar' : 'en',
        },
      },
    );
  }

  public async VerifyOtpService(
    payload: VerifyOtpPayload,
  ): Promise<VerifyOtpPayload> {
    return apiHelper.POST(
      this.BASE_URL + '/auth/verify/',
      {
        otp_code: payload.otp,
        email: payload.email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': I18nManager.isRTL ? 'ar' : 'en',
        },
      },
    );
  }
}
export default new AuthService();
