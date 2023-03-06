import React from 'react';
import './CoverPage.scss';
import { motion } from 'framer-motion';
import Link from 'antd/es/typography/Link';
import {TbArrowNarrowDown} from "react-icons/tb";
// import { TraxHeader } from '../TraxHeader/TraxHeader';
// import "../../../public/images/"

export const CoverPage = () => {
  return (
    <div className='cover-page-container'>
      {/* <TraxHeader/> */}
        <h1 className='cover-page-title'><span className='cover-page-master-title'>We're Design Master</span><br/> <motion.span initial={{ opacity: 0, y: '1vh'}} animate={{ opacity: 1,y:'-1vh'}} transition={{ duration: 1 }} className='cover-page-title-span'>Believes In </motion.span> <br/>A Great Innovation</h1>
        <button className='cover-page-button'>Learn More</button>
        <motion.img initial={{ opacity: 0, y: '30px',x:0 }} animate={{ opacity: 2,x:'30px'}} transition={{ duration: 1 }} className='cover-page-img-top-left' src='https://trax.acrothemes.com/bootstrap-v5/images/top-left.png' alt='cover-page-top-left'/>
        <motion.img initial={{ opacity: 0, y: '30px' }} animate={{ opacity: 2, y: 0 ,x:'30px'}} transition={{ duration: 1 }} className='cover-page-img-bottom-left' src='https://trax.acrothemes.com/bootstrap-v5/images/papers.png' alt='cover-page-bottom-left'/>
        {/* <div className='cover-page-img-right-container'> */}
        <motion.img initial={{ opacity: 0, x: '30px' }} animate={{ opacity: 2,y:'30px',x:0}} transition={{ duration: 1 }} className='cover-page-img-top-right' src='https://trax.acrothemes.com/bootstrap-v5/images/top-right.png' alt='cover-page-top-right'/>
        <motion.img initial={{ opacity: 0, x:'30px'}} animate={{ opacity: 2,y:'-30px',x:0}} transition={{ duration: 1 }} className='cover-page-img-bottom-right' src='https://trax.acrothemes.com/bootstrap-v5/images/bottom-right.png' alt='cover-page-bottom-left'/>
        {/* </div> */}
        <Link href='/#features'>
          <div className='cover-page-scroll-down-container'>
            <button className='cover-page-scroll-down'>Scroll Down</button>
            <TbArrowNarrowDown className='cover-page-scroll-down-icon'/>
          </div>  
        </Link>
    </div>
  )
}
