import { GetServerSideProps, NextPage } from 'next/types';

import { ICategory } from '@/utils/types/categories';
import { categoriesApi } from '@/api/Categories/Categories';
import CategoryPage from '@/components/CategoryPage/CategoryPage';

type Props = {
  currentCategory: ICategory | null;
};
 
const Page: NextPage<Props> = () => {
  return <CategoryPage />
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const id = Number(ctx.query.id);
  try {
    const res = await categoriesApi.getCategory({ id });
    const category = res?.data
    return { props: { currentCategory: category?.data } }
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
