import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: 50, // Change offset to trigger animations sooner or later
      duration: 100, // Animation duration
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
