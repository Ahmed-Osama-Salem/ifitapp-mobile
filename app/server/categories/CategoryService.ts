import axios from 'axios';
import {appEnvConfig} from '../../utils/Config';

class CategoryService {
  private BATH_URL = appEnvConfig.BASE_URL;

  public async getCategories(): Promise<any> {
    return await axios.get(this.BATH_URL + 'categories');
  }
}

export default CategoryService;
