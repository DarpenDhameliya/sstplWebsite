import React, {useEffect} from "react";
import sponserShape from "../../../assets/images/icon/SSTPL-500.webp";
import Image from "next/image"

const Privacy = ({className, content}) => {
  useEffect(() => {
  }, []);

  const adjustedHtmlContent = content.replace(
    /<img src="\/static\/media\//g,
    '<Image src="/images/'
  );

  return (
    <>
      <section className={`softstormweb-privacy pt-70 pb-80 ${className}`} id="service" style={{backgroundImage: "none"}}>
      <div dangerouslySetInnerHTML={{ __html: adjustedHtmlContent }} />        <div className="sponser-shape">
          <Image src={sponserShape} alt="" />
        </div>
      </section>
    </>
  );
};

export default Privacy;
