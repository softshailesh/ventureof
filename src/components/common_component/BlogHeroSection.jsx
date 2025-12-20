import React from 'react'
import { motion } from "framer-motion";
import venture_member_bg from "../../assets/blog_member.webp"; 

const BlogHeroSection = () => {
  return (
    <div
      className="w-full h-[350px] sm:h-[420px] md:h-[480px] lg:h-[564px] 
                 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${venture_member_bg})` }}
    >

      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-[#FCB711]/40 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-white">

        {/* Welcome (with side lines) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="w-10 sm:w-36 h-[1px] bg-white/70"></span>
          <span className="text-sm sm:text-[22px] font-medium tracking-wide">
            Welcome
          </span>
          <span className="w-10 sm:w-36 h-[1px] bg-white/70"></span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-inter font-semibold 
          text-[24px] sm:text-[32px] md:text-[42px] lg:text-[50px] 
          leading-[110%] text-center max-w-[850px]"
        >
         Our Blog
        </motion.h1>

      

       

        

      </div>

    </div>
  )
}

export default BlogHeroSection