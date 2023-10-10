import { FC } from 'react';
import Link from 'next/link';

import styles from './ToHomeLink.module.scss';

const ToHomeLink: FC = () => {
  return (
    <Link
      href='/'
      className={styles.to_home__link}
    >
      На главную
    </Link>
  );
};

export default ToHomeLink;
