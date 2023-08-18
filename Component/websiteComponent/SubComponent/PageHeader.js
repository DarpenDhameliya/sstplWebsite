import Link from "next/link";
import React from "react";

const Header = ({title, breadcrumb}) => {
  return (
    <>
      <div className="softstorm_insidepage_header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-11">
              <div className="softstorm_insidepage_titleitem">
                <h3 className="title">{title}</h3>
                <nav aria-label="breadcrumb ">
                  <ol className="breadcrumb">
                    {breadcrumb.map((value) => (
                      <li key={Math.random()} className="breadcrumb-item">
                        <Link scroll={false} href={value.link}>{value.title}</Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
