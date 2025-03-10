import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getCountryCode = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('country');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    return e;
  }
};

const api: AxiosInstance = axios.create();

api.interceptors.request.use(async config => {
  const countryCode = await getCountryCode();

  config.headers.Country = countryCode;

  return config;
});

interface ApiResponse<T> {
  data: T;
}

interface ApiError {
  message: string;
}

api.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response) {
      console.log(
        'Response error:',
        error.response.data,
      );
    } else if (error.request) {
      console.log('Request error:', error.request);
    } else {
      console.log('Request setup error:', error.message);
    }
    return Promise.reject(error);
  },
);

const apiHelper = {
  GET: async <T>(endpoint: string, params?: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await api.get<ApiResponse<T>>(endpoint, params);

      return response;
    } catch (error: any) {
      // console.log('error From post helper::', error.response.request._headers);

      throw error.response.data;
    }
  },

  POST: async <T>(
    endpoint: string,
    data: any,
    params?: AxiosRequestConfig,
  ): Promise<T> => {
    try {
      const response = await api.post<ApiResponse<T>>(endpoint, data, params);

      return response;
    } catch (error: any) {
      throw error.response.data;
    }
  },

  DELETE: async <T>(
    endpoint: string,
    params?: AxiosRequestConfig,
  ): Promise<T> => {
    try {
      const response = await api.delete<ApiResponse<T>>(endpoint, params);

      return response;
    } catch (error: any) {
      throw error.response?.data || 'An error occurred';
    }
  },

  PUT: async <T>(
    endpoint: string,
    data: any,
    params?: AxiosRequestConfig,
  ): Promise<T> => {
    try {
      const response = await api.put<ApiResponse<T>>(endpoint, data, params);
      // console.log('response From post helper::', response);

      return response.data.data;
    } catch (error: any) {
      // console.log('error From post helper::', error.response.request._headers);

      throw error.response.data;
    }
  },
};

export default apiHelper;
