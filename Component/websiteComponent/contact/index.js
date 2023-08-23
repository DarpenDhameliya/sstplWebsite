import React, { useEffect, useState } from 'react'
import Contactus from './Home'
const Headers = dynamic(() => import("../SubComponent/PageHeader"), { ssr: false });
import Loader from "@/Component/loader";

const Contactindex = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
    {loading && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
     <Headers
          title="Contact Us"
          breadcrumb={[
            {link: "/", title: "Home"},
            {link: "/contact-us", title: "Contact"},
          ]}
        />
    <Contactus />
    </div>
    </>
  )
}

export default Contactindex