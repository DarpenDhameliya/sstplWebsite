import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall, PortfolioListApiCall } from "@/redux/Metaapicall";
const WorlIndex = lazy(() => import("@/Component/websiteComponent/ourwork/WorlIndex"));

const ourwork = ({initialPortfolioList,initialPortfolioData}) => {
  let data = initialPortfolioList.find((e) => e.url === "/our-work");
  return (
    <>
      <Seo title={data ? data.title : "Our-Work"} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <WorlIndex  data={initialPortfolioData}/>
      </Suspense>
    </>
  );
};

export default ourwork;

export const getServerSideProps = async () => {
  try {
    const initialPortfolioList = await Metaapicall();
    const initialPortfolioData = await PortfolioListApiCall(); 
    return {
      props: {
        initialPortfolioList,
        initialPortfolioData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialPortfolioList: [],
        initialPortfolioData,
      },
    };
  }
};

