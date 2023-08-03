import React, {useEffect, useState} from "react";
import TopToBottom from "./lib/TopToBottom";
import { Link } from "react-router-dom";

function BackToTop({className}) {
  useEffect(() => {
      TopToBottom(".back-to-top");

  });

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className={`back-to-top ${className}`}>
        <Link to="#" onClick={handleClick} className="backToTopLink">
          <i className="fa fa-arrow-up" />
        </Link>
      </div>
    </>
  );
}

export default BackToTop;
