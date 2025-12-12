import React from 'react';

const HistorySection = () => {
    return (
        <div className="animate-fade-in-up flex flex-col lg:flex-row gap-12 items-center h-full">
            
            {/* TEKS & CHECKLIST */}
            <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">PT NADA FREEDOM INDONESIA (NFI)</h3>
                <div className="text-gray-600 text-sm md:text-[15px] leading-relaxed space-y-4 text-justify mb-6">
                    <p>Was founded on June 01, 2020, with clean to clear vision to address a growing demand for reliable and innovative telecommunication services in Indonesia.</p>
                    <p>Our journey is rooted in Notarial Deed 199 issued on May 30, 2024. With our Head Office focusing on expanding reach, we started with humble beginnings.</p>
                </div>
                <div className="space-y-3">
                    {[
                        { l: "Humble Beginnings", v: "Founded on 01, 2020." },
                        { l: "Legal Foundation", v: "Notarial Deed No. 199 on May 30, 2024." },
                        { l: "Infrastructure Focus", v: "Scalable Fiber Optic & Wireless Networks." },
                        { l: "Sector Support", v: "Education, Corporate & Tourism." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-3 text-sm border-b border-gray-100 pb-2 last:border-0">
                            <span className="text-gray-800 font-bold min-w-[160px] flex items-center gap-2">
                                <span className="w-4 h-4 border border-gray-400 flex items-center justify-center text-[10px] rounded-sm">✓</span> {item.l}
                            </span>
                            <span className="text-gray-400">:</span>
                            <span className="text-gray-600">{item.v}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* GAMBAR */}
            <div className="w-full lg:w-5/12 flex justify-center">
                 <img src="/images/illustration-history-people.png" alt="History Team" className="w-full max-w-sm object-contain" onError={(e) => e.target.src = "https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-13864.jpg"}/>
            </div>
        </div>
    );
};
export default HistorySection;