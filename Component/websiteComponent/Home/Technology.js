import React, {useState, useEffect} from "react";
import sponserShape from "../../../assets/images/sponser-shape.png";
import mob1 from "../../../assets/images/technology/android.webp";
import mob2 from "../../../assets/images/technology/aws_services.webp";
import mob3 from "../../../assets/images/technology/cshp.webp";
import mob4 from "../../../assets/images/technology/ci_cd.webp";
import mob5 from "../../../assets/images/technology/codeigniter.webp";
import mob6 from "../../../assets/images/technology/docker.webp";
import mob7 from "../../../assets/images/technology/firebase.webp";
import mob8 from "../../../assets/images/technology/flutter.webp";
import mob9 from "../../../assets/images/technology/ios.webp";
import mob10 from "../../../assets/images/technology/laravel.webp";
import mob11 from "../../../assets/images/technology/mongo_db.webp";
import mob12 from "../../../assets/images/technology/ms_sql.webp";
import mob13 from "../../../assets/images/technology/mysql.webp";
import mob14 from "../../../assets/images/technology/node_js.webp";
import mob15 from "../../../assets/images/technology/object_box.webp";
import mob16 from "../../../assets/images/technology/odoo.webp";
import mob17 from "../../../assets/images/technology/php.webp";
import mob18 from "../../../assets/images/technology/postgresql.webp";
import mob19 from "../../../assets/images/technology/python.webp";
import mob20 from "../../../assets/images/technology/react_js.webp";
import mob21 from "../../../assets/images/technology/resux.webp";
import mob22 from "../../../assets/images/technology/salesforce.webp";
import mob23 from "../../../assets/images/technology/sqlite.webp";
import mob24 from "../../../assets/images/technology/tailwind.webp";
import mob25 from "../../../assets/images/technology/vue_js.webp";
import mob26 from "../../../assets/images/technology/angular.webp";
import mob27 from "../../../assets/images/technology/typescript.webp";
import mob28 from "../../../assets/images/technology/cloudservices.webp";
import Image from "next/image";

export default function Technology() {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    let data = [
      {image: mob1, title: "Android"},
      {image: mob2, title: "AWS Services"},
      {image: mob3, title: "C#"},
      {image: mob4, title: "CI/CD"},
      {image: mob5, title: "Codegniter"},
      {image: mob6, title: "Docker"},
      {image: mob7, title: "Firebase"},
      {image: mob8, title: "Flutter"},
      {image: mob9, title: "iOS"},
      {image: mob10, title: "Laravel"},
      {image: mob11, title: "MongoDB"},
      {image: mob12, title: "MS SQL"},
      {image: mob13, title: "MY SQL"},
      {image: mob14, title: "Node.js"},
      {image: mob15, title: "ObjectBox"},
      {image: mob16, title: "Odoo"},
      {image: mob17, title: "PHP"},
      {image: mob18, title: "Postgresql"},
      {image: mob19, title: "Python"},
      {image: mob20, title: "React.js"},
      {image: mob21, title: "Redux"},
      {image: mob22, title: "Salesforce"},
      {image: mob23, title: "Sqlite"},
      {image: mob24, title: "Tailwind"},
      {image: mob25, title: "Vue.js"},
      {image: mob26, title: "Angular"},
      {image: mob28, title: "Cloud Services"},
      {image: mob27, title: "TypeScript"},
    ];
    data = data.sort(() => Math.random() - 0.5);
    setWorkdata(data);
  }, []);
  return (
    <>
      <section className={`softstormweb-technology pb-70 pt-80 `}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className=" text-center">
                <h3 className="">Technologies We Work With</h3>
                <span className="main-header-line_choos"></span>
                <p>Join over 40,000 businesses worldwide.</p>
              </div>
            </div>
          </div>
          <div className="softstormweb-box-technology d-flex justify-content-center pt-4">
            <ul className="handleul_technology">
              {workdata.map((e, index) => {
                return (
                  <li className="handle_list" data-aos="zoom-in" data-aos-duration="1000" key={index}>
                    <div className="tech_icon">
                      <Image className="" src={e.image} alt="Apple" />
                    </div>
                    <h6 className="tech-title">{e.title}</h6>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="sponser-shape">
          <Image src={sponserShape} alt="" />
        </div>
      </section>
    </>
  );
}
