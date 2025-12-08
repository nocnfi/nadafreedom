import React, { useState } from 'react';
import { Search } from 'lucide-react';

// --- IMPORT KOMPONEN ---
import Navbar from '../components/navbar'; 
import Footer from '../components/Footer';
import NewsTrending from '../components/News-Trending'; // <--- Import Component Baru

const NewsPage = () => {
    const [activeCategory, setActiveCategory] = useState('Teknologi');
    const categories = ['Teknologi', 'Bisnis', 'Layanan', 'Regulasi & Kebijakan'];

    // Data Dummy List Berita (Tetap di sini atau bisa dipisah ke komponen lain nanti)
    const articles = [
        { id: 1, title: "Lorem ipsum dolor sit amet", date: "June 12, 2025", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, title: "Consectetur adipiscing elit", date: "June 10, 2025", excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 3, title: "Sed do eiusmod tempor", date: "June 08, 2025", excerpt: "Incididunt ut labore et dolore magna aliqua." },
        { id: 4, title: "Incididunt ut labore et dolore", date: "June 05, 2025", excerpt: "Magna aliqua. Quis ipsum suspendisse ultrices gravida." },
        { id: 5, title: "Quis ipsum suspendisse", date: "June 01, 2025", excerpt: "Ultrices gravida. Risus commodo viverra maecenas accumsan." },
    ];

    return (
        <div className="w-full bg-white min-h-screen font-['Poppins'] flex flex-col">
            
            <Navbar />

            <main className="flex-grow pb-20">
                
                {/* 1. SECTION: NEWS TRENDING (CAROUSEL) */}
                {/* Kode panjang tadi diganti jadi satu baris ini */}
                <NewsTrending />

                {/* 2. SECTION: FILTER & SEARCH */}
                <div className="container mx-auto px-4 mt-8 mb-12">
                    <div className="text-center mb-8">
                        <h3 className="text-[#1A237E] font-bold text-xl md:text-2xl uppercase tracking-wide">
                            LATEST NEWS & ARTICLES
                        </h3>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-4 gap-6">
                        {/* Kategori */}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                            {categories.map((cat) => (
                                <button 
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                                        activeCategory === cat ? 'text-[#1A237E]' : 'text-gray-400 hover:text-[#1A237E]'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-64">
                            <input 
                                type="text" 
                                placeholder="SEARCH" 
                                className="w-full py-2 pl-2 pr-8 text-sm font-bold text-[#1A237E] placeholder-[#1A237E] bg-transparent border-b-2 border-blue-200 focus:border-[#1A237E] focus:outline-none transition-colors uppercase"
                            />
                            <Search className="absolute right-0 top-2 w-5 h-5 text-[#1A237E]" />
                        </div>
                    </div>
                </div>

                {/* 3. SECTION: LIST BERITA */}
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col gap-8">
                        {articles.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group cursor-pointer">
                                {/* Gambar Placeholder Merah */}
                                <div className="w-full md:w-48 h-32 flex-shrink-0 bg-[#C23B58] rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                                    <img 
                                        src={`https://source.unsplash.com/random/400x300?sig=${item.id}`} 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all" 
                                        alt=""
                                    />
                                </div>
                                {/* Teks */}
                                <div className="flex-1 pt-2">
                                    <h4 className="text-[#1A237E] text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <p className="text-gray-400 text-xs mt-3 font-medium">
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-16 gap-2 text-xs font-bold text-gray-400">
                        <button className="hover:text-[#1A237E] px-2">&lt;</button>
                        <button className="w-6 h-6 flex items-center justify-center bg-[#4A90E2] text-white rounded hover:bg-[#1A237E] transition-colors">1</button>
                        <button className="w-6 h-6 flex items-center justify-center hover:text-[#1A237E] hover:bg-gray-100 rounded transition-colors">2</button>
                        <button className="hover:text-[#1A237E] px-2">&gt;</button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default NewsPage;