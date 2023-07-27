import React, {useEffect, useState} from "react";
// import about1 from "../../assets/images/icon/about1.svg";
// import about2 from "../../assets/images/icon/about1.svg";
import vission from "../../../assets/images/aboutus/our vission.png";
import mission from "../../../assets/images/aboutus/mission.png";
// import about4 from "../../assets/images/icon/about1.svg";
// import about5 from "../../assets/images/icon/about1.svg";
// import about6 from "../../assets/images/icon/about1.svg";
// import about7 from "../../assets/images/icon/about1.svg";
// import about8 from "../../assets/images/icon/about1.svg";
// import about9 from "../../assets/images/icon/about1.svg";
// import mob1 from "../../../assets/images/aboutus/1.png";
// import mob2 from "../../../assets/images/aboutus/Mask group-2.png";
// import mob3 from "../../../assets/images/aboutus/Mask group-3.png";
// import mob4 from "../../../assets/images/aboutus/Mask group-4.png";
// import mob5 from "../../../assets/images/aboutus/Mask group-5.png";
// import mob6 from "../../../assets/images/aboutus/Mask group-6.png";
// import mob7 from "../../../assets/images/aboutus/Mask group-7.png";
// import mob8 from "../../../assets/images/aboutus/Mask group-8.png";
// import mob9 from "../../../assets/images/aboutus/Mask group-9.png";
// import mob10 from "../../../assets/images/aboutus/Mask group-10.png";
// import mob11 from "../../../assets/images/aboutus/Mask group-11.png";
// import mob12 from "../../../assets/images/aboutus/Mask group-12.png";

import axios from "../../common/Axios";
const AboutPart2 = ({list, loding}) => {
  const [workdata, setWorkdata] = useState([]);
  const [missionHead, setmissionHead] = useState("");
  const [missionContent, setMissionContent] = useState("");
  const [visionHead, setvisionHead] = useState("");
  const [visionContent, setVisionContent] = useState("");
  const [valueHead, setValueHead] = useState("");
  const [valueContent, setValueContent] = useState("");
  const [aboutValueList, setAboutValueList] = useState([]);
  const [contentValurMatch, setContentValurMatch] = useState(false);
  const [dberr, setDberr] = useState("");

  useEffect(() => {
    if (list.length > 0) {
      setmissionHead(list[0].ouremission);
      if (list[0].corevalueconten === "<p><br></p>") {
        setContentValurMatch(false);
      } else {
        setContentValurMatch(true);
      }
      setMissionContent(list[0].missionconten);
      setvisionHead(list[0].ourevision);
      setVisionContent(list[0].visionconten);
      setValueHead(list[0].ourecorevalue);
      setValueContent(list[0].corevalueconten);
    }
  }, [list]);

  useEffect(() => {
    const fetchHiredata = () => {
      axios
        .get("aboutvalue/aboutvalue_list", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          setAboutValueList(result.data.result);
        })
        .catch((err) => {
          setDberr(err.response.data.error);
        });
    };

    fetchHiredata();
  }, []);

  useEffect(() => {
    let carddetails = document.querySelectorAll(".sstpl_about-card");

    const colors = ["#ffb6eb", "#92bcff", "#ffbc8e", "#98e7d3"];
    carddetails.forEach((card) => {
      card.addEventListener("mouseover", () => {
        const hoverColor = colors[Math.floor(Math.random() * colors.length)];
        card.style.setProperty("--hover-color", hoverColor);
      });
    });
  });

  // useEffect(() => {
  //   let data = [
  //     {
  //       image: about1,
  //       title: "Growth Mindset",
  //       discription: "We are a company with a growth mindset where we are willing to take risks to get success and we have the skills and abilities to face the challenges.",
  //     },
  //     {
  //       image: about2,
  //       title: "Transparency and Honesty",
  //       discription: "Our company believes in providing customer-centric services. We believe in transparency and honesty to gain the trust of the clients.",
  //     },
  //     {
  //       image: about3,
  //       title: "Team Work",
  //       discription: "We believe in collective efforts and that’s why at Tagline Infotech we complete the task more effectively with the help of teamwork.",
  //     },
  //     {
  //       image: about4,
  //       title: "Client and Team Satisfaction",
  //       discription: "We maintain high standards in all aspects of the business to ensure client and team satisfaction.",
  //     },
  //     {
  //       image: about5,
  //       title: "Healthy Culture",
  //       discription: "We also assist with social and environmental causes, improving health and happiness, and providing the best possible healthy culture",
  //     },
  //     {
  //       image: about6,
  //       title: "Quality of work",
  //       discription: "As a well-established company, we aim for the greatest possible level of quality to achieve the goals of the clients.",
  //     },
  //     {
  //       image: about7,
  //       title: "Open Mindset",
  //       discription: "We encourage innovation, creativity, and an open mindset to create the products and services that make a positive difference in the world.",
  //     },
  //     {
  //       image: about8,
  //       title: "Privacy",
  //       discription: "While creating products and solutions for clients, we keep user privacy and data security as our top priorities.",
  //     },
  //     {
  //       image: about9,
  //       title: "Customer Focus & Obsession",
  //       discription: "We are a leading development company that mainly focuses on the satisfaction of the customers.",
  //     },
  //     {
  //       image: about9,
  //       title: "Think like a Product & Not as a Task Features",
  //       discription: "We prioritize and aim to create top-notch, robust, and useful products that are full of modern functionalities.",
  //     },
  //     {
  //       image: about9,
  //       title: "Innovation",
  //       discription: "At Tagline Infotech we believe in innovation and we are always ready to implement new things to make the product revolutionary.",
  //     },
  //     {
  //       image: about9,
  //       title: "Productivity",
  //       discription: "We are accountable for good productivity skills like time management, planning skills, and decision-making abilities to deliver the project more efficiently.",
  //     },
  //   ];
  //   // data = data.sort(() => Math.random() - 0.5);
  //   setWorkdata(data);
  // }, []);
  return (
    <>
      <div className={`softstormweb-about-concept extradata_aboyt_sstpl pt-70 pb-80 `}>
        <div className="container">
          <div className="text-center  handelmobileview_about ">
            <h3>Our Stories</h3>
            <div className="abour_line">
              <span className="main-header-line_choos"></span>
            </div>
          </div>
          {/* <div className="row align-items-center"> */}
            <div className="row evenly maintain_mobile_about">
              <div className="col-sm-6 col-lg-4 mt-4 maintain_mobile_about maintain_uperteb_about ">
                <div className="sstpl_about-card r-bg-c ">
                  <div className="sstpl_about-card-img shadows">
                    <img src={vission} alt="services" />{" "}
                  </div>
                  <div className="ree-card-content mt40">
                    <h4 className="mb20">{visionHead}</h4>
                    <div dangerouslySetInnerHTML={{__html: visionContent}} />
                  </div>
                
                </div>
              </div>
              <div className="col-sm-6 col-lg-4  maintain_mobile_about maintain_uperteb_about missin_about">
                <div className="sstpl_about-card r-bg-c ">
                  <div className="sstpl_about-card-img shadows">
                    <img src={mission} alt="services" />{" "}
                  </div>
                  <div className="ree-card-content mt40">
                    <h4 className="mb20">{missionHead}</h4>
                    <div dangerouslySetInnerHTML={{__html: missionContent}} />
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
          <div className="text-center mb-2 mt-40">
            <h3 className="mb-2">{valueHead}</h3>
            {contentValurMatch === true && <div dangerouslySetInnerHTML={{__html: valueContent}} />}
            <div className="abour_line">
              <span className="main-header-line_choos"></span>
            </div>
          </div>
          <div className="row mt-2">
            {aboutValueList.map((e, Index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10" key={Index}>
                  <div className="sstpl_about-card r-bg-c mt-40 ">
                    <div className="sstpl_about-card-img shadows">
                      <img src={e.file} alt="services" />{" "}
                    </div>
                    <div className="">
                      <h4 className="mb-2">{e.heading}</h4>
                      <div dangerouslySetInnerHTML={{__html: e.content}} />
                    </div>
                  </div>
                </div>
              );
            })}


            
            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob1} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob2} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob3} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob4} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob5} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob6} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob7} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob8} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob9} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob10} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob11} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10">
              <div className="sstpl_about-card r-bg-c mt-40 ">
                <div className="sstpl_about-card-img shadows">
                  <img src={mob12} alt="services" />{" "}
                </div>
                <div className="">
                  <p className="mt-10">'hi</p>
                </div>
              </div>
            </div> */}
            {/* {workdata.map((e, Index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10" key={Index}>
                  {/* <div className="softstormweb-about text-center mt-30 wow animated fadeInUp">
                    <div className="icon">
                      <img src={e.image} alt="" />
                    </div>
                    <h4 className=" pb-2 pt-3">{e.title}</h4>
                    <p>{e.discription}</p>
                  </div> *}
                  <div className="sstpl_about-card r-bg-c mt-40 ">
                    <div className="sstpl_about-card-img shadows">
                      <img src={e.image} alt="services" />{" "}
                    </div>
                    <div className="">
                      <h4>{e.title}</h4>
                      <p className="mt-10">{e.discription}</p>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPart2;
