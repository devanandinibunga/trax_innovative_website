import React, { useEffect, useState } from 'react';
import CountUp from "react-countup";
import './TraxCounter.scss';

export const TraxCounter = () => {
    
    const [yOffSet,setYoffSet]=useState(true);

    useEffect(() => {
         window.addEventListener(
           "scroll",
           () => {
            if (window.pageYOffset > 1550) {
             setYoffSet(true);
             console.log("working");
            } else {
             setYoffSet(false);
            }
           },
           []
          );
         });
        
  return (
    <div className='trax-counter-container'>
        <div className='trax-counter-left-container'>
            <h1 className="trax-counter-count">
            {yOffSet ? (
                <CountUp
                scrollInHeight={150}
                start={241}
                end={2010}
                duration={1.5}
                useEasing={true}
                useGrouping={true}
                // separator=" "
                // decimal=","
                />
            ) : null}
            
            </h1>
            <p className='trax-counter-caption'>Since We Started</p>
        </div>
        <div className='trax-counter-middle-container'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id interdum vitae, interdum eget elit.
        </div>
        <div className='trax-counter-right-container'>
        <h1 className="trax-counter-count">
          {yOffSet ? (
            <CountUp
              scrollInHeight={150}
              start={107}
              end={895}
              duration={1.5}
              useEasing={true}
              useGrouping={true}
              // separator=" "
              // decimal=","
            />
          ) : null}
          
        </h1>
        <p className='trax-counter-caption'>Since We Started</p>
        </div>
    </div>
  )
}
