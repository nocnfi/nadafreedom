import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import i18n

const NotFound = () => {
    const { t } = useTranslation(); // 2. Inisialisasi hook

    // State: True = Spinning, False = Stop
    const [spin1, setSpin1] = useState(true);
    const [spin2, setSpin2] = useState(true);
    const [spin3, setSpin3] = useState(true);

    // State angka acak
    const [tempNum1, setTempNum1] = useState(1);
    const [tempNum2, setTempNum2] = useState(2);
    const [tempNum3, setTempNum3] = useState(3);

    // --- EFFECT 1: GENERATOR ANGKA ---
    useEffect(() => {
        const interval = setInterval(() => {
            setTempNum1(Math.floor(Math.random() * 9) + 1);
            setTempNum2(Math.floor(Math.random() * 9) + 1);
            setTempNum3(Math.floor(Math.random() * 9) + 1);
        }, 80); 

        return () => clearInterval(interval);
    }, []);

    // --- EFFECT 2: LOOPING ANIMASI ---
    useEffect(() => {
        const runAnimationSequence = () => {
            setSpin1(true);
            setSpin2(true);
            setSpin3(true);

            setTimeout(() => setSpin1(false), 1000);
            setTimeout(() => setSpin2(false), 2200);
            setTimeout(() => setSpin3(false), 3400);
        };

        runAnimationSequence();

        const loopInterval = setInterval(() => {
            runAnimationSequence();
        }, 7000);

        return () => clearInterval(loopInterval);
    }, []);

    return (
        <div className="min-h-screen bg-[#F9F9F9] font-sans relative overflow-hidden flex flex-col items-center justify-center text-gray-800">
            
            {/* --- BACKGROUND GRID --- */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* --- DECORATIVE SHAPES --- */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FFD000] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD000] rounded-bl-[100px] z-0 opacity-90"></div>
            <div className="absolute bottom-16 left-16 z-10 animate-spin-slow">
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute w-5 h-24 bg-[#2A2ABD] rounded-full"></div>
                    <div className="absolute w-5 h-24 bg-[#2A2ABD] rounded-full rotate-45"></div>
                    <div className="absolute w-5 h-24 bg-[#2A2ABD] rounded-full rotate-90"></div>
                    <div className="absolute w-5 h-24 bg-[#2A2ABD] rounded-full rotate-135"></div>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <main className="relative z-10 flex flex-col items-center justify-center w-full px-4">
                
                {/* --- SLOT MACHINE 404 --- */}
                <div className="flex items-center gap-4 md:gap-10 mb-16 transform scale-75 md:scale-110">
                    
                    {/* SLOT 1 */}
                    <div className="w-32 h-40 flex items-center justify-center bg-white/50 rounded-xl border-2 border-transparent transition-all duration-300">
                        {spin1 ? (
                            <span className="text-9xl font-black text-[#E8E618] animate-pulse blur-[2px] select-none">{tempNum1}</span>
                        ) : (
                            <div className="w-full h-full grid grid-cols-3 grid-rows-5 gap-1.5 animate-bounce-short">
                                <div className="col-start-1 row-start-1 bg-[#E8E618] rounded-sm"></div>
                                <div className="col-start-1 row-start-2 bg-[#E8E618] rounded-sm"></div>
                                <div className="col-start-1 row-start-3 bg-[#E8E618] rounded-sm"></div>
                                <div className="col-start-2 row-start-3 bg-[#E8E618] rounded-sm"></div>
                                <div className="col-start-3 row-start-1 bg-[#E8E618] rounded-sm"></div>
                                <div className="col-start-3 row-start-2 bg-[#E8E618] rounded-sm"></div>
                                <div className="col-start-3 row-start-3 bg-[#E8E618] rounded-sm"></div>
                                <div className="col-start-3 row-start-4 bg-[#E8E618] rounded-sm"></div>
                                <div className="col-start-3 row-start-5 bg-[#E8E618] rounded-sm"></div>
                            </div>
                        )}
                    </div>

                    {/* SLOT 2 */}
                    <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white/50 rounded-xl border-2 border-transparent transition-all duration-300">
                        {spin2 ? (
                            <span className="text-9xl font-black text-[#FF5F00] animate-pulse blur-[2px] select-none">{tempNum2}</span>
                        ) : (
                            <div className="relative w-full h-full flex items-center justify-center animate-bounce-short">
                                <div className="w-full h-full bg-[#FF5F00] rounded-full shadow-lg flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9F9F9] rounded-full"></div>
                                </div>
                                <div className="absolute -right-4 -top-4 w-10 h-10 border-4 border-[#FF5F00] rounded-full opacity-20"></div>
                            </div>
                        )}
                    </div>

                    {/* SLOT 3 */}
                    <div className="w-32 h-40 flex items-center justify-center bg-white/50 rounded-xl border-2 border-transparent transition-all duration-300">
                        {spin3 ? (
                            <span className="text-9xl font-black text-[#2A2ABD] animate-pulse blur-[2px] select-none">{tempNum3}</span>
                        ) : (
                            <div className="relative w-full h-full animate-bounce-short">
                                <div className="absolute right-0 top-0 w-8 h-full bg-[#2A2ABD] rounded-sm"></div>
                                <div className="absolute right-0 top-20 w-full h-8 bg-[#2A2ABD] rounded-sm"></div>
                                <div className="absolute left-0 top-6 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[60px] border-b-[#2A2ABD] transform -rotate-12"></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- TEKS TRANSLATED --- */}
                {/* Gunakan t() untuk memanggil teks dari JSON */}
                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                    {t('notFound.title')}
                </h2>
                <p className="text-gray-500 mb-10 text-center max-w-md">
                    {t('notFound.message')}
                </p>

                {/* --- TOMBOL TRANSLATED --- */}
                <Link 
                    to="/" 
                    className="group flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                    <div className="bg-gray-100 text-gray-600 p-2 rounded-lg group-hover:bg-[#FF5F00] group-hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </div>
                    <span className="font-bold text-gray-700 text-lg group-hover:text-black">
                        {t('notFound.button')}
                    </span>
                </Link>

            </main>
        </div>
    );
};

export default NotFound;