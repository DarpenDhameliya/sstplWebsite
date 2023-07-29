import React ,{useEffect}from "react";
import sponserShape from "../../../assets/images/icon/SSTPL-500.webp";
import bulletIcon from "../../../assets/images/icon/bullet1_list.webp";

const Privacy = ({className}) => {
  useEffect(() => {
    document.title = "Privacy Policy | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, [])
  
  return (
    <>
      <section className={`softstormweb-privacy pt-70 pb-80 ${className}`} id="service" style={{backgroundImage: "none"}}>
        <div className="container">
          <div className="handlediv">
            <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2">Any information you place on SoftStorm Technosys web site is treated with the utmost care. </p>
          </div>
          <div className="handlediv">
            <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2">Certain information including your IP address, domain name is collected through cookies and similar technologies for a limited purpose. This is to learn which parts of our site you are visiting and to improve user experience next time you visit our site. We do not link the information to anything personally identifiable, meaning while a user’s session is tracked, the users remain anonymous. Only aggregated statistics are captured to make the web site more informative and useful to the visitors.</p>
          </div>
          <div className="handlediv">
            <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
          <p className="pb-4 pl-2">Our site’s inquiry form requires you to give us contact information such as your name and email address. We may use this contact information to send you information about our company services and the continuous upgrades in our offerings. In the event that you choose to not receive such emails, please use the unsubscribe button and we will ensure that the information emails are stopped. Of course, you are welcome to opt to reenter our mail list at any time in the future.</p>
          </div>
          <div className="handlediv">
            <img src={bulletIcon} alt="symbol" className="handlecarrericon " />
          <p className="pb-4 pl-2">We value your privacy and follow a strict “no-spam” policy! We never give, lease, sell or otherwise disclose your personal information, except under court orders.</p>
          </div>
        </div>
        <div className="sponser-shape">
          <img src={sponserShape} alt="" />
        </div>
      </section>
    </>
  );
};

export default Privacy;
