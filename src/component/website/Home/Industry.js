import React, {useState, useEffect} from "react";
import mob1 from "../../../assets/images/industry/health-care.webp";
import mob2 from "../../../assets/images/industry/banking-fintech.webp";
import mob3 from "../../../assets/images/industry/enterprise-solution.webp";
import mob4 from "../../../assets/images/industry/education.webp";
import mob5 from "../../../assets/images/industry/transport-logistic.webp";
import mob6 from "../../../assets/images/industry/retail-ecommerce.webp";
import mob7 from "../../../assets/images/industry/real-estate.webp";
import mob8 from "../../../assets/images/industry/travel-hospitality.webp";
import mob9 from "../../../assets/images/industry/accounting.webp";
import mob10 from "../../../assets/images/industry/legal-advisory.webp";
import mob11 from "../../../assets/images/industry/productivity.webp";
import mob12 from "../../../assets/images/industry/automotive.webp";
import mob13 from "../../../assets/images/industry/sports-fantaasy.webp";
import mob14 from "../../../assets/images/industry/media-entertainment.webp";
import mob15 from "../../../assets/images/industry/gems-jewellery.webp";
import mob16 from "../../../assets/images/industry/telecommunication.webp";
import sstplright from "../../../assets/images/RIGHT (10) 1 1.png";
import sstplleft from "../../../assets/images/LEFT (9).png";

export default function Industry() {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    let data = [
      {image: mob1, title: "Health Care"},
      {image: mob2, title: "Banking & Fintech"},
      {image: mob3, title: "Enterprise Solution"},
      {image: mob4, title: "Education"},
      {image: mob5, title: "Transport & Logistic"},
      {image: mob6, title: "Retail & E-Commerce"},
      {image: mob7, title: "Real-Estate"},
      {image: mob8, title: "Travel & Hospitality"},
      {image: mob9, title: "Accounting"},
      {image: mob10, title: "Legal & Advisory"},
      {image: mob11, title: "Productivity"},
      {image: mob12, title: "Automotive"},
      {image: mob13, title: "Sports & Fantacy"},
      {image: mob14, title: "Media & Entertainment"},
      {image: mob15, title: "Gems & Jewelery"},
      {image: mob16, title: "Telecommunication"},
    ];
    data = data.sort(() => Math.random() - 0.5);
    setWorkdata(data);
  }, []);
  return (
    <>
      <section className="softstormweb-industry pt-70 pb-80">
      <div className="leftimage">
      <img src={sstplleft} alt="Image 1" className="left-image" />
      </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="text-center">
                <h3>Industries We Serve</h3>
                <span className="main-header-line_choos"></span>
                <p>The app provides design and digital marketing.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="row">
                {workdata.map((e, index) => {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                      <div className="softstormweb-name-industry mt-30" data-aos-duration={` ${2000 + index * 500}`} data-aos="fade-up">
                        <div className="thumb">
                          <img src={e.image} alt="" />
                        </div>
                        <div className="content">
                          <h6 className="title">{e.title}</h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="rightimage">
          <img src={sstplright} alt="Image 2" className="right-image" />
        </div>
      </section>
    </>
  );
}
