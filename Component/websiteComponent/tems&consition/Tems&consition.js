import React, { useEffect } from "react";
import sponserShape from "../../../assets/images/icon/SSTPL-500.webp";
import Image from "next/image";

const Temsandconsition = ({ className, content }) => {
  useEffect(() => {
    document.title = "Tems & Condition | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);
  const adjustedHtmlContent = content.replace(/<img src="\/static\/media\//g, '<Image src="/images/');


  return (
    <>
      <section className={`softstormweb-privacy pt-90 pb-100 ${className}`} id="service" style={{ backgroundImage: "none" }}>
        {adjustedHtmlContent && <div dangerouslySetInnerHTML={{ __html: adjustedHtmlContent }} />}
        <div className="sponser-shape">
          <Image src={sponserShape} alt="" />
        </div>
      </section>
    </>
  );
};

export default Temsandconsition;
