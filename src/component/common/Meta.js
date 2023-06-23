import React, { useEffect } from "react";

const Meta = ({pagetitle , discription}) => {
  useEffect(() => {    
    document.title = pagetitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const currentContent = metaDescription.getAttribute('content');
    if (metaDescription) {
      if (currentContent !== discription) {
        metaDescription.setAttribute('content', discription);
      } 
    }
  }, [discription, pagetitle]);

  return;
};

export default Meta;
{/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
<title>Make My Foam | All Things Foam Quick & Easy</title>
<meta name="title" content="<?php if(!empty($metadata[0]->meta_title)){ echo $metadata[0]->meta_title;}?>" />
<meta name="keyword" content="<?php if(!empty($metadata[0]->meta_keyword)){ echo $metadata[0]->meta_keyword;}?>" />
<meta name="description" content="<?php if(!empty($metadata[0]->meta_description)){ echo $metadata[0]->meta_description;}?>" />
<meta name="copyright" content="Bedroom store Company"/>
<meta name="author" content="make my foam" />
<meta name="email" content="makemyfoam@gmail.com" />
<meta name="Distribution" content="CA" />
<meta name="page-topic" content="make my foam" />
<meta name="page-type" content="Rich Internet Media" />
<meta name="Rating" content="General" />
<meta name="Robots" content="INDEX,FOLLOW" />
<meta name="Revisit-after" content="7 Days" />
<link rel="canonical" href="{{url('')}}" />
<meta name="site" content="Bedroom store Company" />    
<meta property="og:title" content="<?php if(!empty($metadata[0]->meta_title)){ echo $metadata[0]->meta_title;}?>" />
<meta property="og:url" content="{{url('')}}" />
<meta property="og:image" content="{{asset('public/front/images/make-my-foam--facebook.webp')}}" />
<meta property="og:description" content="<?php if(!empty($metadata[0]->meta_description)){ echo $metadata[0]->meta_description;}?>" />
<meta property="og:site_name" content="make my foam" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="make my foam" />
<meta name="twitter:title" content="<?php if(!empty($metadata[0]->meta_title)){ echo $metadata[0]->meta_title;}?>" />
<meta name="twitter:description" content="<?php if(!empty($metadata[0]->meta_description)){ echo $metadata[0]->meta_description;}?>" />
<meta name="twitter:image:src" content="{{asset('public/front/images/make-my-foam--facebook.webp')}}"/>
<meta itemprop="name" content="make my foam" />
<meta itemprop="description" content="At Make My Foam, we manufacture mattresses and foam products using only the highest quality 100% Natural Dunlop Latex and/or resilient natural soy-based foam." />
<meta itemprop="image" content="{{asset('public/front/images/make-my-foam--facebook.webp')}}"/> */}