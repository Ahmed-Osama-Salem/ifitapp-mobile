import axios from 'axios';

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
  public async getBlogPosts(): Promise<BlogPromise> {
    return await axios.get('https://backend-service-ifit.onrender.com/blog');
  }
}

export default BlogService;
