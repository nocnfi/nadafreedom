import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InternetSolutionsSection = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/plans')
            .then(response => {
                setPlans(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching plans:", error);
                // Fallback Data
                setPlans([
                    { 
                        id: 1, 
                        name: 'NFI BASIC', 
                        description: 'Economical connection solution for single users.', 
                        price: 'IDR 110.000', 
                        features: ['Symmetrical 10 Mbps Speed', 'Standard Quality (SD) Streaming', 'No Installation Fee', 'Standard Technical Support'], 
                        is_popular: false 
                    },
                    { 
                        id: 2, 
                        name: 'NFI LITE', 
                        description: 'An economical choice for couples or light WFH.', 
                        price: 'IDR 130.000', 
                        features: ['Symmetrical 15 Mbps Speed', 'Ideal for 1-on-1 Video Calls', 'Free Router Rental', 'Standard Technical Support'], 
                        is_popular: false 
                    },
                    { 
                        id: 3, 
                        name: 'NFI SMART', 
                        description: 'Price balance and stability for homes.', 
                        price: 'IDR 160.000', 
                        features: ['Symmetrical 20 Mbps Speed', '4K Streaming on One Device', 'Free Wi-Fi Router', 'All Pure Fiber Networks'], 
                        is_popular: false 
                    },
                    { 
                        id: 4, 
                        name: 'NFI FAMILY', 
                        description: 'The best choice for families and multi-devices.', 
                        price: 'IDR 210.000', 
                        features: ['Symmetrical 30 Mbps Speed', 'Anti-Buffering for Active Families', 'Priority Technician Response', 'FREE Installation & Wi-Fi 6 Router'], 
                        is_popular: true 
                    },
                    { 
                        id: 5, 
                        name: 'NFI POWER', 
                        description: 'Maximum performance for Gamers and Content Creators.', 
                        price: 'IDR 300.000', 
                        features: ['Symmetrical 100 Mbps Speed', 'Lowest Latency', 'Ideal for Smart Homes', 'Premium 24/7 Support'], 
                        is_popular: false 
                    },
                ]);
                setLoading(false);
            });
    }, []);

    const bufferingFeatures = [
        {
            title: "RELIABLE & FAST INTERNET",
            items: ["Watch your favorite 4K movies or series without any lag.", "Stable upload speeds for professional meetings and live streaming."]
        },
        {
            title: "EXCEPTIONAL SUPPORT",
            items: ["Guaranteed response to problem handling within the specified time.", "Free consultation to ensure the package fits the number of users and devices in your home."]
        },
        {
            title: "ADVANCED FEATURES",
            items: ["Automatically optimizes connections for each of your devices.", "Easily set access times and content restrictions through the app."]
        }
    ];

    return (
        <section 
            className="relative w-full font-['Poppins'] bg-white overflow-hidden"
            style={{ 
                backgroundImage: "url('/images/gradient-world.svg')", 
                backgroundSize: '100% auto', 
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* === MASKING GRADIENT (FADE EFFECT) === */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">

                {/* === 1. BUFFERING SECTION (Gambar & Teks) === */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-0">
                    {/* KOLOM KIRI: Ilustrasi */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-8">
                        <div className="w-80 md:w-[26rem] lg:w-[30rem] relative z-10">
                            <img 
                                src="/images/wifi.svg" 
                                alt="Working from home" 
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* KOLOM KANAN: Teks Fitur */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 italic leading-tight mb-6 tracking-tight">
                            Tired of Buffering and <br className="hidden md:block"/> 
                            Intermittent Connections?
                        </h2>
                        <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed max-w-lg">
                            We provide stable and reliable high-speed internet solutions, supported by the latest fiber optic infrastructure for all your digital needs.
                        </p>

                        <div className="space-y-8">
                            {bufferingFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-8 h-8">
                                        <img src="/icons/checklist.svg" alt="Check" className="w-full h-full object-contain"/>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-extrabold italic text-lg mb-2 uppercase">{feature.title}</h3>
                                        <ul className="space-y-2">
                                            {feature.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-600 font-medium leading-relaxed">
                                                    <span className="w-3 h-3 bg-blue-600 mr-3 mt-1.5 flex-shrink-0 rounded-sm"></span>
                                                    <span className="flex-1">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === 2. BAGIAN TENGAH: GAMBAR FAMILY (BRIDGE) === */}
                <div className="w-full flex justify-end relative z-0 mt-8 mb-16 lg:-mr-64 xl:-mr-96 pointer-events-none">
                     <div className="w-48 md:w-64 lg:w-80">
                        <img 
                            src="/images/family-fill.svg" 
                            alt="Happy Family Decoration" 
                            className="w-full h-auto opacity-100"
                        />
                    </div>
                </div>

                {/* === 3. PRICING SECTION === */}
                <div className="relative z-10">
                    <div className="mb-12 max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 tracking-tight uppercase">
                            PRICING
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 font-light">
                            Find Your Ideal <span className="text-blue-600 font-semibold">Plan</span>. Stable for All Your Digital Needs.
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center py-20 animate-pulse">Loading Pricing...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
                            {plans.map((plan) => (
                                <div 
                                    key={plan.id}
                                    className={`
                                        relative flex flex-col p-6 rounded-[2rem] h-full bg-white transition-all duration-300
                                        ${plan.is_popular 
                                            ? 'border-2 border-blue-600 shadow-xl z-10' // Border Biru tapi SEJAJAR
                                            : 'border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1'
                                        }
                                    `}
                                >
                                    {/* Header */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-extrabold text-gray-900 italic uppercase">{plan.name}</h3>
                                        <p className="text-xs text-gray-500 mt-2 h-10 leading-snug">{plan.description}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <p className="text-lg font-extrabold text-gray-900 italic">
                                            {plan.price} <span className="text-xs font-normal text-gray-500 not-italic">/ month</span>
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {plan.features.map((featureObj, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-gray-600">
                                                <span className="mr-2 mt-0.5 flex-shrink-0 text-gray-900">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="0.5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1"/>
                                                        <path d="M4 7L6 9L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <span className="leading-tight">{typeof featureObj === 'string' ? featureObj : featureObj.item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button Action */}
                                    <div className="mt-auto w-full">
                                        {plan.is_popular ? (
                                            // === TOMBOL POPULAR (Fill Gradient) ===
                                            <button className="
                                                w-full py-3 
                                                rounded-tl-xl rounded-br-xl rounded-tr-[3em] rounded-bl-[3em]
                                                bg-gradient-to-r from-blue-600 to-purple-600 
                                                text-white text-sm font-bold tracking-wide
                                                shadow-lg shadow-blue-500/30 
                                                hover:from-purple-600 hover:to-blue-600
                                                hover:shadow-blue-500/50 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5
                                                transition-all duration-500 ease-in-out
                                            ">
                                                Get started
                                            </button>
                                        ) : (
                                            // === TOMBOL BIASA (Border Gradient) ===
                                            <div className="
                                                p-[2px] 
                                                rounded-tl-xl rounded-br-xl rounded-tr-[3em] rounded-bl-[3em]
                                                bg-gradient-to-r from-blue-600 to-purple-600
                                                hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300
                                            ">
                                                <button className="
                                                    w-full py-[10px]
                                                    rounded-tl-xl rounded-br-xl rounded-tr-[3em] rounded-bl-[3em]
                                                    bg-white 
                                                    text-gray-900 text-sm font-bold tracking-wide
                                                    hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white
                                                    transition-all duration-300
                                                ">
                                                    Get started
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default InternetSolutionsSection;