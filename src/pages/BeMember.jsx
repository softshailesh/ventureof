import React from 'react'
import VentureMemberHeroSection from '../components/common_component/VentureMember'
import ProtectLegacy from '../components/common_component/ProtectLegacy'
import MembershipSection from '../components/common_component/MembershipSection'
import InvestorInfoSection from '../components/common_component/InvestorInfoSection'
import JoinInvestorSection from '../components/common_component/JoinInvestorSection'

const BeMember = () => {
  return (
    <div>
      <VentureMemberHeroSection /> 
      <ProtectLegacy />
      <MembershipSection />
      <InvestorInfoSection />
      <JoinInvestorSection />
    </div>
  )
}

export default BeMember
