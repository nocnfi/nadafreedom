import React from 'react';
import HistorySection from './HistorySection';
import VisionSection from './VisionSection';
import MissionSection from './MissionSection';
import ValuesSection from './ValuesSection';

const AboutContent = ({ activeTab }) => {

    const titles = {
        we: "Our History",
        vision: "Our Vision",
        mission: "Our Mission",
        values: "Our Values"
    };

    return (
        <div className="mt-12 md:mt-20 w-full max-w-7xl mx-auto px-4">

            {/* WRAPPER */}
            <div className="relative w-full pt-12 pb-20">

                <div className="relative w-[90%] mx-auto">

                    {/* ==== SVG NOTCH / CURVE LEFT TOP ==== */}
                    <svg
                        className="absolute top-0 left-0 w-40 h-16 z-20"
                        viewBox="0 0 200 80"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="
                                M0,80 
                                L200,80 
                                L200,0 
                                Q120,0 0,0 
                                Z
                            "
                            fill="rgba(255,255,255,0.35)"
                            stroke="rgba(255,255,255,0.25)"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* ==== CARD GLASSMORPH ==== */}
                    <div className="
                        relative bg-white/30 backdrop-blur-2xl
                        p-8 md:p-12 min-h-[400px]
                        border border-white/20 shadow-xl

                        rounded-tl-none
                        rounded-tr-[30px]
                        rounded-bl-[30px]
                        rounded-br-[30px]

                        pt-14  /* memberi ruang untuk notch masuk */
                    ">

                        {/* ==== TITLE ==== */}
                        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 tracking-tight mb-6">
                            {titles[activeTab]}
                        </h2>

                        {/* ==== CONTENT ==== */}
                        {activeTab === 'we' && <HistorySection />}
                        {activeTab === 'vision' && <VisionSection />}
                        {activeTab === 'mission' && <MissionSection />}
                        {activeTab === 'values' && <ValuesSection />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
