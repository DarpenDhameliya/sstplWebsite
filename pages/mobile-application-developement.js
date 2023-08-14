import Seo from '@/Component/Seo'
import Loader from '@/Component/loader'
import React, { Suspense, lazy } from 'react'
import axios from '../Component/Axios';

const Mobileserviceindex = lazy(() => import('@/Component/websiteComponent/Services/mobileapp/Mobileserviceindex'));

const mobile = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/mobile-application-developement')

  return (
    <>
    <Seo title={'mobile-application-developement'}  pagedescription={data ? data.description : ''} keywords={data ? data.key : ''} />
    <Suspense fallback={<Loader />}>

    <Mobileserviceindex />
    </Suspense>
    </>
  )
}

export default mobile

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