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
                        features: ['Symmetrical 10 Mbps Speed', 'Lowest Latency', 'Ideal for Smart Homes', 'Premium 24/7 Support'], 
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
                backgroundPosition: 'center',
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* ============================================================ */}
            {/* === MASKING GRADIENT (FADE EFFECT)                       === */}
            {/* ============================================================ */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">

                {/* ============================================================ */}
                {/* 1. BUFFERING SECTION (Gambar & Teks)                         */}
                {/* ============================================================ */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-0">
                    
                    {/* KOLOM KIRI: Ilustrasi Wanita */}
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
                                    {/* Icon Checklist Besar */}
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

                {/* ============================================================ */}
                {/* 2. BAGIAN TENGAH: GAMBAR FAMILY (BRIDGE)                     */}
                {/* ============================================================ */}
                <div className="w-full flex justify-end relative z-0 mt-8 mb-16 lg:-mr-64 xl:-mr-96 pointer-events-none">
                     <div className="w-48 md:w-64 lg:w-80">
                        <img 
                            src="/images/family-fill.svg" 
                            alt="Happy Family Decoration" 
                            className="w-full h-auto opacity-100"
                        />
                    </div>
                </div>

                {/* ============================================================ */}
                {/* 3. PRICING SECTION                                           */}
                {/* ============================================================ */}
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
                                        relative flex flex-col p-6 rounded-3xl transition-all duration-300 h-full bg-white group
                                        ${plan.is_popular 
                                            ? 'border-2 border-blue-600 shadow-xl shadow-blue-100 z-10 transform md:-translate-y-4 scale-105 md:scale-100' 
                                            : 'border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
                                        }
                                    `}
                                >
                                    <div className="mb-4">
                                        <h3 className="text-lg font-extrabold text-gray-900 italic uppercase">{plan.name}</h3>
                                        <p className="text-xs text-gray-500 mt-2 min-h-[40px] leading-relaxed">{plan.description}</p>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-lg font-bold text-gray-900 italic">
                                            {plan.price} <span className="text-xs font-normal text-gray-500">/ month</span>
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {plan.features && plan.features.map((featureObj, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-gray-600">
                                                <span className="mr-2 mt.5 flex-shrink-0 w-4 h-4 text-gray-800">
                                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        <rect x="1" y="1" width="22" height="22" rx="4" strokeWidth="1.5" />
                                                    </svg>
                                                </span>
                                                <span className="leading-tight">{typeof featureObj === 'string' ? featureObj : featureObj.item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto">
                                        <button className={`
                                            w-full py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-500 ease-in-out
                                                ${plan.is_popular 
                                                    // STYLE UNTUK POPULAR PLAN (Gradient Biru-Ungu)
                                            ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md hover:shadow-xl hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700' 
            
                                                     // STYLE UNTUK REGULAR PLAN (Outline)
                                            : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 hover:shadow-md'
                                                    }
                                         `}>
                                                Get started
                                        </button>
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