
import Seo from '@/Component/Seo';
import Loader from '@/Component/loader';
import React, { lazy, Suspense } from 'react';
import { CareerapiCall, Metaapicall } from '@/redux/Metaapicall';
const CareerIndex = lazy(() => import('@/Component/websiteComponent/Career/CareerIndex'));

const Career = ({initialPortfolioList,initialcareerData}) => {
  let data = initialPortfolioList.find((e) => e.url === '/career')

  return (
    <>
      <Seo title={data ? data.title : 'Career'} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''}  />
      <Suspense fallback={<Loader />}>
        <CareerIndex data={initialcareerData}/>
      </Suspense>
    </>
  );
};

export default Career;



export const getServerSideProps = async () => {
  try {
    const initialPortfolioList = await Metaapicall();
    const initialcareerData = await CareerapiCall(); 
    return {
      props: {
        initialPortfolioList,
        initialcareerData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialPortfolioList: [],
        initialcareerData,
      },
    };
  }
};