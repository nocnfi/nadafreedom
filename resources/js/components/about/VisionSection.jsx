import React from 'react';

const VisionSection = () => {
    return (
        <div className="animate-fade-in-up flex flex-col md:flex-row items-center justify-between h-full relative">
            
            {/* ORANG TEROPONG */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start z-10 mb-8 md:mb-0">
                <img src="/images/illustration-vision-man.png" alt="Vision" className="h-64 object-contain" onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/3079/3079165.png"} />
            </div>

            {/* TEKS TENGAH */}
            <div className="w-full md:w-1/3 text-center z-20 px-4">
                <h3 className="text-2xl font-bold text-blue-900 leading-snug">
                    Realizing Indonesia's Digital<br/>Future by Providing<br/>
                    <span className="text-blue-600">Fast and Efficient Network</span><br/>
                    Solutions.
                </h3>
            </div>

            {/* GUNUNG BACKGROUND */}
            <div className="w-full md:w-1/3 h-full flex items-end justify-end absolute right-0 bottom-0 md:relative pointer-events-none opacity-90">
                 <svg viewBox="0 0 300 200" className="w-full h-auto max-h-64">
                    <path d="M50 200 L150 100 L200 150 L300 50 V200 Z" fill="#0f172a" />
                    <path d="M290 50 V100" stroke="#fbbf24" strokeWidth="3"/>
                    <path d="M290 50 L320 65 L290 80 Z" fill="#fbbf24"/>
                 </svg>
            </div>
        </div>
    );
};
export default VisionSection;