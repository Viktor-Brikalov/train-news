import { FC } from 'react'
import dynamic from 'next/dynamic'

import Loader from '@/components/Loader/Loader'

const DynamicHomePage = dynamic(
  () => import('../components/HomePage/HomePage'),
  {
    loading: () => <Loader />,
    ssr: true,
  },
);

const Home: FC= () => {
  return <DynamicHomePage />;
};

export default Home;
