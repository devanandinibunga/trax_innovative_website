import React from 'react';
import './OurExperts.scss';
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';


export const OurExperts = () => {

    const ourExpertsBio=[
        {
            image:"	https://trax.acrothemes.com/bootstrap-v5/images/team-1.jpg",
            name:"Jessica Twain",
            occupation:"Agency Owner",
        },
        {
            image:"	https://trax.acrothemes.com/bootstrap-v5/images/team-2.jpg",
            name:"Jason Wudex",
            occupation:"Designer",
        },  {
            image:"	https://trax.acrothemes.com/bootstrap-v5/images/team-3.jpg",
            name:"Jessica Twain",
            occupation:"Agency Owner",
        },  {
            image:"	https://trax.acrothemes.com/bootstrap-v5/images/team-4.jpg",
            name:"Hayden Wood",
            occupation:"Marketing",
        }
    ]

  return (
    <div className='our-experts-main-container'>
        <div className='our-experts-container'>
            <div className='our-experts-details-container'>
                <div className='our-experts-details-left-container'>
                    <p className='our-experts-details-left-con-caption'>Quisque tellus risus, adipisci viverra</p>
                    <h1 className='our-experts-details-left-con-title'>Meet Our Experts</h1>
                </div>
                <div className='our-experts-details-right-container'>
                    <p className='our-experts-details-right-con-caption'>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.</p>
                </div>
            </div>
            <div className='our-experts-bio-container'>
                {ourExpertsBio.map((eachBio)=>
                <div className='our-experts-each-bio-container'>
                    <div className='each-bio-image-con'>
                        <img className='each-bio-image' src={eachBio.image} alt="our-experts-bio-pics"/>
                    </div>
                    <div className='our-experts-each-bio-bottom-container'>
                        <h2 className='each-bio-name'>{eachBio.name}</h2>
                        <p>{eachBio.occupation}</p>
                    </div>
                    <div className='our-experts-icon-container-overlay'>
                        {/* <div>
                            <h2 className='each-bio-name'>{eachBio.name}</h2>
                            <p>{eachBio.occupation}</p>
                    </div> */}
                        <FaFacebookF className='our-experts-facebook-icon'/>
                        <FaTwitter className='our-experts-twitter-icon'/>
                        <FaInstagram className='our-experts-instagram-icon'/>
                    </div>
                </div>
                )}
                
            </div>
        </div>
    </div>
  )
}
