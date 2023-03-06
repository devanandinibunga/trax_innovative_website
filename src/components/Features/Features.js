import React, { useRef } from 'react';
import './Features.scss';
import {  motion } from 'framer-motion';
// import { useInView } from "react-intersection-observer";

export const Features = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  const scrollRef = useRef(null);

  return (
    <div className='features-container' id="features" ref={scrollRef}>
        <motion.div  className='features-details-container' initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }} >
            <h1 className='features-details-title'>Lets take your Business to Next Level</h1>
            <p className='features-details-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit ultrices maximus.</p>
            <button className='features-details-button'>Learn More</button>
        </motion.div>
        <motion.div className='features-image-container' initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}>
            <img className='features-image' src="https://trax.acrothemes.com/bootstrap-v5/images/awesome-feature.png" alt="feature-avatar"/>
        </motion.div>
    </div>
  )
}
