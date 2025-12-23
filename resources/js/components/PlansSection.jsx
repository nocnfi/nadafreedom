import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PricingGrid from '@/Components/PricingGrid'; 

const PlansSection = () => {
    // State Visual
    const [isToggled, setIsToggled] = useState(false);
    const [showLoop, setShowLoop] = useState(false);

    // State Dropdown (Interaktif)
    const [regionList, setRegionList] = useState([]); // List nama kota untuk dropdown
    const [selectedRegion, setSelectedRegion] = useState('Kab. Bekasi'); // Pilihan user
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Fetch data HANYA untuk isi dropdown
    useEffect(() => {
        axios.get('/api/pricing-regions')
            .then(res => {
                if(res.data && res.data.length > 0) {
                    setRegionList(res.data);
                }
            })
            .catch(err => console.log("Gagal load list kota"));

        // Klik luar untuk tutup dropdown
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

                    {/* BAGIAN ANIMASI (GAMBAR) - BIARKAN SEPERTI KODE SEBELUMNYA */}
                    <div className="relative w-full max-w-4xl h-[350px] md:h-[450px] flex items-center justify-center">
                        {/* Paste kode visual Area A (Awan) dan B (Wifi/Orang) Anda disini. 
                            Saya skip agar tidak kepanjangan karena tidak berubah */}
                        
                        {/* CONTOH SINGKAT STRUKTUR ANIMASI: */}
                        <div className={`absolute inset-0 ${isToggled ? 'opacity-100' : 'opacity-0'}`}>
                           {/* Awan Marquee ... */}
                        </div>
                        <div className="relative w-[70%] z-10">
                           {/* Wifi Stack & Orang ... */}
                             <div className="absolute inset-0 flex flex-col items-center justify-between z-10 w-full">
                                <img src="/images/wifi-images/Layer4.svg" className={`w-full h-auto object-contain transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'} ${showLoop ? 'animate-pulse' : ''}`} style={{ transitionDelay: isToggled ? '600ms' : '0ms' }} />
                                {/* ... layer lainnya ... */}
                            </div>
                        </div>
                    </div>

                    {/* BAGIAN TEXT & CONTROLS */}
                    <div className="relative z-30 text-center w-full max-w-5xl">
                        
                        {/* Judul & Toggle */}
                        <div className="flex flex-col items-center justify-center gap-4 mb-10">
                            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 flex flex-wrap items-center justify-center gap-5 tracking-tight">
                                Price packages for 
                                <div onClick={handleToggle} className={`w-20 h-10 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${isToggled ? 'bg-blue-600 shadow-lg shadow-blue-500/50' : 'bg-gray-300'}`}>
                                    <div className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isToggled ? 'translate-x-10' : 'translate-x-0'}`}></div>
                                </div>
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 tracking-tight min-h-[1.5em]">
                                {isToggled ? (
                                    <span className="text-blue-600 drop-shadow-md transition-all duration-500">Connection Active</span>
                                ) : (
                                    <span className="text-gray-400 transition-all duration-500">all your activity needs</span>
                                )}
                            </h2>
                        </div>

                        {/* INTERACTIVE DROPDOWN SEARCH */}
                        <div className={`transition-all duration-700 ease-out transform ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                            
                            <div className="relative inline-block w-full max-w-[320px]" ref={dropdownRef}>
                                {/* Tombol Dropdown */}
                                <button 
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full flex items-center justify-between pl-6 pr-2 py-2 border-2 border-blue-600 rounded-full bg-white transition-all hover:bg-blue-50 shadow-sm"
                                >
                                    <span className="text-blue-700 font-bold text-base truncate">
                                        {selectedRegion}
                                    </span>
                                    <div className={`flex items-center gap-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md text-white">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </div>
                                    </div>
                                </button>

                                {/* List Item Dropdown */}
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                                        <div className="max-h-60 overflow-y-auto">
                                            {regionList.map((region) => (
                                                <button
                                                    key={region.id}
                                                    onClick={() => handleSelectRegion(region.region_name)}
                                                    className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors border-b border-gray-50 last:border-0 hover:bg-blue-50 hover:text-blue-600 ${selectedRegion === region.region_name ? 'bg-blue-50 text-blue-700' : 'text-gray-600'}`}
                                                >
                                                    {region.region_name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* PRICING GRID (Dikontrol oleh Dropdown) */}
                    <div className={`w-full transition-all duration-1000 ease-in-out transform ${isToggled ? 'opacity-100 translate-y-0 max-h-[5000px]' : 'opacity-0 translate-y-20 max-h-0 overflow-hidden'}`}>
                        <div className="pt-10"> 
                            {/* KITA KIRIM PROP customRegion AGAR GRID NURUT SAMA DROPDOWN */}
                            <PricingGrid customRegion={selectedRegion} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlansSection;