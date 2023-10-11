import type { GetServerSideProps, NextPage } from 'next';

import { ICategory } from '@/utils/types/categories';
import { categoriesApi } from '@/api/Categories/Categories';

import HomePage from '@/components/HomePage/HomePage';

type Props = {
  categories: ICategory[];
};
 
const Page: NextPage<Props> = (props) => {
  return <HomePage />
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await categoriesApi.getCategoriesList({});
    const categories = res.data
    return { props: { categories: categories?.data } }
  } catch (err) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      }
    }
  }
};

export default Page;
