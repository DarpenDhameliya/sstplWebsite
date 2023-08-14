import React, {useState, useEffect} from "react";
import axios from "../../../Axios";
import battel from "../../../../assets/images/testimonial/battel.webp";
import skt from "../../../../assets/images/testimonial/sk.webp";
import macswint from "../../../../assets/images/testimonial/macswin.webp";
import mectech from "../../../../assets/images/testimonial/mectech.webp";
import redientt from "../../../../assets/images/testimonial/redient.webp";
import Image from "next/image";

const Testimonial = ({className , loding}) => {
  const [workdata, setWorkdata] = useState([]);
  const [testimonialList, setTestimonialList] = useState([]);
  const [fetcherr, setFetcherr] = useState("");

  const fetchHiredata = () => {
    axios
      .post("testimonial/testimonial_list", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        loding()
        setTestimonialList(result.data.result);
      })
      .catch((err) => {
        loding()
        setFetcherr(err.response.data.error);
      });
  };

  useEffect(() => {
    fetchHiredata();
  }, []);

  useEffect(() => {
    let data = [
      {image: battel, title: "Team has a Expert of technical knowledge and SoftStorm can work any thing which is hard in technology, I have experienced solving any difficult problem with very carefully.", owner: "Rakesh Patil", title1: "Owner, Battle Village"},
      {image: skt, title: "Softstrom has Convert our complex business process to very easy and calculative. if we talk about the support of the team then i am giving 100% performance. Thank you softstorm.", owner: "Keyur Sukhadiya", title1: "Owner, SK Air Conditioner"},
      {image: macswint, title: "The SSTPL team has a unique strength that easily understands our Ideas and implements it with Application.", owner: "Kartik Donda", title1: "Owner, MacSwin Technology"},
      {image: mectech, title: "Looking at the knowledge that both partner of Softstorm, I would say that they are the new Tony Stark of the world of technology.", owner: "Anil Tarpara", title1: "Owner, MAK Tech"},
      {image: redientt, title: "Looking at the technical knowledge and innovative ideas of Softstorm, everyone can say that the company will make great strides in the future.", owner: "Kishan Mangukiya", title1: "Trustee, The Radiant International School"},
    ];
    setWorkdata(data);
    document.title = "Testimonial | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);
  return (
    <>
      <section className={`softstormweb-testimonial  ${className}`} id="service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="row justify-content-center">
                {testimonialList.length > 0
                  ? testimonialList.map((e, index) => {
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-11" key={index}>
                          <div className="softstorm_testimonialPage text-center mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                            <div className="softstorm_testimonial_icon">
                              <Image width={70} height={20}  src={e.image} alt="" className="softstorm_testimonial_img" />
                            </div>
                            <h4 className="softstormweb-title-testimonial pt-3">{e.name}</h4>
                            <p>{e.position}</p>
                            <div className="handleline pt-10">
                              <p className="pt-10 fs-15">{e.discription}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : workdata.map((e, index) => {
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-11" key={index}>
                          <div className="softstorm_testimonialPage text-center mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                            <div className="softstorm_testimonial_icon">
                              <Image width={70} height={20}  src={e.image} alt="" className="softstorm_testimonial_img" />
                            </div>
                            <h4 className="softstormweb-title-testimonial pt-3">{e.owner}</h4>
                            <p>{e.title1}</p>
                            <div className="handleline pt-10">
                              <p className="pt-10 fs-15">{e.title}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
