import Seo from "@/Component/Seo";
import Loader from "@/Component/loader";
import React, { Suspense, lazy } from "react";
import { Metaapicall } from "@/redux/Metaapicall";

const Contactindex = lazy(() => import("@/Component/websiteComponent/contact"));

const contactus = ({initialPortfolioList}) => {
  let data = initialPortfolioList.find((e) => e.url === "/contact-us");

  return (
    <>
      <Seo title={data ? data.title : "Contact Us"} pagedescription={data ? data.description : ""} keywords={data ? data.key : ""} />
      <Suspense fallback={<Loader />}>
        <Contactindex />
      </Suspense>
    </>
  );
};

export default contactus;

export const getServerSideProps = async () => {
  const initialPortfolioList = await Metaapicall();

  return {
    props: {
      initialPortfolioList,
    },
  };
};
