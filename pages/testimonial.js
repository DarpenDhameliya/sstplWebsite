import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall, TestimonialapiCall } from "@/redux/Metaapicall";
const Testimonialindex = lazy(() => import("@/Component/websiteComponent/About/testimonial/Testimonialindex"));

const testimonial = ({ initialPortfolioList, initialTestimonialapiCall }) => {
  let data = initialPortfolioList.find((e) => e.url === "/testimonial");

  return (
    <>
      <Seo title={data ? data.title : "testimonial"} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <Testimonialindex data={initialTestimonialapiCall} />
      </Suspense>
    </>
  );
};

export default testimonial;
export const getServerSideProps = async () => {
  try {
    const initialPortfolioList = await Metaapicall();
    const initialTestimonialapiCall = await TestimonialapiCall();
    return {
      props: {
        initialPortfolioList,
        initialTestimonialapiCall,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialPortfolioList: [],
        initialTestimonialapiCall: [],
      },
    };
  }
};
