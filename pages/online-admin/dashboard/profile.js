import React from 'react'
import dynamic from "next/dynamic";
const Profile_forggetpas = dynamic(() => import('@/Component/AdminComponent/pages/profile/Profile_forggetpas'), { ssr: false });

const profile = () => {
  return (
    <Profile_forggetpas />
  )
}

export default profile