import React from 'react';
// Pindahkan Import Swiper ke sini
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const NewsTrending = () => {
    // Data Dummy Carousel
    const popularNews = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            image: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=2000&auto=format&fit=crop", 
        },
        {
            id: 2,
            title: "Network Expansion 2025",
            desc: "Expanding our reach to remote areas with fiber optic technology.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
        },
    ];

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
                    {popularNews.map((news) => (
                        <SwiperSlide key={news.id}>
                            <div className="relative w-full h-full">
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl text-white p-4">
                                    <div className="mb-6 hidden md:flex items-center justify-center w-32 h-24 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                                        <svg className="w-12 h-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">{news.title}</h2>
                                    <p className="text-sm md:text-base text-gray-200 line-clamp-2">{news.desc}</p>
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