
import Loader from '@/Component/loader';
import dynamic from 'next/dynamic';
import React from 'react'
const DynemicLogo = dynamic(() => import('@/Component/AdminComponent/pages/DynemicLogo/DynemicLogo'), { ssr: false  , loading: () => <Loader />});

const festival = () => {
  return (
    <DynemicLogo />
  )
}

export default festival