import { I18nManager } from 'react-native';
import { appEnvConfig } from '../../utils/Config';
import apiHelper from 'utils/ApiHelper';

class AuthService {
  private BASE_URL = appEnvConfig.BASE_URL;

  public async login(email: string, password: string): Promise<any> {
    console.log(email, password, "from Services")
    return apiHelper.POST(this.BASE_URL + '/auth/login/', {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': I18nManager.isRTL ? 'ar' : 'en',
      },
    });
  }
}

export default new AuthService();

