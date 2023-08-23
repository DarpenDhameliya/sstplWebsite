import Seo from '@/Component/Seo'
import Loader from '@/Component/loader'
import React, { Suspense, lazy } from 'react'
import { Metaapicall } from '@/redux/Metaapicall';

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
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};