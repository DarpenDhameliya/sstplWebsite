import Seo from '@/Component/Seo'
import Loader from '@/Component/loader'
import React, { Suspense, lazy } from 'react'
import axios from '../Component/Axios';
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