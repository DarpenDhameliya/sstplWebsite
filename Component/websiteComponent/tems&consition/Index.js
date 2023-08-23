import React, {useState, useEffect} from "react";
const Headers = dynamic(() => import("../SubComponent/PageHeader"), { ssr: false });
import Temsandconsition from "./Tems&consition";
import axios from "../../Axios";
import Loader from "@/Component/loader";

const TermandConditionIndex = () => {
  const [content, setContent] = useState('')

  const [loading, setLoading] = useState(true);

  const fetchHiredata = () => {
    axios
      .get("terms/terms_list")
      .then((result) => {
        setContent(result.data.result[0].termscontent);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);
  return (
    <>
     {loading && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Headers
          title="TERMS & CONDITIONS"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/terms-and-conditions", title: "TERMS & CONDITIONS"},
          ]}
          className={"handlebredcrumb"}
        />
        <Temsandconsition content={content}/>
      </div>
    </>
  );
};

export default TermandConditionIndex;
