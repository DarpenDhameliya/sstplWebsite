import Link from 'next/link'
import errorimg from '../assets/images/error.png'
import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
      <Image src={errorimg} alt="error" width={200} height={200} />
      <h2 className="mt-3 pb-10" style={{color: "#c20004", borderBottom: "2px solid"}}>
        Page Not Found
      </h2>
      <Link href="/" className="footer_bottomLinks pt-10 " >
        <i className="fa fa-arrow-left-long mr-3" />
        Home
      </Link>
    </div>
  )
}

export default NotFound