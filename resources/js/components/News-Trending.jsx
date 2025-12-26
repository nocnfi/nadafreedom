import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const NewsTrending = () => {
    const { t, i18n } = useTranslation();
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/news', {
            headers: { 'Accept': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (result.data) {
                    setSlides(result.data.slice(0, 5));
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error slider:", err);
                setLoading(false);
            });
    }, []);

    // PERBAIKAN 1: Hapus mt-8 dan ganti jadi pt-0 agar loading tidak turun terlalu jauh
    if (loading) return (
        <div className="container mx-auto px-4 mt-0 pt-4">
            <div className="w-full h-[450px] md:h-[550px] bg-gray-200 animate-pulse rounded-[3rem]"></div>
        </div>
    );
    
    if (slides.length === 0) return null;

    return (
        // PERBAIKAN 2: HAPUS 'mt-4 md:mt-8' dan GANTI 'py-6' menjadi 'pb-8' (Hapus padding atas)
        // Ini akan menarik carousel naik ke atas mendekati navbar
        <div className="container mx-auto px-4 pb-8 pt-0 mt-0"> 
            <div className="rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl relative h-[450px] md:h-[600px] group">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    speed={1000}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    loop={true}
                    className="w-full h-full"
                >
                    {slides.map((news) => {
                        const imageUrl = news.image 
                            ? (news.image.startsWith('http') ? news.image : `http://127.0.0.1:8000/storage/${news.image}`)
                            : 'https://via.placeholder.com/1200x800?text=No+Image';

                        const displayTitle = i18n.language === 'EN' && news.title_en ? news.title_en : news.title;
                        const displayExcerpt = i18n.language === 'EN' && news.excerpt_en ? news.excerpt_en : news.excerpt;

                        return (
                            <SwiperSlide key={news.id}>
                                <div className="relative w-full h-full">
                                    <img src={imageUrl} alt={displayTitle} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                    
                                    {/* PADDING TEKS TETAP DIPERTAHANKAN AGAR TIDAK TERTUTUP LENGKUNGAN */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 pb-12 md:p-16 md:pb-20 pl-10 md:pl-24 flex flex-col items-start z-10">
                                        
                                        <div className="mb-4 hidden md:flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg animate-bounce-slow">
                                            <span className="text-2xl">🔥</span>
                                        </div>

                                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg max-w-4xl">
                                            {displayTitle}
                                        </h2>

                                        <p className="hidden md:block text-gray-200 text-lg mb-8 max-w-2xl line-clamp-2">
                                            {displayExcerpt}
                                        </p>

                                        <Link 
                                            to={`/news/${news.slug}`} 
                                            className="inline-flex items-center gap-3 bg-[#FFC107] hover:bg-[#FFD54F] text-black font-extrabold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-[#FFC107]/50"
                                        >
                                            {t('news.read_more')} 
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default NewsTrending;