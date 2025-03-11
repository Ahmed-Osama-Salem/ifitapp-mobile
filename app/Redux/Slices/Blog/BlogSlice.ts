import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import BlogService from 'server/blog/BlogService';

export interface BlogList {
  id: number;
  title: string;
  content: string;
  slug: string;
  created_at: string;
  updated_at: string;
  categories: {id: number; name_en: string; name_ar: string};
}

interface BlogState {
  blogs: BlogList[];
  loading: boolean;
  error: string | null;
  singleBlog: BlogList | null;
  isBlogLoading: boolean;
  blogError: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
  singleBlog: null,
  isBlogLoading: false,
  blogError: null,
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  try {
    const response = await BlogService.getBlogPosts();

    return response.data.results;
  } catch (error) {
    console.log('error', error);
  }
});

export const fetchSingleBlog = createAsyncThunk(
  'blogs/fetchSingleBlog',
  async (slug: string) => {
    try {
      const response = await BlogService.getSinglePost(slug);
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBlogs.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch blogs';
      });

    builder
      .addCase(fetchSingleBlog.pending, state => {
        state.isBlogLoading = true;
        state.blogError = null;
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.isBlogLoading = false;
        state.singleBlog = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.isBlogLoading = false;
        state.blogError = action.error.message || 'Failed to fetch blogs';
      });
  },
});

export default blogSlice.reducer;
