import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import FAQService from 'server/FAQ/FAQService';

export interface QuestionResult {
  id: number;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
  categories: string[];
  images: string[];
  status: 'pending' | 'approved';
  title: string;
  author: {
    email: string;
    first_name: string;
    last_name: string;
  };
  answer_by: {
    email: string;
    first_name: string;
    last_name: string;
  };
  voted: boolean;
  Voters: any[];
  lastet_voters: any[];
}

interface Question {
  count: number;
  next: string;
  previous: string;
  results: QuestionResult[];
}

interface QuestionsState {
  questions: Question | null;
  loading: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  questions: null,
  loading: false,
  error: null,
};

// Async thunk to fetch questions
export const fetchQuestions = createAsyncThunk<Question>(
  'questions/fetchQuestions',
  async (_, {rejectWithValue}) => {
    try {
      const response = await FAQService.getFAQs();
      return response.data;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch questions');
    }
  },
);

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchQuestions.fulfilled,
        (state, action: PayloadAction<Question | null>) => {
          state.loading = false;
          state.questions = action.payload;
        },
      )
      .addCase(fetchQuestions.rejected, state => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default questionSlice.reducer;
