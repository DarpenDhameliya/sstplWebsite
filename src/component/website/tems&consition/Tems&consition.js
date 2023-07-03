import React , {useEffect} from "react";
import sponserShape from "../../../assets/images/icon/SSTPL-500.webp";
import bulletIcon from "../../../assets/images/icon/bullet1_list.webp";

const Temsandconsition = ({className}) => {
  useEffect(() => {
    document.title = "SoftStorm - Tems & Condition";
  }, [])
  
  return (
    <>
      <section className={`softstormweb-privacy pt-90 pb-100 ${className}`} id="service" style={{backgroundImage: "none"}}>
        <div className="container">
          <p className="pb-4">SoftStorm India Pvt. Ltd.(here in after SSIPL) maintains this Site for information about our product and services. Please feel free to browse the Site. </p>
          <p className="pb-4">Your access and use of the Site is also subject to the following terms and conditions and future revisions if any, (“Terms and Conditions”) and all applicable laws. By accessing and browsing the Site, you accept the Terms and Conditions below.</p>
          <ul className="handelaboutul" style={{paddingLeft: "25px"}}>
            <div className="handlediv">
              <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
              <li className="pb-4 pl-2" style={{fontSize: "17px"}}>
                The Site, and all the content, materials, information, software, products and services provided on the Site, are provided on an “as is” and “as available” basis. SSTPL expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranty of merchantability, fitness for a particular purpose and non-infringement.
              </li>
            </div>
            <div className="handlediv">
              <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
              <li className="pb-4 pl-2" style={{fontSize: "17px"}}>
                The Content and the projects described or depicted on the Site are subject to change without notice. Copyright may exist on any future materials. Unauthorized recording of such materials would be contrary to applicable copyright laws.
              </li>
            </div>
            <div className="handlediv">
              <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
              <li className="pb-4 pl-2" style={{fontSize: "17px"}}>
                SSTPL assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect, your computer, equipment or other property on account of your access to, use of or browsing the Site or your downloading of any materials, data, text, images, video, or audio from the Site.
              </li>
            </div>
            <div className="handlediv">
              <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
              <li className="pb-4 pl-2" style={{fontSize: "17px"}}>
                Materials displayed on the Site are either the property of, or used with permission by SSTPL. The use of these materials by you or anyone else authorized by you is prohibited unless expressly permitted by these Terms and Conditions or express written permission is obtained from SSTPL. Any unauthorized use of the images may violate copyright laws, trademark laws, the laws of privacy and publicity.
              </li>
            </div>
            <div className="handlediv">
              <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
              <li className="pb-4 pl-2" style={{fontSize: "17px"}}>
                SSTPL is not responsible for the content of any other site linked to or from the Site. Your linking to any other site/sites is entirely at your own risk. While SSTPL may provide links on the Site to other sites, the inclusion of such links is only for your convenience and should not be interpreted as an endorsement of the owner/sponsor of the site or the content on the other site/s. Subject to the Non-Excludable Rights (above), SSTPL disclaims all warranties, express and implied, as to the accuracy, validity, legality or otherwise of any materials or information contained on such sites.
              </li>
            </div>
            <div className="handlediv">
              <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
              <li className="pb-4 pl-2" style={{fontSize: "17px"}}>
                You are prohibited from posting or transmitting any unlawful, threatening, harassing, defamatory, libellous, obscene, pornographic or profane material or any material that could constitute or encourage conduct that would be considered a criminal offence or give rise to civil liability or otherwise violate any law.
              </li>
            </div>
            <div className="handlediv">
              <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
              <li className="pb-4 pl-2" style={{fontSize: "17px"}}>
                SSTPL may at any time revise these Terms and Conditions by updating this post. Since you are bound by these Terms and conditions, please visit this page regularly to learn about the revised Terms and Conditions if any.
              </li>
            </div>
          </ul>
        </div>
        <div className="sponser-shape">
          <img src={sponserShape} alt="" />
        </div>
      </section>
    </>
  );
};

export default Temsandconsition;
