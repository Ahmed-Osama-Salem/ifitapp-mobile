import axios from 'axios';

class CategoryService {
  public async getCategories(): Promise<any> {
    return await axios.get(
      'https://backend-service-ifit.onrender.com/category',
    );
  }
}

export default CategoryService;
