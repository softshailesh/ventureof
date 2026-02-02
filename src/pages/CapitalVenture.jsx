import React from "react";
import CapitalHeroSection from "../components/common_component/CapitalHeroSection";
import CapitalInfoSection from "../components/common_component/CapitalInfoSection";
import CapitalProcess from "../components/common_component/CapitalProcess";
import CapitalTwoSection from "../components/common_component/CapitalTwoSection";
import WhyRaisingCapital from "../components/common_component/WhyRaisingCapital";
import CapitalRiskDisclosure from "../components/common_component/CapitalRiskDisclosure";


const CapitalVenture = () => {
  return (
    <div>
      <CapitalHeroSection />
      <CapitalInfoSection />
      <WhyRaisingCapital/>
      <CapitalProcess />
      <CapitalTwoSection />
      <CapitalRiskDisclosure/>
    </div>
  );
};

export default CapitalVenture;
