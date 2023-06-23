import React, { useEffect, useState } from "react";
import about1 from "../../assets/images/icon/about1.svg";
import about2 from "../../assets/images/icon/about1.svg";
import about3 from "../../assets/images/icon/about1.svg";
import about4 from "../../assets/images/icon/about1.svg";
import about5 from "../../assets/images/icon/about1.svg";
import about6 from "../../assets/images/icon/about1.svg";
import about7 from "../../assets/images/icon/about1.svg";
import about8 from "../../assets/images/icon/about1.svg";
import about9 from "../../assets/images/icon/about1.svg";

const AboutPart2 = () => {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    let data = [
      {
        image: about1,
        title: "Growth Mindset",
        discription:
          "We are a company with a growth mindset where we are willing to take risks to get success and we have the skills and abilities to face the challenges.",
      },
      {
        image: about2,
        title: "Transparency and Honesty",
        discription:
          "Our company believes in providing customer-centric services. We believe in transparency and honesty to gain the trust of the clients.",
      },
      {
        image: about3,
        title: "Team Work",
        discription:
          "We believe in collective efforts and that’s why at Tagline Infotech we complete the task more effectively with the help of teamwork.",
      },
      {
        image: about4,
        title: "Client and Team Satisfaction",
        discription:
          "We maintain high standards in all aspects of the business to ensure client and team satisfaction.",
      },
      {
        image: about5,
        title: "Healthy Culture",
        discription:
          "We also assist with social and environmental causes, improving health and happiness, and providing the best possible healthy culture",
      },
      {
        image: about6,
        title: "Quality of work",
        discription:
          "As a well-established company, we aim for the greatest possible level of quality to achieve the goals of the clients.",
      },
      {
        image: about7,
        title: "Open Mindset",
        discription:
          "We encourage innovation, creativity, and an open mindset to create the products and services that make a positive difference in the world.",
      },
      {
        image: about8,
        title: "Privacy",
        discription:
          "While creating products and solutions for clients, we keep user privacy and data security as our top priorities.",
      },
      {
        image: about9,
        title: "Customer Focus & Obsession",
        discription:
          "We are a leading development company that mainly focuses on the satisfaction of the customers.",
      },
      {
        image: about9,
        title: "Think like a Product & Not as a Task Features",
        discription:
          "We prioritize and aim to create top-notch, robust, and useful products that are full of modern functionalities.",
      },
      {
        image: about9,
        title: "Innovation",
        discription:
          "At Tagline Infotech we believe in innovation and we are always ready to implement new things to make the product revolutionary.",
      },
      {
        image: about9,
        title: "Productivity",
        discription:
          "We are accountable for good productivity skills like time management, planning skills, and decision-making abilities to deliver the project more efficiently.",
      },
    ];
    // data = data.sort(() => Math.random() - 0.5);
    setWorkdata(data);
  }, []);
  return (
    <>
      <div
        className={`softstormweb-about-concept extradata_aboyt_sstpl pt-70 pb-80 `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="text-center  handelmobileview_about ">
              <h3>Our Stories</h3>
              <div className="abour_line">
                <span className="main-header-line_choos"></span>
              </div>
            </div>
            <div className="row evenly maintain_mobile_about">
              <div className="col-sm-6 col-lg-4 mt-4 maintain_mobile_about maintain_uperteb_about ">
                <div className="sstpl_about-card r-bg-c ">
                  <div className="sstpl_about-card-img shadows">
                    <img src={about3} alt="services" />{" "}
                  </div>
                  <div className="ree-card-content mt40">
                    <h4 className="mb20">Our Vision</h4>
                    <p>
                    We transforms clients’ businesses by enhancing their performance with innovative digital services and products, which include consulting, marketing and technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4  maintain_mobile_about maintain_uperteb_about missin_about">
                <div className="sstpl_about-card r-bg-c ">
                  <div className="sstpl_about-card-img shadows">
                    <img src={about3} alt="services" />{" "}
                  </div>
                  <div className="ree-card-content mt40">
                    <h4 className="mb20">Our Mission</h4>
                    <p>
                    We believe that what we build touches lives around us. We use technology to create a better and smarter environment. We nurture thought leaders and encourage them to be the seeds of change through smart software development and consulting services. Our commitment to quality and integrity helps us to use technology and create a better and smarter future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-35">
            <div className="text-center mb-3">
              <h3>Our Core Value</h3>
              <div className="abour_line">
                <span className="main-header-line_choos"></span>
              </div>
            </div>
            {workdata.map((e , Index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10" key={Index}>
                  {/* <div className="softstormweb-about text-center mt-30 wow animated fadeInUp">
                    <div className="icon">
                      <img src={e.image} alt="" />
                    </div>
                    <h4 className=" pb-2 pt-3">{e.title}</h4>
                    <p>{e.discription}</p>
                  </div> */}
                  <div className="sstpl_about-card r-bg-c mt-40 ">
                    <div className="sstpl_about-card-img shadows">
                      <img src={e.image} alt="services" />{" "}
                    </div>
                    <div className="">
                      <h4 >{e.title}</h4>
                      <p className="mt-10">{e.discription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPart2;
