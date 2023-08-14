import React, { useEffect, useState } from 'react'
import Contactus from './Home'
import Headers from '../SubComponent/PageHeader'
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
            {link: "/Contact", title: "Contact"},
          ]}
        />
    <Contactus />
    </div>
    </>
  )
}

export default Contactindex