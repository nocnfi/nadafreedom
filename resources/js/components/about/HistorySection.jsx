import React from 'react';

const HistorySection = () => {
    return (
        <div className="animate-fade-in-up flex flex-col lg:flex-row gap-10">
            {/* Kolom Teks */}
            <div className="flex-1 z-10">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                    PT NADA FREEDOM INDONESIA (NFI)
                </h3>
                <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 text-justify">
                    <p>
                        Was founded on June 01, 2020, with clean to clear vision to address a growing demand
                        for reliable and innovative telecommunication services in Indonesia.
                    </p>
                    <p>
                        Our journey is rooted in Notarial Deed 199 issued on May 30, 2024, in Kabupaten
                        Bandung Barat. With our Head Office focusing on expanding reach, we started with humble
                        beginnings serving various sectors from our ratification in Bekasi Regency.
                    </p>
                </div>

                {/* List Checklist */}
                <div className="mt-6 space-y-3">
                    <div className="grid grid-cols-[1.5fr_auto_2fr] gap-2 text-sm md:text-base border-b border-gray-50 pb-2">
                        <span className="font-bold text-gray-700 flex items-center gap-2"><span className="text-blue-500">☑</span> Humble Beginnings</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-gray-600">Founded on 01, 2020.</span>
                    </div>
                    <div className="grid grid-cols-[1.5fr_auto_2fr] gap-2 text-sm md:text-base border-b border-gray-50 pb-2">
                        <span className="font-bold text-gray-700 flex items-center gap-2"><span className="text-blue-500">☑</span> Legal Foundation</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-gray-600">Notarial Deed No. 199 on May 30, 2024.</span>
                    </div>
                    <div className="grid grid-cols-[1.5fr_auto_2fr] gap-2 text-sm md:text-base border-b border-gray-50 pb-2">
                        <span className="font-bold text-gray-700 flex items-center gap-2"><span className="text-blue-500">☑</span> Infrastructure Focus</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-gray-600">Scalable Fiber Optic & Wireless Networks.</span>
                    </div>
                    <div className="grid grid-cols-[1.5fr_auto_2fr] gap-2 text-sm md:text-base">
                        <span className="font-bold text-gray-700 flex items-center gap-2"><span className="text-blue-500">☑</span> Sector Support</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-gray-600">Education, Corporate & Tourism.</span>
                    </div>
                </div>
            </div>

            {/* Kolom Ilustrasi */}
            <div className="w-full lg:w-2/5 flex items-center justify-center relative">
                <img 
                    src="https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-13864.jpg" 
                    alt="History Team" 
                    className="relative z-10 w-full max-w-sm mix-blend-multiply"
                />
            </div>
        </div>
    );
};

export default HistorySection;