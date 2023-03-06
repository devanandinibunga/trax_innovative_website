import React from 'react'
import { CoverPage } from '../CoverPage/CoverPage'
import { EnvatoScroll } from '../EnvatoScroll/EnvatoScroll'
import { Features } from '../Features/Features'
import { MobileAppDesign } from '../MobileAppDesign/MobileAppDesign'
import { OurExperts } from '../OurExperts/OurExperts'
import { PeoplesSay } from '../PeoplesSay/PeoplesSay'
import { PricingOffers } from '../PricingOffers/PricingOffers'
import { Subscribe } from '../Subscribe/Subscribe'
import { TraxCounter } from '../TraxCounter/TraxCounter'
import { WorkProcess } from '../WorkProcess/WorkProcess'

export const Body = () => {
  return (
    <>
      <CoverPage/>
      <Features/>
      <WorkProcess/>
      <MobileAppDesign/>
      <TraxCounter/>
      <OurExperts/>
      <PricingOffers/>
      <EnvatoScroll/>
      <PeoplesSay/>
      <Subscribe/>  
    </>
  )
}

