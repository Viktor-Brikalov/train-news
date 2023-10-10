export type NewsAttributes = {
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
};

export interface INews {
  id: number;
  attributes: NewsAttributes;
}
