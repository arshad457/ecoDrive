import React from 'react'
import HomeHeroSection from '../components/home/HomeHeroSection'
// import EnginesShowcase from '../components/home/EnginesShowcase'
import CustomerReviews from '../components/home/CustomerReviews'
import NewArrivalEngines from '../components/home/NewArrivalEngines'
import ServicePaymentBanners from '../components/home/ServicePaymentBanners'
import EngineShowcase from '../components/home/EngineShowcase'
import WhyChooseSection from '../components/home/WhyChooseSection'
import CarBrandsSection from '../components/home/CarBrandsSection'
import FooterSection from '../components/home/FooterSection'

const Home = () => {
  return (
  <>
    <HomeHeroSection />
    {/* <EnginesShowcase /> */}
    <CustomerReviews />
    <NewArrivalEngines />
    <ServicePaymentBanners />
    <EngineShowcase />
    <WhyChooseSection />
    <CarBrandsSection />
    {/* <FooterSection /> */}
  </>
  )
}

export default Home