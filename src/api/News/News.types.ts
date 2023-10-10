import { INews } from "@/utils/types/news";
import { MetaType } from "../Categories/Categories.types";

export enum NewsApiPath {
  NEWS = '/news-items',
}

export type GetNewsListRequestTypes = {
  page?: number;
  pageSize?: number;
};

export type GetNewsListResponseTypes = {
  meta: MetaType;
  data: INews[];
};

export type GetNewsRequestTypes = {
  id: number;
};

export type GetNewsResponseTypes = {
  meta?: MetaType;
  data: INews;
};
