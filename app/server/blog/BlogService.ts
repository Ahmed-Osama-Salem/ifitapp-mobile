import axios from 'axios';
import {appEnvConfig} from '../../utils/Config';

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
    return await axios.get(this.BATH_URL + 'blog');
  }
}

export default BlogService;
