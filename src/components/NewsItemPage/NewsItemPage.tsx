import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { useAppDispatch } from '@/store/hooks';
import { getOneNews, newsSelector } from '@/store/slices/newsSlice';

import styles from './NewsItemPage.module.scss';

const NewsItemPage: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { currentNews } = useSelector(newsSelector);

  const id = Number(router.query.id);

  useEffect(() => {
    if (Number.isNaN(id)) {
      return;
    }
    dispatch(getOneNews({ id }))
  }, [id]);

  return (
    <div className={styles.news_item__page_layout}>
      <h1 className={styles.news_item__header}>
        {currentNews?.attributes.title}
      </h1>
      <p className={styles.news_item__news_content}>
        {currentNews?.attributes.content}
      </p>
    </div>
  );
};

export default NewsItemPage;
