import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Import i18n
import PricingGrid from '@/Components/PricingGrid'; 

const PlansSection = () => {
    const { t } = useTranslation(); // Inisialisasi hook
    
    // --- STATE VISUAL ---
    const [isToggled, setIsToggled] = useState(false);
    const [showLoop, setShowLoop] = useState(false);

    // --- STATE DATA & DROPDOWN ---
    const [regionList, setRegionList] = useState([]); 
    const [selectedRegion, setSelectedRegion] = useState('Kab. Bekasi'); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // --- FETCH DATA LIST KOTA ---
    useEffect(() => {
        axios.get('/api/pricing-regions')
            .then(res => {
                if(res.data && res.data.length > 0) {
                    setRegionList(res.data);
                }
            })
            .catch(err => console.log("Gagal load list kota"));

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggle = () => {
        const newState = !isToggled;
        setIsToggled(newState);
        if (newState) setTimeout(() => setShowLoop(true), 1600);
        else setShowLoop(false);
    };

    const handleSelectRegion = (name) => {
        setSelectedRegion(name);
        setIsDropdownOpen(false);
    };

    return (
        <section className="w-full bg-white pt-20 pb-20 font-['Poppins'] overflow-hidden min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-24">

                    {/* BAGIAN 1: VISUAL AREA (WIFI, ORANG, AWAN) - TETAP ASLI */}
                    <div className="relative w-full max-w-4xl h-[350px] md:h-[450px] flex items-center justify-center">
                        <div className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-1000 ${isToggled ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="animate-marquee-cloud h-full">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="w-1/4 h-full flex items-center justify-center">
                                        <img src="/images/cloud-plan.svg" alt={`Clouds ${item}`} className="w-[95%] h-auto object-contain opacity-60" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative w-[70%] md:w-[50%] flex items-center justify-center z-10">
                            <div className="flex flex-col items-center justify-between opacity-30 filter grayscale w-full">
                                <img src="/images/wifi-images/Layer-g-4.svg" className="w-full h-auto object-contain" />
                                <img src="/images/wifi-images/Layer-g-3.svg" className="w-[74%] h-auto object-contain mt-[-1.5%]" />
                                <img src="/images/wifi-images/Layer-g-2.svg" className="w-[48%] h-auto object-contain mt-[-1.5%]" />
                                <img src="/images/wifi-images/Layer-g-1.svg" className="w-[22%] h-auto object-contain mt-[-1.5%]" />
                            </div>

                            <div className="absolute inset-0 flex flex-col items-center justify-between z-10 w-full">
                                <img src="/images/wifi-images/Layer4.svg" className={`w-full h-auto object-contain transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'} ${showLoop ? 'animate-pulse' : ''}`} style={{ transitionDelay: isToggled ? '600ms' : '0ms' }} />
                                <img src="/images/wifi-images/Layer3.svg" className={`w-[74%] h-auto object-contain mt-[-1.5%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isToggled ? '400ms' : '0ms' }} />
                                <img src="/images/wifi-images/Layer2.svg" className={`w-[48%] h-auto object-contain mt-[-1.5%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isToggled ? '200ms' : '0ms' }} />
                                <img src="/images/wifi-images/Layer1.svg" className={`w-[22%] h-auto object-contain mt-[-1.5%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isToggled ? '0ms' : '0ms' }} />
                            </div>

                            <div className="absolute inset-0 z-20 w-full h-full pointer-events-none">
                                <img src="/images/person-bottom.svg" className={`absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[20%] h-auto object-contain transition-all duration-500 ease-out ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isToggled ? '800ms' : '0ms' }} />
                                <img src="/images/person-middle.svg" className={`absolute bottom-[55%] left-1/2 transform -translate-x-1/2 w-[20%] h-auto object-contain transition-all duration-500 ease-out ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isToggled ? '1000ms' : '0ms' }} />
                                <img src="/images/person-top.svg" className={`absolute top-[-25%] left-1/3 transform -translate-x-1/2 w-[30%] h-auto object-contain transition-all duration-500 ease-out ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isToggled ? '1200ms' : '0ms' }} />
                            </div>
                        </div>
                    </div>

                    {/* BAGIAN 2: TEXT & CONTROLS - TERINTEGRASI I18N */}
                    <div className="relative z-30 text-center w-full max-w-5xl">
                        <div className="flex flex-col items-center justify-center gap-4 mb-10">
                            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 flex flex-wrap items-center justify-center gap-5 tracking-tight">
                                {t('plans.title_main')}
                                <div onClick={handleToggle} className={`w-20 h-10 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${isToggled ? 'bg-blue-600 shadow-lg shadow-blue-500/50' : 'bg-gray-300'}`}>
                                    <div className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isToggled ? 'translate-x-10' : 'translate-x-0'}`}></div>
                                </div>
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 tracking-tight min-h-[1.5em]">
                                {isToggled ? (
                                    <span className="text-blue-600 drop-shadow-md transition-all duration-500">{t('plans.status_active')}</span>
                                ) : (
                                    <span className="text-gray-400 transition-all duration-500">{t('plans.status_inactive')}</span>
                                )}
                            </h2>
                        </div>

                        {/* INTERACTIVE DROPDOWN SEARCH */}
                        <div className={`transition-all duration-700 ease-out transform ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                            <div className="relative inline-block w-full max-w-[320px]" ref={dropdownRef}>
                                <button 
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full flex items-center justify-between pl-6 pr-2 py-2 border-2 border-blue-600 rounded-full bg-white transition-all hover:bg-blue-50 shadow-sm"
                                >
                                    <span className="text-blue-700 font-bold text-base truncate">
                                        {selectedRegion}
                                    </span>
                                    <div className={`flex items-center gap-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md text-white">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </div>
                                    </div>
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                            {regionList.length > 0 ? (
                                                regionList.map((region) => (
                                                    <button
                                                        key={region.id}
                                                        onClick={() => handleSelectRegion(region.region_name)}
                                                        className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors border-b border-gray-50 last:border-0 hover:bg-blue-50 hover:text-blue-600 ${selectedRegion === region.region_name ? 'bg-blue-50 text-blue-700' : 'text-gray-600'}`}
                                                    >
                                                        {region.region_name}
                                                    </button>
                                                ))
                                            ) : (
                                                <div className="px-6 py-4 text-sm text-gray-400">{t('plans.dropdown_placeholder')}</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* BAGIAN 3: DATA CARD - TETAP ASLI */}
                    <div className={`
                        w-full transition-all duration-1000 ease-in-out transform
                        ${isToggled ? 'opacity-100 translate-y-0 max-h-[5000px]' : 'opacity-0 translate-y-20 max-h-0 overflow-hidden'}
                    `}>
                        <div className="pt-10"> 
                            <PricingGrid customRegion={selectedRegion} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlansSection;