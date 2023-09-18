import Link from 'next/link'
// import errorimg from '../assets/images/error.png'
// import errorimg from '../assets/images/icon/sstpl404.webp'
import errorimg from '../assets/images/icon//404.webp'

import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
      <Image src={errorimg} alt="error" width={400} height={400} />
      {/* <h3 className=" pb-10" style={{color: "#4f4f4f", borderBottom: "2px solid #4f4f4f" , position:'relative' , top:'-100px'}}> */}
      <h3 className=" pb-10" style={{color: "#4f4f4f", borderBottom: "2px solid #4f4f4f" }}>
        Page Not Found
      </h3>
      <Link href="/" className="footer_bottomLinks pt-10 black" >
        <i className="fa fa-arrow-left-long mr-3" />
        Home
      </Link>
    </div>
  )
}

export default NotFound