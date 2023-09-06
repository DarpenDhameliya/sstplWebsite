import React from "react";
import aboutheader1 from "../../../assets/images/aboutus_header/appfutura.webp";
import aboutheader2 from "../../../assets/images/aboutus_header/clutch.webp";
import aboutheader3 from "../../../assets/images/aboutus_header/goodfirms.webp";
import aboutheader4 from "../../../assets/images/aboutus_header/glassdoor.webp";
import aboutheader5 from "../../../assets/images/aboutus_header/upwork.webp";
import Image from "next/image";
const HeaderImage = () => {
  return (
    <ul style={{ display: "contents" }}>
      <li>
        <Image src={aboutheader5} alt="award" className="setAward" />
      </li>
      <li>
        <Image src={aboutheader1} alt="award" className="setAward" />
      </li>
      <li>
        <Image src={aboutheader4} alt="award" className="setAward" />
      </li>
      <li>
        <Image src={aboutheader3} alt="award" className="setAward" />
      </li>
      <li>
        <Image src={aboutheader2} alt="award" className="setAward" />
      </li>
    </ul>
  );
};

export default HeaderImage;
