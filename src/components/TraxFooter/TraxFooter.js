import React from 'react';
import './TraxFooter.scss';
import {GoDeviceMobile} from 'react-icons/go';
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram} from 'react-icons/fa';
import {AiFillCaretRight} from 'react-icons/ai';


export const TraxFooter = () => {
    const traxFooterServicesData=[
        "Home","About Us","Latest News","Business Planning","Contact Us","Faq's"
    ]

  return (
    <div className='trax-footer-container'>
        <div className='trax-footer-contact-container'>
            <img src='https://trax.acrothemes.com/bootstrap-v5/images/logo-transparent.png' alt='trax-logo'/>
            <p>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p>
            <div className='trax-footer-contact-icon-address-container'>
                <GoDeviceMobile className='trax-footer-icon'/>
                <div  className='trax-footer-contact-address-container'>
                    <p>	+01 - 123 - 4567</p>
                    <a href='/'>web@support.com</a>
                </div>
            </div>
            <div className='trax-footer-contact-icons-container'>
                <FaFacebookF className='trax-footer-contact-icons'/>
                <FaTwitter className='trax-footer-contact-icons'/>
                <FaLinkedinIn className='trax-footer-contact-icons'/>
                <FaInstagram className='trax-footer-contact-icons'/>
            </div>
        </div>
        <div className='trax-footer-latest-news-container'>
            <h1 className='trax-footer-latest-news-title'>Latest News</h1>
            <div className='trax-footer-latest-news'>
                <p>Aenean tristique justo et...</p>
                <p>15 March 2019</p>
            </div>
            <hr/>
            <div className='trax-footer-latest-news'>
                <p>Phasellus dapibus dictum augue...</p>
                <p>15 March 2019</p>
            </div>
            <hr/>
            <div className='trax-footer-latest-news'>
                <p>Mauris blandit vitae. Praesent non...</p>
                <p>15 March 2019</p>
            </div>
            <hr/>
        </div>
        <div className='trax-footer-services-container'>
            <h2 className='trax-footer-services-title'>Our Services</h2>
            {traxFooterServicesData.map((eachService)=>
            <div className='trax-footer-each-service-container'>
                <AiFillCaretRight/>
                {eachService}
            </div>
            )}
        </div>
        <div className='trax-footer-business-hours-container'>
             <h2>Business Hours</h2>
             <p>Our support available to help you 24 hours a day, seven days week</p>
             {/* <ul> */}
            <p className='trax-footer-timings'>Monday-Saturday:---- 8.00-18.00</p>
            <p>Friday:----------------- 09:00-21:00</p>
            <p>Sunday:---------------- 09:00-20:00</p>
            <p>Calendar Events:---- 24-Hour Shift</p>
             {/* </ul> */}
             
        </div>
    </div>
  )
}

