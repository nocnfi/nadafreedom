import React, { useState } from 'react';

const BusinessSolutions = () => {
    const defaultImage = "https://img.freepik.com/free-vector/hand-drawn-business-deal-concept_23-2148102379.jpg?w=996";
    const [activeImage, setActiveImage] = useState(defaultImage);

    // DATA SOLUTIONS
    // Cukup ganti string di dalam "iconSrc" dengan path gambar icon Anda
    const solutions = [
        {
            id: 1,
            title: "Small Business",
            desc: "Maximize your business potential with affordable yet stable broadband internet.",
            imageUrl: "https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148896826.jpg?w=996",
            // 👇 Masukkan path icon gambar Anda di sini
            iconSrc: "/images/presentation.svg"
        },
        {
            id: 2,
            title: "Corporate Solutions",
            desc: "Dedicated Internet (1:1) service with guaranteed high SLA.",
            imageUrl: "https://img.freepik.com/free-vector/flat-saas-concept-illustration_23-2149230533.jpg?w=996",
            // 👇 Masukkan path icon gambar Anda di sini
            iconSrc: "/images/corporate.svg"
        },
        {
            id: 3,
            title: "Public Sector",
            desc: "Supporting digitalization of schools and government agencies.",
            imageUrl: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-3662.jpg?w=996",
            // 👇 Masukkan path icon gambar Anda di sini
            iconSrc: "/images/observatory.svg"
        },
        {
            id: 4,
            title: "Industry Partnership",
            desc: "Custom network solutions for hospitality and manufacturing.",
            imageUrl: "https://img.freepik.com/free-vector/industry-concept-illustration_114360-3308.jpg?w=996",
            // 👇 Masukkan path icon gambar Anda di sini
            iconSrc: "/images/innovation.svg"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#5D2E8C] mb-2 italic">
                        Solutions for every kind of business
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Learn more about how NFI helps leaders in your sector.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* KIRI: Ilustrasi Dinamis */}
                    <div className="w-full lg:w-1/2 flex justify-center h-[400px] items-center relative overflow-hidden rounded-2xl bg-white shadow-inner">
                        <img 
                            key={activeImage}
                            src={activeImage} 
                            alt="Business Illustration" 
                            className="w-full h-full object-contain hover:scale-105 transition-all duration-500 ease-in-out animate-fade-in mix-blend-multiply" 
                        />
                    </div>

                    {/* KANAN: List dengan Image Icon */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {solutions.map((item) => (
                            <div 
                                key={item.id} 
                                onMouseEnter={() => setActiveImage(item.imageUrl)}
                                className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md cursor-pointer transition-all duration-300 group"
                            >
                                {/* Icon Container */}
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                                    {/* 👇 ICON MENGGUNAKAN IMG SRC */}
                                    <img 
                                        src={item.iconSrc} 
                                        alt={item.title} 
                                        // Class 'brightness-0 invert' membuat icon jadi putih saat hover. 
                                        // Hapus class ini jika icon Anda berwarna-warni.
                                        className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-800 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;