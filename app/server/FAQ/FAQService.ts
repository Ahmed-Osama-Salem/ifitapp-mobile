import axios from 'axios';
import {appEnvConfig} from '../../utils/Config';

class FAQService {
  private BATH_URL = appEnvConfig.BASE_URL;

  public async getFAQs(): Promise<any> {
    return await axios.get(this.BATH_URL + 'question');
  }
}

export default FAQService;
