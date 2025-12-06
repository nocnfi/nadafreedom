import React from 'react';

const NewsSection = () => {
    const newsUpdates = [
        {
            id: 1,
            category: "CATEGORY",
            date: "JUNE 2025",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            id: 2,
            category: "CATEGORY",
            date: "JUNE 2025",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
            id: 3,
            category: "CATEGORY",
            date: "JUNE 2025",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
    ];

    return (
        <section className="w-full py-24 bg-white font-['Poppins']">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* --- LEFT COLUMN --- */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-between relative">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-[#4F26E9] mb-8 leading-tight tracking-tight">
                                Latest News and Updates.
                            </h2>
                            <p className="text-gray-600 mb-12 text-base leading-relaxed">
                                Stay connected with the latest information. Get updates on our network 
                                expansion, exclusive promotions for loyal customers, 
                                tips and tricks for maximizing your fiber connection at home.
                            </p>
                        </div>

                        {/* Button "View All News" */}
                        <div className="relative w-fit group cursor-pointer mt-4 lg:mt-0 flex items-center justify-center p-8 isolate">
                            
                            {/* 1. GAMBAR BLOB (Background) */}
                            <img 
                                src="/images/blob.svg" 
                                alt="" 
                                // PERUBAHAN DI SINI:
                                // Saya mengganti '-translate-x-1/2' menjadi '-translate-x-[65%]'
                                // Semakin besar angkanya, semakin geser ke kiri.
                                // Coba sesuaikan angkanya (misal 60%, 70%) jika kurang pas.
                                className="absolute top-1/2 left-1/2 -translate-x-[65%] -translate-y-1/2 w-56 h-56 -z-10 opacity-100 group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                            />
                            
                            {/* 2. TEXT BUTTON */}
                            <a href="#" className="relative z-10 text-2xl font-bold text-[#4F46E5] group-hover:text-[#4338ca] transition-colors whitespace-nowrap">
                                View All News
                            </a>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN --- */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6">
                        {newsUpdates.map((item) => (
                            <div 
                                key={item.id} 
                                className="bg-[#E5E5E5] rounded-[2.5rem] p-8 md:p-10 flex items-center justify-between gap-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[#6D28D9] font-extrabold tracking-wider uppercase text-sm">
                                            {item.category}
                                        </span>
                                        <span className="text-gray-900 font-bold text-sm tracking-wide">
                                            {item.date}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                        {item.excerpt}
                                    </p>
                                </div>
                                
                                <div className="flex-shrink-0 transform group-hover:translate-x-2 transition-transform duration-300">
                                    <img 
                                        src="/icons/link.svg" 
                                        alt="Arrow" 
                                        className="w-10 h-10"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsSection;