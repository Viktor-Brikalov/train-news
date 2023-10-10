import { FC, useMemo } from 'react';
import Link from 'next/link';

import { StaticPageRouteEnum } from '@/utils/routes';

import { CategoriesItemProps } from './CategoriesItem.types';
import styles from './CategoriesItem.module.scss';

const CategoriesItem: FC<CategoriesItemProps> = ({ category }) => {
  const newsLinks = useMemo(() => {
    const newsList = category.attributes.news_items.data
      .slice(0, 3)
      .map(item => {
        return {
          href: `${StaticPageRouteEnum.NEWS}/${
            (item.id || '')
          }`,
          id: item.id,
          title: item.attributes.title,
        }
      });
    return [ ...newsList, {
      href: `${StaticPageRouteEnum.CATEGORY}/${
        (category?.id || '')
      }`,
      id: `categoryId=${category.id}`,
      title: '...еще',
    }]
  }, [category]);

  return (
    <div>
      <h1>
        {category.attributes.categoryName}
      </h1>
      <div className={styles.categories_item__categories_container}>
        {newsLinks.map(item => (
          <Link
            key={item.id}
            className={styles.categories_item__news_name}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesItem;
