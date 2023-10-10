import axios, {
  AxiosResponse,
  AxiosError,
} from 'axios';

import { baseURL } from '@/utils/constants';

const axiosConfig = {
  baseURL,
};

const axiosInstance = axios.create(axiosConfig);

export const serverAxiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error: AxiosError) => {
    throw error;
  },
);

export default axiosInstance;
