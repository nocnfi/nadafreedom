import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const NewsFilter = ({ activeCategory, setActiveCategory, categories, searchQuery, setSearchQuery }) => {
    // State lokal untuk menampung ketikan sementara
    const [localSearch, setLocalSearch] = useState(searchQuery);

    // Sinkronisasi jika parent mereset search query
    useEffect(() => {
        setLocalSearch(searchQuery);
    }, [searchQuery]);

    // Fungsi saat user menekan Enter atau icon Search
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(localSearch); // Baru kirim ke Parent di sini
    };

    return (
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
                            onClick={() => {
                                setActiveCategory(cat);
                                setSearchQuery(''); // Reset search saat ganti kategori
                                setLocalSearch('');
                            }}
                            className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                                activeCategory === cat ? 'text-[#1A237E] border-b-2 border-[#1A237E]' : 'text-gray-400 hover:text-[#1A237E]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search Form */}
                <form onSubmit={handleSearchSubmit} className="relative w-full md:w-64">
                    <input 
                        type="text" 
                        placeholder="SEARCH" 
                        value={localSearch} 
                        onChange={(e) => setLocalSearch(e.target.value)} 
                        className="w-full py-2 pl-2 pr-8 text-sm font-bold text-[#1A237E] placeholder-[#1A237E]/50 bg-transparent border-b-2 border-blue-200 focus:border-[#1A237E] focus:outline-none transition-colors uppercase"
                    />
                    <button type="submit" className="absolute right-0 top-2">
                        <Search className="w-5 h-5 text-[#1A237E] hover:text-blue-600 transition-colors" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsFilter;