import { INews } from "@/utils/types/news";

export type InitialStateType = {
    newsList: INews[];
    currentNews: INews | null;
};
