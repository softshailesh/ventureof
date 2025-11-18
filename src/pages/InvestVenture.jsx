import React from "react";
import InvestHeroSection from "../components/common_component/InvestHeroSection";
import InvestorNetwork from "../components/common_component/InvestorNetwork";
import InvestorSection from "../components/common_component/InvestorSection";
import InvestmentOpportunities from "../components/common_component/InvestmentOpportunities";
import InvestorHero from "../components/common_component/InvestorHero";
import InvestorsSection from "../components/common_component/InvestorsSection";

const InvestVenture = () => {
  return (
    <div className="w-full">
      <InvestHeroSection />
      <InvestorNetwork />
      <InvestorSection />
      <InvestmentOpportunities />
      <InvestorsSection />
      <InvestorHero />
    </div>
  );
};

export default InvestVenture;
