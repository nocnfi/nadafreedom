import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import hook

const NewsSection = () => {
    const { t, i18n } = useTranslation(); // 2. Inisialisasi hook
    const [newsUpdates, setNewsUpdates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/news', {
            headers: { 'Accept': 'application/json' }
        })
        .then(res => res.json())
        .then(result => {
            if (result.data) {
                setNewsUpdates(result.data.slice(0, 3));
            }
            setLoading(false);
        })
        .catch(err => {
            console.error("Error fetching news section:", err);
            setLoading(false);
        });
    }, []);

    // 3. Helper format tanggal mengikuti bahasa aktif
    const formatDate = (dateString) => {
        const currentLang = i18n.language === 'EN' ? 'en-US' : 'id-ID';
        const options = { month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(currentLang, options).toUpperCase();
    };

    if (loading) return null;

    return (
        <section className="w-full py-24 bg-white font-['Poppins']">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* --- LEFT COLUMN --- */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-between relative">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-[#4F26E9] mb-8 leading-tight tracking-tight">
                                {t('news_section.title')} {/* 4. Gunakan t() */}
                            </h2>
                            <p className="text-gray-600 mb-12 text-base leading-relaxed">
                                {t('news_section.description')} {/* 4. Gunakan t() */}
                            </p>
                        </div>

                        {/* Button "View All News" */}
                        <div className="relative w-fit group cursor-pointer mt-4 lg:mt-0 flex items-center justify-center p-8 isolate">
                            <img 
                                src="/images/blob.svg" 
                                alt="" 
                                className="absolute top-1/2 left-1/2 -translate-x-[65%] -translate-y-1/2 w-56 h-56 -z-10 opacity-100 group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                            />
                            
                            <Link to="/news" className="relative z-10 text-2xl font-bold text-[#4F46E5] group-hover:text-[#4338ca] transition-colors whitespace-nowrap">
                                {t('news_section.view_all')} {/* 4. Gunakan t() */}
                            </Link>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN (DYNAMIC DATA) --- */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6">
                        {newsUpdates.map((item) => (
                            <Link 
                                to={`/news/${item.slug}`} 
                                key={item.id} 
                                className="bg-[#E5E5E5] rounded-[2.5rem] p-8 md:p-10 flex items-center justify-between gap-6 hover:shadow-lg transition-all duration-300 group cursor-pointer block"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[#6D28D9] font-extrabold tracking-wider uppercase text-sm">
                                            {item.category}
                                        </span>
                                        <span className="text-gray-900 font-bold text-sm tracking-wide">
                                            {formatDate(item.created_at || item.date)} 
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-[#1A237E] font-bold text-lg mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl line-clamp-2">
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
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsSection;