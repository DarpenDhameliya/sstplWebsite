import React from "react";
import image1 from "../../../assets/images/Group 16 (7).webp";
import mob1 from "../../../assets/images/customize solution png.webp";
import mob2 from "../../../assets/images/CUSTOMER SUPPORT.webp";
import mob3 from "../../../assets/images/LATEST TECHNOLOGY.webp";
import Image from "next/image";
import dynamic from "next/dynamic";
import style from './cssComponent/WhyChoseUs.module.css'
const WhyChooseus_leftbox = dynamic(() => import("./component/whyChooseus_leftbox"), { ssr: false });

export default function WhyChoseUs() {
  return (
    <>
      <section className={` ${style.softstormweb_chooseus} white pt-70 pb-80`} id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11 col-sm-11">
              <div className="text-center">
                <p>Why SoftStorm is the first choice for</p>
                <h3>Businesses That Prioritize Growth</h3>
                <span className={style.main_header_line_choos}></span>
                <p>We are dedicated to achieving our customer's goals, customizing their experiences, innovating through technology, and making a positive impact. We strive to continuously exceed expectations.</p>
              </div>
            </div>
          </div>
          <div className="row mt-30 align-items-center justify-content-center">
            <div className="col-lg-6 col-md-11 col-sm-11 col">
              <div>
                <WhyChooseus_leftbox image={mob1} title="Customize Solution" discription="We always understand your need and provide you exact what you want." />

                <WhyChooseus_leftbox image={mob2} title="Customer Support" discription="We always become a solution for any need of our esteem client." style={"item_2"} />

                <WhyChooseus_leftbox image={mob3} title="Latest Technologies" discription="We are always updating our products with latest technologies." style={"item_3"} />
              </div>
            </div>
            <div className="col-lg-6 col-md-11 col-sm-11">
              <div className={` ${style.image_container} wow animated fadeInRight d-flex justify-content-center`} data-aos="zoom-out-up" data-aos-duration="800">
                <Image src={image1} alt="" className="handlewcu" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
