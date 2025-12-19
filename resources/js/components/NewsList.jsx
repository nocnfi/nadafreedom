import React, { useEffect, useState } from 'react';

// Menerima kategori & search dari parent, bukan 'articles' langsung
const NewsList = ({ activeCategory, searchQuery }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // State untuk Pagination Laravel
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        // Reset ke halaman 1 jika kategori atau search berubah
        setCurrentPage(1);
    }, [activeCategory, searchQuery]);

    useEffect(() => {
        setLoading(true);
        
        // Bangun URL API dengan Parameter
        let url = `http://127.0.0.1:8000/api/news?page=${currentPage}`;
        
        if (activeCategory && activeCategory !== 'All') {
            url += `&category=${encodeURIComponent(activeCategory)}`;
        }
        
        if (searchQuery) {
            url += `&search=${encodeURIComponent(searchQuery)}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(result => {
                setNews(result.data); // Data artikel
                // Update info pagination
                setCurrentPage(result.current_page);
                setLastPage(result.last_page);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching news:", err);
                setLoading(false);
            });
    }, [activeCategory, searchQuery, currentPage]);


    if (loading) {
        return (
            <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-8">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-full h-32 bg-gray-100 animate-pulse rounded-xl"></div>
                ))}
            </div>
        );
    }

    if (news.length === 0) {
        return <div className="text-center py-20 text-gray-500 font-bold">NO NEWS FOUND.</div>;
    }

    return (
        <div className="container mx-auto px-4 max-w-5xl mb-24">
            <div className="flex flex-col gap-8">
                {news.map((item) => (
                    // Bungkus dengan Link/Anchor ke detail
                    <a href={`/news/${item.slug}`} key={item.id} className="block">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group cursor-pointer">
                            {/* Gambar */}
                            <div className="w-full md:w-48 h-32 flex-shrink-0 bg-gray-200 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                                <img 
                                    src={item.image || 'https://via.placeholder.com/400x300?text=No+Image'} 
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all transform group-hover:scale-110 duration-500" 
                                    alt={item.title}
                                />
                            </div>
                            {/* Teks */}
                            <div className="flex-1 pt-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-[#C23B58] uppercase tracking-wider">{item.category}</span>
                                </div>
                                <h4 className="text-[#1A237E] text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-2">
                                    {item.excerpt}
                                </p>
                                <p className="text-gray-400 text-xs mt-3 font-medium">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Pagination Logic */}
            {lastPage > 1 && (
                <div className="flex justify-center items-center mt-16 gap-2 text-xs font-bold text-gray-400">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="hover:text-[#1A237E] px-2 disabled:opacity-30"
                    >
                        &lt;
                    </button>
                    
                    {/* Render Page Numbers */}
                    {Array.from({ length: lastPage }, (_, i) => i + 1).map(page => (
                        <button 
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-6 h-6 flex items-center justify-center rounded transition-colors ${
                                currentPage === page 
                                    ? 'bg-[#4A90E2] text-white hover:bg-[#1A237E]' 
                                    : 'hover:text-[#1A237E] hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, lastPage))}
                        disabled={currentPage === lastPage}
                        className="hover:text-[#1A237E] px-2 disabled:opacity-30"
                    >
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsList;