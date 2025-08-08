import React from 'react'
import Herosection from './Herosection'
import StatsSection from './StatsSection'
import Typing from './Typing'
import Downloadapp from './Downloadapp'
import FeaturesSection from './FeaturesSection'
import Benefits from './Benefits'
import TeamSection from './TeamSection'
import VideoSection from './VideoSection'
import PricingPlan from './PricingPlan'
import AppScreenshots from './AppScreenshots'
import GetInTouch from './Getintouch'
import BlogPosts from './BlogPosts'
import Footer from './Footer'



const page = () => {
  return (
    <div>
      <Herosection />
      <StatsSection />
      <Typing />
      <Downloadapp />
      <FeaturesSection />
      <Benefits />
      <TeamSection />
      <VideoSection />
      <PricingPlan />
      <AppScreenshots />
      <BlogPosts />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default page

   