import { AxiosResponse } from 'axios';
import queryString from 'query-string';

import {
  GetNewsListRequestTypes,
  GetCategoriesListResponseTypes,
  CategoriesApiPath,
  GetCategoryResponseTypes,
  GetCategoryRequestTypes,
} from './Categories.types';
import axiosInstance from '../axiosInstance';

export const categoriesApi = {
  getCategoriesList: (
    options: GetNewsListRequestTypes,
  ): Promise<AxiosResponse<GetCategoriesListResponseTypes>> => {
    const page = options?.page || 1;
    const pageSize = options?.pageSize || 10;

    return axiosInstance.get(CategoriesApiPath.CATEGORIES, {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        populate: 'news_items',
      },
      paramsSerializer: params => {
        return queryString.stringify(params, {
          skipEmptyString: true,
          skipNull: true,
        });
      },
    });
  },

  getCategory: (
    options: GetCategoryRequestTypes,
  ): Promise<AxiosResponse<GetCategoryResponseTypes>> => {
    const { id } = options;

    return axiosInstance.get(`${CategoriesApiPath.CATEGORIES}/${id}`, {
      params: {
        populate: 'news_items',
      },
    });
  },
};
