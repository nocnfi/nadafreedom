import React from 'react';

const HistorySection = () => {
    return (
        <div className="animate-fade-in-up flex flex-col lg:flex-row gap-12 items-start lg:items-center h-full">
            
            {/* BAGIAN KIRI: TEKS & CHECKLIST (TIDAK BERUBAH) */}
            <div className="flex-1 w-full">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3 border-b border-gray-200 pb-2 inline-block">
                    PT NADA FREEDOM INDONESIA (NFI)
                </h3>
                
                <div className="text-gray-600 text-sm md:text-[15px] leading-relaxed space-y-4 text-justify mb-8">
                    <p>
                        Was founded on June 01, 2020, with a clean to clear vision to address a growing demand
                        for reliable and innovative telecommunication services in Indonesia.
                    </p>
                    <p>
                        Our journey is rooted in Notarial Deed 199 issued on May 30, 2024. With our Head Office focusing on expanding reach, we started with humble beginnings.
                    </p>
                </div>

                {/* Checklist Data */}
                <div className="space-y-4">
                    {[
                        { label: "Humble Beginnings", val: "Founded on 01, 2020." },
                        { label: "Legal Foundation", val: "Notarial Deed No. 199 on May 30, 2024." },
                        { label: "Infrastructure Focus", val: "Scalable Fiber Optic & Wireless Networks." },
                        { label: "Sector Support", val: "Education, Corporate & Tourism." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm border-b border-dashed border-gray-200 pb-2 last:border-0 hover:bg-gray-50 transition-colors p-1 rounded">
                            <div className="flex items-center gap-2 min-w-[180px]">
                                <span className="w-5 h-5 bg-blue-100 text-blue-600 flex items-center justify-center text-xs rounded-full">✓</span> 
                                <span className="font-bold text-gray-800">{item.label}</span>
                            </div>
                            <span className="hidden sm:block text-gray-400">:</span>
                            <span className="text-gray-600 font-medium pl-7 sm:pl-0">{item.val}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* BAGIAN KANAN: ILUSTRASI SVG */}
            <div className="w-full lg:w-5/12 flex items-center justify-center relative mt-6 lg:mt-0">
                
                {/* Dekorasi Background Blob (Opsional: Hapus div ini jika SVG Anda sudah ramai) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-2xl -z-10"></div>
                
                {/* --- UPDATE BAGIAN INI --- */}
                {/* Ganti '/images/nama-file-svg-anda.svg' dengan path file Anda yang sebenarnya */}
                <img 
                    src="/images/we.svg" 
                    alt="History Illustration" 
                    className="w-full max-w-sm object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
                />
                {/* ------------------------- */}

            </div>
        </div>
    );
};

export default HistorySection;