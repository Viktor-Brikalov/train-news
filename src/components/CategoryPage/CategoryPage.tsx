import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { useAppDispatch } from '@/store';
import { categoriesSelector, getOneCategory } from '@/store/slices/categoriesSlice';

import { StaticPageRouteEnum } from '@/utils/routes';

import styles from './CategoryPage.module.scss';
import NewsItem from './NewsItem/NewsItem';

const CategoryPage: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = Number(router.query.id);

  const { currentCategory } = useSelector(categoriesSelector);

  useEffect(() => {
    if (Number.isNaN(id)) {
      return;
    }
    dispatch(getOneCategory({ id }))
  }, [id]);

  return (
    <div className={styles.category_page__page_layout}>
      <h1 className={styles.category_page__header}>
        {currentCategory?.attributes.categoryName}
      </h1>
      {currentCategory?.attributes.news_items.data.map(item => (
        <NewsItem
          key={item.id}
          href={`${StaticPageRouteEnum.NEWS}/${
            (item?.id || '')
          }`}
          newsAttribute={item.attributes}
        />
      ))}
    </div>
  );
};

export default CategoryPage;
