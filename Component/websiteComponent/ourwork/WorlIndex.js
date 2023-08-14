// import Headers from "../SubComponent/PageHeader";
// import Portfoliyo from "./Portfoliyo";
// import { useState } from "react";
// import Loader from "@/Component/loader";

// const WorlIndex = () => {
//   const [loading, setLoading] = useState(true);

//   const cleartimeout = () => {
//     setLoading(false);
//   };
//   return (
//     <>
//       {loading && <Loader />}
//       <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
//         <Headers
//           title="Portfolio"
//           breadcrumb={[
//             { link: "/", title: "Home" },
//             { link: "/ourwork", title: "Portfolio" },
//           ]}
//         />
//         <Portfoliyo loding={cleartimeout} />
//       </div>
//     </>
//   );
// };

// export default WorlIndex;

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Headers from "../SubComponent/PageHeader";
import Loader from "@/Component/loader";

const DynamicPortfoliyo = dynamic(() => import("./Portfoliyo"), { ssr: false });

const WorlIndex = ({apidata}) => {
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
            { link: "/ourwork", title: "Portfolio" },
          ]}
        />
        <DynamicPortfoliyo loding={clearTimeout} data={apidata}/>
      </div>
    </>
  );
};

export default WorlIndex;
