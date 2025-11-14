import React from 'react'
import InvestHeroSection from '../components/common_component/InvestHeroSection'
import InvestorNetwork from '../components/common_component/InvestorNetwork'
import InvestorSection from '../components/common_component/InvestorSection'
import InvestmentOpportunities from '../components/common_component/InvestmentOpportunities'

const InvestVenture = () => {
  return (
    <div className="w-full">
      <InvestHeroSection />
      <InvestorNetwork />
      <InvestorSection />
      <InvestmentOpportunities />
    </div>
  )
}

export default InvestVenture
