import React from "react";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.webp";

const BlogSection = () => {
    return (
        <section className="w-full bg-[#E6EFEE] py-16 px-6 md:px-16 lg:px-28">

            {/* Heading */}
            <h2 className="text-center text-[48px] font-semibold text-[#1C2A25] mb-12">
                Blogs
            </h2>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">

                {/* ========== BLOG CARD 1 ========== */}
                <div className="w-full">

                    {/* Image */}
                    <img
                        src={blog1}
                        alt="Blog Image"
                        className="
              w-full 
              max-w-[637px] 
              h-auto 
              md:h-[358px] 
              object-cover 
              rounded-md
            "
                    />

                    {/* Date + Time */}
                    <div className="flex gap-8 text-[16px] text-[#FBB91D] mt-3">
                        <span>November 21, 2024</span>
                        <span>6:00 AM</span>
                    </div>

                    {/* Title */}
                    <h3
                        className="
              text-[28px] 
              md:text-[34px] 
              lg:text-[38px] 
              font-semibold 
              text-[#1C2A25] 
              mt-2 
              leading-[100%] 
              max-w-full 
              lg:w-[560px]
            "
                    >
                        Finding Passion in Solving Real <br /> Problems
                    </h3>

                    {/* Description */}
                    <p className="text-black text-[16px] font-medium leading-relaxed mt-5 max-w-md">
                        Lorem ipsum is simply free text dolor sit amet, consect et dolore magna aliqua lonm andhn. Lorem ipsum is si text dolor sit amet, consectetur no tted adipisicing elit a et dolore magna aliqua lonm andhn. Lorem ipsum is simply free text dolor sit amet, consect et dolore magna aliqua lonm andhn. Lorem ipsum is si text dolor sit amet, consectetur no tted adipisicing elit a et dolore magna aliqua lonm andhn. More
                    </p>

                </div>

                {/* ========== BLOG CARD 2 ========== */}
                <div className="w-full">

                    {/* Image */}
                    <img
                        src={blog2}
                        alt="Blog Image"
                        className="
              w-full 
              max-w-[637px] 
              h-auto 
              md:h-[358px] 
              object-cover 
              rounded-md
            "
                    />

                    {/* Date + Time */}
                    <div className="flex gap-8 text-[16px] text-[#FBB91D] mt-3">
                        <span>November 21, 2024</span>
                        <span>6:00 AM</span>
                    </div>

                    {/* Title */}
                    <h3
                        className="
              text-[28px] 
              md:text-[34px] 
              lg:text-[40px] 
              font-semibold 
              text-[#1C2A25] 
              mt-2 
              leading-[100%] 
              lg:w-[621px]   
            "
                    >
                        Building a Strong Foundation: <br /> Passion, Teamwork, Process
                    </h3>

                    {/* Description */}
                    <p className="text-[#44554C] text-[16px] font-medium leading-relaxed mt-5 ">
                        Lorem ipsum is simply free text dolor sit amet, consect et dolore magna aliqua lonm andhn. Lorem ipsum is si text dolor sit amet, consectetur no tted adipisicing elit a et dolore magna aliqua lonm andhn. Lorem ipsum is simply free text dolor sit amet, consect et dolore magna aliqua lonm andhn. Lorem ipsum is si text dolor sit amet, consectetur no tted adipisicing elit a et dolore magna aliqua lonm andhn. More
                    </p>

                </div>

            </div>
        </section>
    );
};

export default BlogSection;
