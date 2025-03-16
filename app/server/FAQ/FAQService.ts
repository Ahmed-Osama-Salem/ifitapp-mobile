import {appEnvConfig} from '../../utils/Config';
import apiHelper from 'utils/ApiHelper';

class FAQService {
  private BATH_URL = appEnvConfig.BASE_URL;

  public async getFAQs(): Promise<any> {
    return apiHelper.GET(this.BATH_URL + '/questions', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export default new FAQService();
