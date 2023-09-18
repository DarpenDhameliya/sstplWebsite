import React, {useEffect, useState} from "react";
import vission from "../../../assets/images/our vission.webp";
import mission from "../../../assets/images/mission.webp";
import style from './About.module.css';
import axios from "../../Axios";
import Image from "next/image";
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
          loding()
          setAboutValueList(result.data.result);
        })
        .catch((err) => {
          loding()
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


  return (
    <>
      <div className={`${style.softstormweb_about_concept} ${style.extradata_aboyt_sstpl} pt-70 pb-80 `}>
        <div className="container">
          <div className={`text-center  ${style.handelmobileview_about} `}>
            <h3>Our Stories</h3>
            <div className={style.abour_line}>
              <span className="main-header-line_choos"></span>
            </div>
          </div>
          <div className="row evenly maintain_mobile_about">
            <div className={`col-sm-6 col-lg-4 mt-4  ${style.maintain_uperteb_about} `}>
              <div className="sstpl_about-card r-bg-c ">
                <div className="sstpl_about-card-img shadows">
                  <Image width={70} height={20}    src={vission} alt="services" />{" "}
                </div>
                <div className="ree-card-content mt40">
                  <h4 className="mb20">{visionHead ? visionHead : "Our Vision"}</h4>
                  {visionContent ? <div dangerouslySetInnerHTML={{__html: visionContent}} /> : <p>We transforms clients businesses by enhancing their performance with innovative digital services and products, which include consulting, marketing and technology.</p>}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4  maintain_mobile_about maintain_uperteb_about missin_about">
              <div className="sstpl_about-card r-bg-c ">
                <div className="sstpl_about-card-img shadows">
                  <Image width={70} height={20}    src={mission} alt="services" />{" "}
                </div>
                <div className="ree-card-content mt40">
                  <h4 className="mb20">{missionHead ? missionHead : "Our Mission"}</h4>
                  {missionContent ? <div dangerouslySetInnerHTML={{__html: missionContent}} /> : <p>We believe that what we build touches lives around us. We use technology to create a better and smarter environment. We nurture thought leaders and encourage them to be the seeds of change through smart software development and consulting services. Our commitment to quality and integrity helps us to use technology and create a better and smarter future.</p>}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="text-center mb-2 mt-40">
            <h3 className="mb-2">{valueHead ? valueHead : "Core Values"}</h3>
            {contentValurMatch === true && <div dangerouslySetInnerHTML={{__html: valueContent}} />}
            <div className="abour_line">
              <span className="main-header-line_choos"></span>
            </div>
          </div>
          <div className="row mt-2">
            {aboutValueList.length > 0
              && aboutValueList.map((e, Index) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-10" key={Index}>
                      <div className="sstpl_about-card r-bg-c mt-40 ">
                        <div className="sstpl_about-card-img shadows">
                          <Image width={70} height={20}    src={e.file} alt="services" />{" "}
                        </div>
                        <div className="">
                          <h4 className="mb-2">{e.heading}</h4>
                          <div dangerouslySetInnerHTML={{__html: e.content}} />
                        </div>
                      </div>
                    </div>
                  );
                })
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPart2;
