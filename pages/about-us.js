import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall ,AboutapiCall} from "@/redux/Metaapicall";
const IndexAbout = lazy(() => import("@/Component/websiteComponent/About/IndexAbout"));

const aboutus = ({initialPortfolioList,initialAboutapiCall}) => {
let data = initialPortfolioList.find((e) => e.url === '/about-us')

  return (
    <>
      <Seo title={data ? data.title : 'About us'} pagedescription={data ? data.description : ''} keywords={data ? data.key : ''}  />
      <Suspense fallback={<Loader />}>
        <IndexAbout data={initialAboutapiCall}/>
      </Suspense>
    </>
  );
};

export default aboutus;


export const getServerSideProps = async () => {
  try {
    const initialPortfolioList = await Metaapicall();
    const initialAboutapiCall = await AboutapiCall();

    return {
      props: {
        initialPortfolioList,
        initialAboutapiCall,
      },
    };
  } catch (error) {
    return {
      props: {
        initialPortfolioList: [],
        initialAboutapiCall: [],
      },
    };
  }
};