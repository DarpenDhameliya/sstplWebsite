import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const LeftButton = ({link , value}) => {
  return (
    <>
        <div className='setpageheading_withback'>
          <Link scroll={false} href={link} className={styles.handlebackbutton} >
            <i className="fa fa-arrow-left black fs-25" aria-hidden="true"></i>
            </Link>
            <Typography variant="h4" gutterBottom className='setheading ml-3'>
              {value}
            </Typography>
          </div>
    </>
  )
}

export default LeftButton