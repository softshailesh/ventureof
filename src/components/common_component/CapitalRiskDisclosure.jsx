import React from 'react'

const CapitalRiskDisclosure = () => {
  return (
    <section className=" container pt-6 pb-10 px-4">
     <div className="mt-6 bg-[#42b87c] opacity-80 rounded-[100px] py-10 px-6 sm:px-12 md:px-20 text-white text-center shadow-inner">
          <h2 className="text-lg sm:text-xl md:text-4xl font-semibold mb-4 leading-snug">
            Risk Disclosure
          </h2>

          <p className="text-xs sm:text-sm md:text-base max-w-[850px] mx-auto leading-relaxed opacity-95">
           Venture investments involve risk, including potential loss of capital, limited liquidity, and market volatility. Past performance does not guarantee future results. Investors should assess suitability and seek independent advice.
          </p>
        </div>
    </section>
  )
}

export default CapitalRiskDisclosure
