import React, { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/Component/loader";
const Headers = dynamic(() => import("../SubComponent/PageHeader"), { ssr: false });

const DynamicPortfoliyo = dynamic(() => import("./Portfoliyo"), { ssr: false });

const WorlIndex = ({data}) => {
  const [loading, setLoading] = useState(true);

  const clearTimeout = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Headers
          title="Portfolio"
          breadcrumb={[
            { link: "/", title: "Home" },
            { link: "/our-work", title: "Portfolio" },
          ]}
        />
        <DynamicPortfoliyo loding={clearTimeout} data={data}/>
      </div>
    </>
  );
};

export default WorlIndex;
