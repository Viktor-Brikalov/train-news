import { FC } from 'react';
import Link from 'next/link';

import { NewsItemProps } from './NewsItem.types';
import styles from './NewsItem.module.scss';

const NewsItem: FC<NewsItemProps> = ({ href, newsAttribute }) => {
  return (
    <Link
      className={styles.news_item__news_item}
      href={href}
    >
      <h2 className={styles.news_item__news_title}>
        {newsAttribute.title}
      </h2>
      <p className={styles.news_item__news_content}>
        {newsAttribute.content}
      </p>
    </Link>
  );
};

export default NewsItem;
