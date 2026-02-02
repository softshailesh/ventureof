import React, { useState } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import playIcon from '../../assets/playIcon.svg';
// 10 Podcast Items
const podcasts = [
    {
        id: 1,
        image: "https://picsum.photos/600/350?random=1",
        date: "January 9, 2025",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 2,
        image: "https://picsum.photos/600/350?random=2",
        date: "January 7, 2025",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 3,
        image: "https://picsum.photos/600/350?random=3",
        date: "January 5, 2025",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 4,
        image: "https://picsum.photos/600/350?random=4",
        date: "January 3, 2025",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 5,
        image: "https://picsum.photos/600/350?random=5",
        date: "January 1, 2025",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 6,
        image: "https://picsum.photos/600/350?random=6",
        date: "December 29, 2024",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 7,
        image: "https://picsum.photos/600/350?random=7",
        date: "December 25, 2024",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 8,
        image: "https://picsum.photos/600/350?random=8",
        date: "December 20, 2024",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 9,
        image: "https://picsum.photos/600/350?random=9",
        date: "December 18, 2024",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
    {
        id: 10,
        image: "https://picsum.photos/600/350?random=10",
        date: "December 10, 2024",
        title: "28 Building your business for a profitable exit with Micgelle Seiler Tucker",
        desc: "Angels Exits & Acquisitions Product with Michelle Seiler Tucker About Michelle Seiler Trucker in this Week’s episode of the Angels...",
    },
];

const LatestPodcast = () => {
    const itemsPerPage = 3; // Show 3 cards per page (desktop)
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination Logic
    const totalPages = Math.ceil(podcasts.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedPodcasts = podcasts.slice(startIndex, startIndex + itemsPerPage);

    // Change Page
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <section className="w-full bg-[#E7EBE9] py-14">
            <div className="mx-auto px-6">

                {/* HEADING */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#0e3b32] mb-10">
                    Latest Podcast
                </h2>

                {/* PODCAST GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedPodcasts.map((podcast) => (
                        <div
                            key={podcast.id}
                            className="bg-white shadow-sm rounded-lg overflow-hidden"
                        >
                            {/* IMAGE */}
                            <img
                                src={podcast.image}
                                alt="Podcast"
                                className="w-full h-48 object-cover"
                            />

                            {/* CONTENT */}
                            <div className="p-5 space-y-3">
                                <p className="text-gray-500 text-sm">{podcast.date}</p>

                                <h3 className="text-xl font-semibold text-[#0e3b32]">
                                    {podcast.title}
                                </h3>

                                <p className="text-gray-600 text-sm">{podcast.desc}</p>

                                {/* PLAY BUTTON */}
                                <div className="flex justify-center items-center">
                                    <button className="mt-3 ">
                                        <img
                                            src={playIcon}
                                            alt="Play"
                                            className="w-10 h-10 rounded-full shadow hover:scale-105 transition flex items-center justify-center"
                                        />
                                    </button>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION BUTTONS */}
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

export default LatestPodcast;
