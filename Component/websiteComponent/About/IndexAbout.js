import React, { useState } from "react";
const Headers = dynamic(() => import("../SubComponent/PageHeader"), { ssr: false });
const About = dynamic(() => import("./About"), { ssr: false });
const AboutPart2 = dynamic(() => import("./AboutPart2"), { ssr: false });
import Loader from "@/Component/loader";
import dynamic from "next/dynamic";

const IndexAbout = ({ data }) => {
  const [dberr, setDberr] = useState([]);
  const [loading, setLoading] = useState(true);

  const cleartimeout = () => {
    setLoading(false);
  };
  return (
    <>
      {loading && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Headers
          title="ABOUT US"
          breadcrumb={[
            { link: "/", title: "Home" },
            { link: "/about", title: "About Us" },
          ]}
          className={"handlebredcrumb"}
        />
        <About list={data} error={dberr} />
        <AboutPart2 list={data} loding={cleartimeout} />
      </div>
    </>
  );
};

export default IndexAbout;
