import {I18nManager} from 'react-native';
import {appEnvConfig} from '../../utils/Config';
import apiHelper from 'utils/ApiHelper';

export interface BlogPost {
  _id: string;
  title: string;
  brief: string;
  content: string;
  helpful?: string[];
  author: string;
  readingTime: number;
  createdAt: string;
  updatedAt: string;
  slug: string;
  helpfulCount: number;
}

interface BlogPromise {
  data: {
    data: {
      data: {
        featured: BlogPost[];
        newest: BlogPost[];
      };
    };
  };
}

class BlogService {
  private BATH_URL = appEnvConfig.BASE_URL;

  public async getBlogPosts(): Promise<BlogPromise> {
    console.log(appEnvConfig);

    return apiHelper.GET(this.BATH_URL + '/blog', {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': I18nManager.isRTL ? 'ar' : 'en',
      },
    });
  }
}

export default new BlogService();
