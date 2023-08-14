
import Seo from '@/Component/Seo';
import Loader from '@/Component/loader';
import axios from '../Component/Axios';
import React, { lazy, Suspense } from 'react';

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
  try {
    const response = await axios.get("meta/meta_list");
    const initialPortfolioList = response.data.result;

    return {
      props: {
        initialPortfolioList,
      },
    };
  } catch (error) {
    console.error("Error fetching initial portfolio data:", error);
    return {
      props: {
        initialPortfolioList: error,
      },
    };
  }
};