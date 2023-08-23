import React, { useState, useEffect } from "react";
import Image from "next/image";

const Testimonial = ({ className, loding, data }) => {
  const [testimonialList, setTestimonialList] = useState([]);
  const [staticdata, setStaticdata] = useState([]);
  const [fetcherr, setFetcherr] = useState("");

  // const fetchHiredata = () => {
  //   axios
  //     .post("testimonial/testimonial_list", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((result) => {
  //       loding();
  //       setTestimonialList(result.data.result);
  //     })
  //     .catch((err) => {
  //       loding();
  //       setFetcherr(err.response.data.error);
  //     });
  // };

  useEffect(() => {
    if (typeof data !== "string") {
      setTestimonialList(data);
    } 
    loding();
  }, [data]);

  useEffect(() => {
    const importData = async () => {
      const TechnologyData = await import("../../Home/TestimonialStaticData.js");
      const sortedData = TechnologyData.default;
      setStaticdata(sortedData);
    };
    setTimeout(() => {
      if (testimonialList.length === 0) {
        importData();
      }
    }, 2000);
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
                              <Image width={70} height={20} src={e.image} alt="" className="softstorm_testimonial_img" />
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
                  : staticdata.map((e, index) => {
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-11" key={index}>
                          <div className="softstorm_testimonialPage text-center mt-30 wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                            <div className="softstorm_testimonial_icon">
                              <Image width={70} height={20} src={e.image} alt="" className="softstorm_testimonial_img" />
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
