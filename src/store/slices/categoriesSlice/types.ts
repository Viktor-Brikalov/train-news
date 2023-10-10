import { ICategory } from "@/utils/types/categories";

export type InitialStateType = {
    categoriesList: ICategory[];
    currentCategory: ICategory | null;
};
