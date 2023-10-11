import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Provider } from 'react-redux';

import { initCategorySlice } from '@/store/slices/categoriesSlice';
import { setupStore } from '@/store';

import { ICategory } from '@/utils/types/categories';
import { INews } from '@/utils/types/news';
import { initNewsSlice } from '@/store/slices/newsSlice';

export type InitialStateType = {
  categories?: ICategory[];
  currentCategory?: ICategory | null;
  currentNews?: INews | null;
};

const StoreProvider: FC<
  PropsWithChildren<{ initialState?: InitialStateType }>
> = props => {
  const isInit = useRef(true);
  const categoriesState = {
    categoriesList: props.initialState?.categories || [],
    currentCategory: props.initialState?.currentCategory || null,
  };
  const newsState = {
    currentNews: props.initialState?.currentNews || null,
  };
  const initializedStore = useMemo(
    () =>
      setupStore({
        categories: categoriesState,
      }),
    [],
  );

  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }

    initializedStore.dispatch(
      initNewsSlice(props.initialState?.currentNews || null)
    );
    initializedStore.dispatch(initCategorySlice(categoriesState));
  }, [categoriesState, newsState]);

  return (
    <Provider store={initializedStore}>
      {props.children}
    </Provider>
  );
};

export default StoreProvider;
