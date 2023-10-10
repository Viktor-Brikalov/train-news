import { AxiosResponse } from 'axios';
import queryString from 'query-string';

import {
  GetNewsListRequestTypes,
  GetNewsListResponseTypes,
  NewsApiPath,
  GetNewsRequestTypes,
  GetNewsResponseTypes,
} from './News.types';
import axiosInstance from '../axiosInstance';

export const newsApi = {
  getNewsList: (
    options: GetNewsListRequestTypes,
  ): Promise<AxiosResponse<GetNewsListResponseTypes>> => {
    const page = options?.page || 1;
    const pageSize = options?.pageSize || 10;

    return axiosInstance.get(NewsApiPath.NEWS, {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
      },
      paramsSerializer: params => {
        return queryString.stringify(params, {
          skipEmptyString: true,
          skipNull: true,
        });
      },
    });
  },

  getOneNews: (
    options: GetNewsRequestTypes,
  ): Promise<AxiosResponse<GetNewsResponseTypes>> => {
    const { id } = options;

    return axiosInstance.get(`${NewsApiPath.NEWS}/${id}`);
  },
};
