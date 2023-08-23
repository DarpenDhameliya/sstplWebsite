import React, { Suspense, lazy, useEffect, useState } from "react";
import Loader from "@/Component/loader";
const Home = lazy(() => import("./Home"));
const Discription = lazy(() => import("./Discription"));
const WhyChoseUs = lazy(() => import("./WhyChoseUs"));
const Services = lazy(() => import("./Services"));
const OurWorkService = lazy(() => import("./OurWorkService"));
const Technology = lazy(() => import("./Technology"));
const Industry = lazy(() => import("./Industry"));
const Portfoliyo = lazy(() => import("./Portfoliyo"));
const Testimonial = lazy(() => import("./Testimonial"));

const HomeIndex = ({apidata}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  });
  return (
    <>
      {loading && <Loader />}
      <div className={`sstpl-visible ${loading === false ? "active" : ""}`}>
        <Suspense fallback={<Loader />}>
          <Home />
          <Discription />
          <WhyChoseUs />
          <Services />
          <OurWorkService />
          <Technology />
          <Industry />
          <Portfoliyo />
          <Testimonial />
        </Suspense>
      </div>
    </>
  );
};

export default HomeIndex;
