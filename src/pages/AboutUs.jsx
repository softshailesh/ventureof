import React from "react";
import HeroSection from "../components/common_component/HeroSection";
import InvestorAbout from "../components/common_component/InvestorAbout";
import BuildLegacySection from '../components/common_component/BuildLegacySection'
import BlogSection from '../components/common_component/BlogSection'


const Aboutus = () => {
  return (
   <div className="w-full">
    <HeroSection />
    <InvestorAbout />
    <BuildLegacySection />
      <BlogSection />
   </div>
  );
};

export default Aboutus;
