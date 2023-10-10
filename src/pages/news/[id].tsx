import { FC } from 'react';
import dynamic from 'next/dynamic';

import Loader from '@/components/Loader/Loader'
// import withAuth from '@/hooks/withAuth';

const DynamicNewsItemPage = dynamic(
  () => import('@/components/NewsItemPage/NewsItemPage'),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

const NewsItemPage: FC = () => {
  return <DynamicNewsItemPage />;
};

export default NewsItemPage;
