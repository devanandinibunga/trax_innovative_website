import React from 'react';
import './MobileAppDesign.scss';
import { motion } from 'framer-motion';
import {RiSettings3Fill} from 'react-icons/ri';
import {BsCodeSlash} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineFolderOpen}  from 'react-icons/ai';


export const MobileAppDesign = () => {
  return (
    <div className='mobile-app-design-container'>
        <div className='mobile-app-design-details-container'>
            <div className='mobile-app-design-details-left-container'>
                <p>Quisque tellus risus, adipisci viverra</p>
                <h1>Mobile App Designs</h1>
            </div>
            <div className='mobile-app-design-details-right-container'>
                <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.</p>
            </div>
        </div>
        <div className='mobile-app-design-features-container'>
            <motion.div className='mobile-app-design-features-left-container' initial={{ opacity: 0, x: '-100vw' }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}>
                <div className='mobile-app-design-features-left-card'>
                    <RiSettings3Fill className='mobile-app-design-icon'/>
                    <h1 className='mobile-app-design-title'>Theme Options</h1>
                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>
                </div>
                <div className='mobile-app-design-features-left-card'>
                    <BiEdit className='mobile-app-design-icon'/>
                    <h1 className='mobile-app-design-title'>Customization</h1>
                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>
                </div>
            </motion.div>
            <div className='mobile-app-design-features-image-container'>
                <img className='mobile-app-design-features-image' src="https://trax.acrothemes.com/bootstrap-v5/images/iphone-slide-lock.jpg" alt="mobile-app-design-img"/>
                <div className='mobile-app-design-feature-image-power-btn'>
            </div>
            </div>
            
            <motion.div className='mobile-app-design-features-right-container' initial={{ opacity: 0, x: '100vw' }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}>
                <div className='mobile-app-design-features-right-card'>
                    <BsCodeSlash className='mobile-app-design-icon'/>
                    <h1 className='mobile-app-design-title'>Powerful Code</h1>
                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>
                </div>
                <div className='mobile-app-design-features-right-card'>
                    <AiOutlineFolderOpen className='mobile-app-design-icon'/>
                    <h1 className='mobile-app-design-title'>Documentation</h1>
                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
