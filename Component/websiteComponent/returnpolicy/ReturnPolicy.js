import React, { useEffect } from "react";
import Image from "next/image";
import sponserShape from "../../../assets/images/icon/SSTPL-500.webp";

const ReturnPolicy = ({ content }) => {
  useEffect(() => {
    document.title = "Return Policy | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);

  const adjustedHtmlContent = content.replace(
    /<img src="\/static\/media\//g,
    '<Image src="/images/'
  );
  
  return (
    <>
      <section className={`softstormweb-privacy pt-70 pb-80 `} id="service" style={{ backgroundImage: "none" }}>
        {content && <div dangerouslySetInnerHTML={{ __html: adjustedHtmlContent }} />}
        <div className="sponser-shape">
          <Image src={sponserShape} alt="" />
        </div>
      </section>
    </>
  );
};

export default ReturnPolicy;
        

