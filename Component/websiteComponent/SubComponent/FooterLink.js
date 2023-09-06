import Link from "next/link";
import bullet1 from "../../../assets/images/point100.webp";
import Image from "next/image";

export const FooterLink = ({ scroll = false, ...props }) => {
  return <Link scroll={scroll} {...props} />;
};

export const SocialLink = ({ href, className, children }) => (
  <Link scroll={false} className={className} target="_blank" href={href} rel="noopener noreferrer">
    {children}
  </Link>
);

export const PrivacyLink = ({ href, children }) => (
  <Link scroll={false} className="footer_conditions  mr-2 ml-2" href={href}>
    {children}
  </Link>
);

export const socialMediaLinks = [
  { href: "https://www.facebook.com/softstorm.in", className: "social_icon ml-3", iconClass: "fab fa-facebook-f hoverefffac", color: "#4f4f4f" },
  { href: "https://twitter.com/softstorm_in", className: "social_icon", iconClass: "fab fa-twitter hoverefftwi", color: "#4f4f4f" },
  { href: "https://www.linkedin.com/company/softstorm-in", className: "social_icon", iconClass: "fab fa-linkedin-in hoverefflin", color: "#4f4f4f" },
  { href: "https://www.instagram.com/softstorm.in", className: "social_icon", iconClass: "fab fa-instagram hovereffins", color: "#4f4f4f" },
  { href: "https://wa.me/912613560756", className: "social_icon", iconClass: "fab fa-whatsapp hovereffwat", color: "#4f4f4f" },
  { href: "skype:softstorminfosys?chat", className: "social_icon", iconClass: "fab fa-skype hovereffsky", color: "#4f4f4f" },
];

export const HeadermainLink = ({ children, href }) => (
  <Link scroll={false} href={href} className={`menu-links`}>
    {children}
  </Link>
);

export const HeaderService = ({ href, leanguage }) => (
  <li className="mb-1">
    <Link scroll={false} href={href} className=" p-1">
      <div>
        <Image height={30} width={30} src={bullet1} alt="symbol" className="header_icno" />
      </div>{" "}
      <span className="header_service_span ">{leanguage}</span>{" "}
    </Link>
  </li>
);

export const HeaderAbout = ({ href, leanguage }) => {
  <li className="mb-2">
    <Link scroll={false} href={href} className="handlesub-menu p-2">
      <div className="aboutheadre_left">
        <Image src={bullet1} alt="symbol" height={30} width={30} />
      </div>{" "}
      <span className="ml-15 hoverLink">{leanguage}</span>{" "}
    </Link>
  </li>;
};
