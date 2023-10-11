import { GetServerSideProps, NextPage } from 'next';

import { INews } from '@/utils/types/news';
import { newsApi } from '@/api/News/News';
import NewsPage from '@/components/NewsItemPage/NewsItemPage';

type Props = {
  currentNews: INews | null;
};
 
const Page: NextPage<Props> = () => {
  return <NewsPage />
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const id = Number(ctx.query.id);
  try {
    const res = await newsApi.getOneNews({ id });
    const news = res?.data
    return { props: { currentNews: news?.data } }
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
