import Seo from '@/Component/Seo'
import Loader from '@/Component/loader'
import React, { Suspense, lazy } from 'react'
import axios from '../Component/Axios';
import { Metaapicall } from '@/redux/Metaapicall';
const Testimonialindex = lazy(() => import('@/Component/websiteComponent/About/testimonial/Testimonialindex'));


const testimonial = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === '/testimonial')

  return (
    <>
    <Seo title={data ? data.title : 'testimonial'}  pagedescription={data ? data.description : ''} keywords={data ? data.key : ''} />
    <Suspense fallback={<Loader />}>
    <Testimonialindex />
    </Suspense>
    </>
  )
}

export default testimonial
export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};