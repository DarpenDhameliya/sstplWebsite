import React from 'react'
import HeaderImage from '../HeaderImage'
import Link from 'next/link'
import bullet1 from "../../../../assets/images/point100.webp";
import counterIconOne from "../../../../assets/images/icon/counter-icon-1.svg";
import counterIconTwo from "../../../../assets/images/icon/counter-icon-2.svg";
import counterIconFour from "../../../../assets/images/icon/counter-icon-4.svg";
import Image from 'next/image';
const AboutHeader = () => {
  return (
    <div className="menu-dropdown">
    <div className="menu-block-set">
      <div className="container submenuList ">
        <div className="menu-block-a">
          <div className="row">
            <div className="col-lg-7 d-flex mega-menu-blocksmain ">
              <div className="row handle_blocksmain_row">
                <div className="col-xl-5 col-lg-6 handle_aboutHeader">
                  <div>
                    <ul className="menu-li-link">
                      <li className="mb-2">
                        <Link scroll={false} href="/about-us" className="handlesub-menu p-2">
                          <div className="aboutheadre_left">
                            <Image src={bullet1} alt="symbol"  height={30} width={30}/>
                          </div>{" "}
                          <span className="ml-15 hoverLink">About Us</span>{" "}
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link scroll={false} href="/testimonial" className="handlesub-menu p-2">
                          <div className="aboutheadre_left">
                            <Image src={bullet1} alt="symbol"  height={30} width={30}/>
                          </div>{" "}
                          <span className="ml-15 hoverLink">Testimonial</span>{" "}
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link scroll={false} href="/" className="handlesub-menu p-2">
                          <div className="aboutheadre_left">
                            <Image src={bullet1} alt="symbol"  height={30} width={30}/>
                          </div>{" "}
                          <span className="ml-15 hoverLink">Blog</span>{" "}
                        </Link>
                      </li>
                      <li className="mb-2">
                        <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/uv?pb=!1s0x3be04f50264611d1%3A0x76746ef930af1752!5sSoftStorm%20Technosys%20Pvt.%20Ltd.!15sCgIgARICEAE&imagekey=!1e10!2sAF1QipM9setE_GO3u642xJu5mJb6uNQ7a20enuyXAxag" className="handlesub-menu p-2">
                          <div className="aboutheadre_left">
                            <Image src={bullet1} alt="symbol"  height={30} width={30}/>
                          </div>
                          <span className="ml-15 hoverLink">Life@SSTPL</span>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 handle_address_blick ">
                  <div className="mega-menu-blocks">
                    <p>Create disruptive business innovations through high-end creativity and world-class alliances.</p>
                    <h6 className="mt-3">Contact</h6>
                    <div className="row">
                      <div className="col-lg-12 mt-2">
                        <a href="tel:+91261-3560756" className="pl-0 pb-1 d-flex align-items-center">
                          <i
                            className="fa fa-phone mr-2"
                            style={{
                              fontSize: "18px",
                              color: "#505056",
                            }}
                          />
                          <div className="ml-1" style={{ color: "#505056" }}>
                            +91261-3560756
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-12 mt-1">
                        <a href="tel:+919099919947" className="pl-0 pb-1 d-flex align-items-center">
                          <i
                            className="fa fa-phone mr-2"
                            style={{
                              fontSize: "18px",
                              color: "#505056",
                            }}
                          />
                          <div className="ml-1" style={{ color: "#505056" }}>
                            +91 90999 19947
                          </div>
                        </a>
                      </div>
                    </div>
                    <h6 className="mt-3">Email</h6>
                    <a href="mailto:contact@softstorm.in" rel="noopener noreferrer" className="pl-0 d-flex align-items-center mt-1" style={{ color: "#505056" }}>
                      <i
                        className="fa fa-envelope mr-2"
                        style={{
                          fontSize: "18px",
                          color: "#505056",
                        }}
                      />
                      <div className="ml-1">contact@softstorm.in</div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 pl-0 menu_hire_about">
                  <div className="container pt-2 pb-2 pr-0 pl-0">
                    <div className="menu-extra-info-inner d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <p>Send Us Inquiry on:</p>
                        <a href="mailto:hr.softstorm@gmail.com" rel="noopener noreferrer">
                          <h6 className="pl-2">hr.softstorm@gmail.com </h6>
                        </a>
                      </div>
                      <button type="button" className="main-btn hidebtn fs-17" data-toggle="modal" data-target="#exampleModalCenter">
                        HIRE US
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="mega-menu-blocks_part2 ">
                <div className="menu-inner-block-a">
                  <div className="row">
                    <h5 className="mb-2">Awards & Recognition</h5>
                    <div className="col-lg-12 mt-3 mb-3 d-flex justify-content-between flex-sm-wrap">
                      <HeaderImage />
                    </div>
                  </div>
                  <div className="row mt-2 mb-3">
                    <div className="col-lg-4">
                      <div className="text-center">
                        <div className="aboutp_2">
                          <Image src={counterIconOne} alt="" className="imgheader" />
                        </div>
                        <h6>30+</h6>
                        <p>Globle Client</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="text-center">
                        <div className="aboutp_2">
                          <Image src={counterIconTwo} alt="" className="imgheader" />
                        </div>
                        <h6>50</h6>
                        <p>Success Project</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="text-center">
                        <div className="aboutp_2">
                          <Image src={counterIconFour} alt="" className="imgheader" />
                        </div>
                        <h6>18+</h6>
                        <p>Tech Experts team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutHeader