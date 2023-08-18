
import Seo from '@/Component/Seo';
import Loader from '@/Component/loader';
import React, { lazy, Suspense } from 'react';
import { Metaapicall } from '@/redux/Metaapicall';

const CareerIndex = lazy(() => import('@/Component/websiteComponent/Career/CareerIndex'));

const Career = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/career')

  return (
    <>
      <Seo title={data ? data.title : 'Career'} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''}  />
      <Suspense fallback={<Loader />}>
        <CareerIndex />
      </Suspense>
    </>
  );
};

export default Career;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};