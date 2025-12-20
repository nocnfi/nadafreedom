import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const NewsTrending = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/news', {
            headers: { 'Accept': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                // Ambil 5 berita pertama
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

    if (loading) return <div className="container mx-auto h-[400px] mt-4 bg-gray-200 animate-pulse rounded-[3rem]"></div>;

    if (slides.length === 0) return null;

    return (
        <div className="container mx-auto px-4 py-8 mt-4">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative h-[400px] md:h-[500px]">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    speed={1000}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    loop={true}
                    className="w-full h-full"
                >
                    {slides.map((news) => {
                        // ✅ LOGIKA FIX GAMBAR: Tambahkan base URL jika path relatif
                        const imageUrl = news.image 
                            ? (news.image.startsWith('http') ? news.image : `http://127.0.0.1:8000/storage/${news.image}`)
                            : 'https://via.placeholder.com/1200x800?text=No+Image';

                        return (
                            <SwiperSlide key={news.id}>
                                <div className="relative w-full h-full">
                                    {/* Gambar Slider */}
                                    <img 
                                        src={imageUrl} 
                                        alt={news.title} 
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Overlay Gradient (Supaya teks terbaca) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                    
                                    {/* Konten Teks */}
                                    <div className="absolute bottom-12 left-6 md:left-16 max-w-3xl text-white p-4">
                                        
                                        {/* Icon Hiasan (Opsional) */}
                                        <div className="mb-6 hidden md:flex items-center justify-center w-20 h-16 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                                            <span className="text-yellow-400 text-2xl font-bold">🔥</span>
                                        </div>

                                        <h2 className="text-2xl md:text-5xl font-bold mb-3 leading-tight drop-shadow-lg">
                                            {news.title}
                                        </h2>
                                        
                                        <p className="hidden md:block text-gray-200 text-lg line-clamp-2 mb-6 max-w-xl">
                                            {news.excerpt}
                                        </p>
                                        
                                        {/* Tombol Read More */}
                                        <Link 
                                            to={`/news/${news.slug}`} 
                                            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
                                        >
                                            BACA SELENGKAPNYA 
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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