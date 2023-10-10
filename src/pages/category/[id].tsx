import { FC } from 'react';
import dynamic from 'next/dynamic';

import Loader from '@/components/Loader/Loader'

const DynamicCategoryPage = dynamic(
  () => import('@/components/CategoryPage/CategoryPage'),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

const CategoryPage: FC = () => {
  return <DynamicCategoryPage />;
};

export default CategoryPage;
