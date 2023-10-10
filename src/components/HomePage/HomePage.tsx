import { FC } from 'react';

import CategoriesList from './NewsCategoriesList/CategoriesList';
import styles from './HomePage.module.scss';

const HomePage: FC = () => {
  return (
    <div className={styles.home_page__page_layout}>
      <h1 className={styles.home_page__header}>
        Новости
      </h1>
      <CategoriesList />
    </div>
  );
};

export default HomePage;
