import React from "react";
import image from "../assets/images/logo.jpg";
import Head from "next/head";

const Seo = ({ title, pagedescription, keywords }) => {
  let url = "https://www.softstorm.in";
  let lasttitle = "SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  let defaultpagedescription = "Trusted Service Provider for AI Tool & iOT Service | Web Application | Mobile Application | Enterprise Solution | Digital Marketing ";
  let defaultKey = "It Company";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title ? title : lasttitle}</title>
        <meta name="title" content={title ? title : lasttitle} />
        <meta name="description" content={pagedescription ? pagedescription : defaultpagedescription} />
        <meta name="keywords" content={keywords ? keywords : defaultKey} />

        <meta property="og:type" content="Website" />
        <meta property="og:title" content={title ? title : lasttitle} />
        <meta property="og:description" content={pagedescription ? pagedescription : defaultpagedescription} />
        <meta property="og:site_name" content="SoftStorm Technosys" />
        <meta name="og:keyword" content={keywords ? keywords : defaultKey} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <meta name="site" content="SoftStorm Technosys Private Limited" />
        <meta name="copyright" content="SoftStorm Technosys Pvt. Ltd." />
        <meta name="author" content="SoftStorm Technosys" />
        <meta name="page-topic" content="SoftStorm Technosys" />
        <meta name="Rating" content="General" />
        <meta name="Robots" content="INDEX,FOLLOW" />
        <meta name="Revisit-after" content="7 Days" />
        <link rel="canonical" href="softstorm.in" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title ? title : lasttitle} />
        <meta name="twitter:description" content={pagedescription ? pagedescription : defaultpagedescription} />
        <meta name="twitter:site" content={url} />
        <meta name="twitter:creator" content={url} />
        <link rel="icon" href="/favicon.ico" />

        <meta name="google-site-verification" content="dTL5N67zsh_JdPUzgOM_q7BMlDHMaScJcQ7R8PyHJGI" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-142119303-1"></script>
        {/* <script>
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'UA-142119303-1');
        </script> */}
      </Head>
    </>
  );
};

export default Seo;
