import { FC } from 'react';

import ToHomeLink from '@/uikit/ToHomeLink/ToHomeLink';
import styles from './pageNotFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={styles.not_found_page__layout}>
      <h1 className={styles.not_found_page__title}>
        Страница не найдена
      </h1>
      <p className={styles.not_found_page__description}>
        404
      </p>
      <ToHomeLink />
    </div>
  );
};

export default NotFound;
