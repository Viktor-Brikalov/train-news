import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/store/hooks';
import { getCategories, categoriesSelector } from '@/store/slices/categoriesSlice';

import CategoriesItem from '../CategoriesItem/CategoriesItem';
import styles from './CategoriesList.module.scss';

const CategoriesList: FC = () => {
  const dispatch = useAppDispatch();
  const { categoriesList } = useSelector(categoriesSelector);

  useEffect(() => {
    dispatch(getCategories({}));
  }, []);

  return (
    <div className={styles.categories_list__container}>
      {categoriesList
        ?.map((category) => (
          <div
            key={category.id}
            className={styles.categories_list__container}
          >
            <CategoriesItem category={category} />
          </div>
        ))
      }
    </div>
  );
};

export default CategoriesList;
