import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaCalendarAlt, FaCommentDots } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        image: "https://picsum.photos/600/350?random=11",
        title: "The Future Of Investing: Sustainable Investing Unwrapped",
        desc: "In this episode of Angels Exits and Acquisitions host Heff Barnes sits with Brain Fitzpatrick.....",
        date: "January 9, 2025",
        comments: "No Comment",
    },
    {
        id: 2,
        image: "https://picsum.photos/600/350?random=12",
        title: "From Startup To Exit: The Playbook For Creating a Business That Sells",
        desc: "Heff Barnes interviews Brain Fitzpatrick about business exits.....",
        date: "January 9, 2025",
        comments: "No Comment",
    },
    {
        id: 3,
        image: "https://picsum.photos/600/350?random=13",
        title: "Don't Let Taxes Eat Your Profits",
        desc: "Baby boomers predicted to sell ₹200 trillion worth of business.....",
        date: "January 9, 2025",
        comments: "No Comment",
    },
    {
        id: 4,
        image: "https://picsum.photos/600/350?random=14",
        title: "Why Most Founders Fail During Due Diligence",
        desc: "How to prepare for investors and avoid common mistakes.....",
        date: "January 8, 2025",
        comments: "5 Comments",
    },
    {
        id: 5,
        image: "https://picsum.photos/600/350?random=15",
        title: "How to Improve Your Business Valuation",
        desc: "Strategies to increase your business worth before selling.....",
        date: "January 6, 2025",
        comments: "3 Comments",
    },
];

const RecentBlogs = () => {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

    const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

    return (
        <section className="w-full bg-[#eaf3f2] py-20 ">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0e3b32] mb-12">
                    Recent Blogs
                </h2>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
                        >
                            {/* Image */}
                            <img
                                src={blog.image}
                                alt="Blog"
                                className="w-full h-52 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6 flex flex-col justify-between flex-grow">

                                <h3 className="text-xl font-semibold text-[#0e3b32] leading-snug line-clamp-1">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 text-sm line-clamp-2 mt-2">
                                    {blog.desc}
                                </p>

                                {/* Read More Button */}
                                <button className="bg-[#74c21f] text-white px-5 py-2 rounded-md shadow hover:scale-105 transition mt-4 w-fit">
                                    Read More
                                </button>
                            </div>

                            {/* Footer Meta */}
                            <div className="border-t px-6 py-4 flex justify-between items-center text-gray-600 text-sm">
                                <span className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-[#0e3b32]" />
                                    {blog.date}
                                </span>

                                <span className="flex items-center gap-2">
                                    <FaCommentDots className="text-[#0e3b32]" />
                                    {blog.comments}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {/* Pagination */}
                <div className="flex justify-center gap-4 mt-10">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition 
      ${currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
                    >
                        <FaChevronLeft className="text-gray-800" />
                    </button>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 flex items-center justify-center rounded-full shadow transition 
      ${currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
                    >
                        <FaChevronRight className="text-gray-800" />
                    </button>
                </div>

               


            </div>
        </section>
    );
};

export default RecentBlogs;
