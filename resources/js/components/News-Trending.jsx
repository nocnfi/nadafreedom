import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const NewsTrending = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ambil data berita untuk slider
        fetch('http://127.0.0.1:8000/api/news')
            .then(res => res.json())
            .then(result => {
                // Ambil 5 berita pertama saja untuk slider
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

    // Jika tidak ada berita, sembunyikan slider
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
                    {slides.map((news) => (
                        <SwiperSlide key={news.id}>
                            <div className="relative w-full h-full">
                                <img 
                                    src={news.image || 'https://via.placeholder.com/1200x800?text=No+Image'} 
                                    alt={news.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl text-white p-4">
                                    <div className="mb-6 hidden md:flex items-center justify-center w-32 h-24 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                                        <svg className="w-12 h-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">{news.title}</h2>
                                    <p className="text-sm md:text-base text-gray-200 line-clamp-2">
                                        {news.excerpt || news.title}
                                    </p>
                                    <a href={`/news/${news.slug}`} className="mt-4 inline-block text-yellow-400 font-bold hover:underline">
                                        READ MORE &rarr;
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default NewsTrending;