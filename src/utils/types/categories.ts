import { INews } from "./news";

type NewsItemsType = {
  data: INews[];
};

export type CategoryAttributes = {
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  news_items: NewsItemsType;
};

export interface ICategory {
  id: number;
  attributes: CategoryAttributes;
}
