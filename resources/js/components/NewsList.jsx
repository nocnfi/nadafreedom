import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

const NewsList = ({ activeCategory, searchQuery }) => {
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    // --- 1. FITUR IKLAN POPUP ---
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/popup/random')
            .then(res => res.json())
            .then(result => {
                if (result.data && result.data.image_url) {
                    
                    Swal.fire({
                        imageUrl: result.data.image_url,
                        imageAlt: result.data.title,
                        
                        width: 500,
                        padding: 0,
                        background: 'transparent',
                        
                        backdrop: `
                            rgba(0,0,0,0.8)
                            backdrop-filter: blur(5px)
                        `,
                        
                        showConfirmButton: false, 
                        showCloseButton: true,
                        
                        customClass: {
                            // Gambar bersih tanpa shadow
                            image: 'rounded-2xl max-h-[70vh] object-contain w-full',
                            
                            // --- PERBAIKAN TOMBOL SILANG (HAPUS BORDER BIRU) ---
                            // !outline-none & !shadow-none : Menghilangkan garis biru saat diklik
                            // !border-0 : Menghilangkan border fisik
                            closeButton: `
                                !text-white 
                                !bg-transparent 
                                !border-0 
                                !shadow-none 
                                !outline-none 
                                focus:!outline-none 
                                focus:!shadow-none 
                                active:!outline-none
                                hover:!text-gray-300 
                                !text-3xl 
                                !font-thin 
                                absolute 
                                !top-2 
                                !right-3 
                                transition-all
                            `,
                            
                            popup: 'overflow-visible rounded-2xl bg-transparent'
                        },

                        // Z-index agar di atas Navbar
                        didOpen: (popup) => {
                            popup.style.zIndex = '99999';
                            if (popup.parentElement) {
                                popup.parentElement.style.zIndex = '99999';
                            }
                        }
                    });
                }
            })
            .catch(err => console.error("Gagal memuat iklan:", err));

    }, []);


    // --- 2. LOGIKA LIST BERITA ---
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchQuery]);

    useEffect(() => {
        setLoading(true);
        let url = `http://127.0.0.1:8000/api/news?page=${currentPage}`;
        if (activeCategory && activeCategory !== 'All') url += `&category=${encodeURIComponent(activeCategory)}`;
        if (searchQuery) url += `&search=${encodeURIComponent(searchQuery)}`;

        fetch(url, { headers: { 'Accept': 'application/json' } })
            .then(res => res.json())
            .then(result => {
                if (result.data) {
                    setNews(result.data); 
                    setCurrentPage(result.current_page);
                    setLastPage(result.last_page);
                }
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
        return <div className="text-center py-20 text-gray-500 font-bold">{t('news.no_news')}</div>;
    }

    return (
        <div className="container mx-auto px-4 max-w-5xl mb-24">
            <div className="flex flex-col gap-8">
                {news.map((item) => {
                    const imageUrl = item.image 
                    ? (item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000/storage/${item.image}`)
                    : 'https://via.placeholder.com/400x300?text=No+Image';

                    const displayTitle = i18n.language === 'EN' && item.title_en ? item.title_en : item.title;
                    const displayExcerpt = i18n.language === 'EN' && item.excerpt_en ? item.excerpt_en : item.excerpt;

                    return (
                        <Link to={`/news/${item.slug}`} key={item.id} className="block">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group cursor-pointer bg-white p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="w-full md:w-48 h-48 md:h-32 flex-shrink-0 bg-gray-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                                    <img src={imageUrl} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all transform group-hover:scale-105 duration-500" alt={displayTitle} />
                                </div>
                                <div className="flex-1 pt-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h4 className="text-[#1A237E] text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                        {displayTitle}
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
                                        {displayExcerpt}
                                    </p>
                                    <p className="text-gray-400 text-xs font-medium flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"></path></svg>
                                        {item.date || item.created_at?.substring(0,10)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {lastPage > 1 && (
                <div className="flex justify-center items-center mt-16 gap-2 text-xs font-bold text-gray-400">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="hover:text-[#1A237E] px-2 disabled:opacity-30"
                    >
                        {t('news.prev')}
                    </button>
                    {Array.from({ length: lastPage }, (_, i) => i + 1).map(page => (
                        <button 
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                                currentPage === page ? 'bg-[#1A237E] text-white shadow-lg shadow-blue-900/20' : 'hover:text-[#1A237E] hover:bg-gray-100'
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
                        {t('news.next')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsList;