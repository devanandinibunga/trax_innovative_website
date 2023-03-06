import React, { useState } from 'react';
import { Segmented } from 'antd';
import './PricingOffers.scss';
// import {FaCheck} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {AiOutlineCheck} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import {ImBookmark} from 'react-icons/im';


export const PricingOffers = () => {
  const [selected,setSelected]=useState("");
  const pricingOffersPlans=[
    {plan:"Basic",
    version:"The Standard Version",
    priceperYear:"$89.55",
    priceperMonth:"$9.95",
    percentage:"-60%",
    services:[{status:"true",name:"Support form"},{status:"true",name:"Free hosting"},{status:"false",name:"40MB of storage space"},{status:"false",name:"Social media integration"},{status:"false",name:"10GB of storage space"}]
   },
   {plan:"Popular",
   version:"The Standard Version",
   priceperYear:"$179.55",
   priceperMonth:"$19.95",
   percentage:"-40%",
   services:[{status:"true",name:"Support form"},{status:"true",name:"Free hosting"},{status:"true",name:"40MB of storage space"},{status:"false",name:"Social media integration"},{status:"false",name:"10GB of storage space"}]
  },
  {plan:"Enterprise",
  version:"The Standard Version",
  priceperYear:"$269.55",
  priceperMonth:"$29.95",
  percentage:"-30%",
  services:[{status:"true",name:"Support form"},{status:"true",name:"Free hosting"},{status:"true",name:"40MB of storage space"},{status:"true",name:"Social media integration"},{status:"false",name:"10GB of storage space"}]
 },
  ]

  return (
    <div className='pricing-offers-container'>
        <p className='pricing-offers-para'>Quisque tellus risus, adipisci</p>
        <h1 className='pricing-offers-title'>Pricing Offers</h1>
        <Segmented className="pricing-offers-segmented-btn" block options={["Monthly","Yearly"]} onChange={(value) => setSelected(value)}/>
        <motion.div className='pricing-offers-plan-container' initial={{ opacity: 0, y: '30px' }} animate={{ opacity: 1,y:'-5px'}} transition={{ duration: 1 }}>
        {pricingOffersPlans.map((eachPlan)=>
        <div className='pricing-offers-each-plan-container'>
          <div className='pricing-offers-bookmark-icon-container'>
            <ImBookmark className='pricing-offers-bookmark-icon'/>
            <div className='pricing-offers-percentage'>{eachPlan.percentage}</div>
            <div className='pricing-offers-sale'>Sale</div>
          </div>
          <p className='pricing-offers-each-pin-title'>{eachPlan.plan}</p>
          <p className='pricing-offers-each-pin-para'>{eachPlan.version}</p>
          <hr/>
          {selected==="Yearly"? <p><span className='pricing-offers-price'>{eachPlan.priceperYear}</span>/year</p>:<p><span className='pricing-offers-price'>{eachPlan.priceperMonth}</span>/month</p>}
          <hr/>
          <ul className='each-plan-list-container'>
            {eachPlan.services.map((service)=>
            <li>{service.status=== "true" ?<AiOutlineCheck className='icon-green'/>:<RxCross1 className='icon-red'/>} {service.name}</li>
            )}
          </ul>
        <button className='pricing-offers-btn'>Choose Plan</button>
        </div>
        )}
        </motion.div>
    </div>
  )
}
