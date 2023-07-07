/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

function Drawer({ drawer, action, cartToggle }) {
  const [size, setSize] = useState("0px");
  const [item, setItem] = useState("home");

  const handler = (e, value, sizes) => {
    e.preventDefault();
    if (sizes > "0px") {
      setSize("0px");
    } else {
      const getItems = document.querySelectorAll(`#${value} li`).length;

      if (getItems > 0) {
        setSize(`${43 * getItems}px`);
        setItem(value);
      }
    }
  };
  return (
    <>
      <div
        onClick={(e) => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="offcanvas-brand text-center mb-40">
                  <img src={logo} alt="" />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={(e) => handler(e, "home", size)}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "about", size)}
                      id="about"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <Link to="#">ABOUT US</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "about" ? size : "0px",
                        }}
                      >
                        <li>
                          <Link to="/about-us">About SSTPL</Link>
                        </li>
                        <li>
                          <Link to="/testimonial">Testimonial</Link>
                        </li>
                        <li>
                          <Link to="/">Blog</Link>
                        </li>
                        <li>
                          <Link to="/">Life@SSTPL</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "ourservice", size)}
                      id="ourservice"
                      className="menu-item-has-children active"
                    >
                      <Link to="/our-service">Our Service</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "OurWork", size)}
                      id="OurWork"
                      className="menu-item-has-children active"
                    >
                      <Link to="/our-work">OUR WORK</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "careers", size)}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <Link to="/career">CAREERS</Link>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contactus", size)}
                      id="contactus"
                      className="menu-item-has-children active"
                    >
                      <Link to="/contact">CONTACT US</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={cartToggle}
                    className="main-btn-sidebar mt-3"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    HIRE US
                  </button>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/softstormtechnosys"
                        rel="noopener noreferrer"
                      >

                        <i
                          className="fab fa-facebook-f hoverefffac"
                          style={{ color: "#4f4f4f " }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/softstorm_india"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-twitter hoverefftwi"
                          style={{ color: "#4f4f4f " }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/softstorm-technosys"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-linkedin-in hoverefflin"
                          style={{ color: "#4f4f4f " }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://instagram.com/softstorm.in"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-instagram hovereffins"
                          style={{ color: "#4f4f4f " }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://wa.me/912613560756"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-whatsapp hovereffwat"
                          style={{ color: "#4f4f4f " }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.softstorm.in/skype:softstorminfosys?chat"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-skype hovereffsky"
                          style={{ color: "#4f4f4f " }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a
                        href="mailto:dkdhameliya24@gmail.com"
                        rel="noopener noreferrer"
                        className="pl-0"
                      >
                        <i
                          className="fa fa-envelope mr-2 drawer_locat"
                        />
                        <div className="ml-30">contact@softstorm.in</div>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+91261-3560756" className="pl-0">
                        <i
                          className="fa fa-phone mr-2 drawer_locat"
                        />
                        <div className="ml-30">+91261-3560756</div>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919099919947" className="pl-0">
                        <i
                          className="fa fa-phone mr-2 drawer_locat"
                        />
                        <div className="ml-30">+91 90999 19947</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/maps/dir/21.2369408,72.8629248/softstorm/@21.2356059,72.8587446,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f50264611d1:0x76746ef930af1752!2m2!1d72.8590564!2d21.2349749?entry=ttu"
                        target="_blank"
                        className="pl-0"
                      >
                        <i
                          className="fa fa-location-dot mr-2"
                          style={{ fontSize: "20px", color: "#c20004" }}
                        />
                        <div className="ml-30">
                          305-306, Amby Valley Arcade, Opp. Santosa Height,
                          Manisha Garnala. Uttran, Surat, Gujarat
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;

// mongopass : BnrKB3DBCeEiWC2x
