import Link from 'next/link'
import React from 'react'
import style from './service.module.css'
const SidePortionUppser = () => {
  return (
    <aside className={` ${style.widget}  ${style.widget_categories}`}>
          <h3 className={style.widget_title}>OUR SERVICES</h3>
          <ul>
            <li>
              <Link scroll={false} href="/web-application-developement" className={style.handlesideportion}>
                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>
                Web Application Development
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/mobile-application-developement" className={style.handlesideportion}>
                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>
                Mobile Application Development
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/desktop-software-developement" className={style.handlesideportion}>
                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>
                Desktop Software Development
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/digital-marketing" className={style.handlesideportion}>
                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/web_graphic-designing" className={style.handlesideportion}>
                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>
                Web & Graphic Designing
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/enterprise-services" className={style.handlesideportion}>
                <i className="fa fa-angle-right mr-2" aria-hidden="true"></i>
                Enterprise Services
              </Link>
            </li>
          </ul>
        </aside>
  )
}

export default SidePortionUppser