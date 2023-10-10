import { ICategory } from "@/utils/types/categories";

export enum CategoriesApiPath {
  CATEGORIES = '/categories',
}

export type PaginationType = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export type MetaType = {
  pagination: PaginationType;
}

export type GetNewsListRequestTypes = {
  page?: number;
  pageSize?: number;
};

export type GetCategoriesListResponseTypes = {
  meta: MetaType;
  data: ICategory[];
};

export type GetCategoryRequestTypes = {
  id: number;
};

export type GetCategoryResponseTypes = {
  meta?: MetaType;
  data: ICategory;
};
