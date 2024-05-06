import axios from 'axios';

class FAQService {
  public async getFAQs(): Promise<any> {
    return await axios.get(
      'https://backend-service-ifit.onrender.com/question',
    );
  }
}

export default FAQService;
