import React, {useEffect, useState} from "react";
import TopToBottom from "../SubComponent/lib/TopToBottom";

function BackToTop({className}) {
  useEffect(() => {
      TopToBottom(".back-to-top");
  });

  const handleClick = (e) => {
    window.scrollTo(0, 0);

  };
  return (
    <>
      <div className={`back-to-top ${className}`}>
        <a  onClick={handleClick} className="backToTopLink">
          <i className="fa fa-arrow-up white" />
        </a>
      </div>
    </>
  );
}

export default BackToTop;
