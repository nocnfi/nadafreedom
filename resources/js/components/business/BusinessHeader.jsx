import React from 'react';
 // Pastikan CSS diimport (jika belum ada di App.js)

const BusinessHeader = () => {
    return (
        <section className="relative py-16 md:py-24 bg-black text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
            
            {/* Background Aurora */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Class .animate-aurora-... akan diambil dari App.css */}
                <div className="absolute bottom-[-20%] left-[5%] w-[25%] h-[80%] bg-gradient-to-t from-green-400 via-green-600 to-transparent blur-[60px] opacity-60 mix-blend-screen animate-aurora-green"></div>
                <div className="absolute bottom-[-10%] left-[30%] w-[40%] h-[90%] bg-gradient-to-t from-purple-500 via-pink-500 to-transparent blur-[70px] opacity-70 mix-blend-screen animate-aurora-purple"></div>
                <div className="absolute bottom-[-15%] right-[10%] w-[30%] h-[85%] bg-gradient-to-t from-blue-500 via-cyan-400 to-transparent blur-[60px] opacity-60 mix-blend-screen animate-aurora-blue"></div>
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 mt-0 md:mt-10">
                
                {/* Header Text */}
                <div className="text-center mb-10 md:mb-16">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight">
                        Why work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-blue-500 italic pr-2">NFI</span> business ?
                    </h1>
                    
                    <p className="text-gray-300 text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto drop-shadow-md px-2">
                        Meet our new standard for corporate network reliability.
                    </p>
                </div>

                {/* Grid 4 Kolom Fitur */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
                    
                    {/* Feature 1: SLA */}
                    <div className="group p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                        <div className="h-24 flex items-center justify-center mb-2 md:mb-4">
                            <img 
                                src="/images/guaranteed.svg" 
                                alt="SLA Icon" 
                                className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(74,222,128,0.6)]" 
                            />
                        </div>
                        <h3 className="text-lg font-bold mb-2 md:mb-3 text-white">Service Level Agreement</h3>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">Robust SLA guarantee up to 99.9%.</p>
                    </div>

                    {/* Feature 2: Fiber */}
                    <div className="group p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]">
                        <div className="h-24 flex items-center justify-center mb-2 md:mb-4">
                            <img 
                                src="/images/fiber.svg" 
                                alt="Fiber Icon" 
                                className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(192,132,252,0.6)]" 
                            />
                        </div>
                        <h3 className="text-lg font-bold mb-2 md:mb-3 text-white">Pure Fiber Infrastructure</h3>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">End-to-end fiber optic network.</p>
                    </div>

                    {/* Feature 3: Security */}
                    <div className="group p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        <div className="h-24 flex items-center justify-center mb-2 md:mb-4">
                            <img 
                                src="/images/topology.svg" 
                                alt="Security Icon" 
                                className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
                            />
                        </div>
                        <h3 className="text-lg font-bold mb-2 md:mb-3 text-white">Integrated Security</h3>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">Equipped with DDoS protection.</p>
                    </div>

                    {/* Feature 4: Support */}
                    <div className="group p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                        <div className="h-24 flex items-center justify-center mb-2 md:mb-4">
                            <img 
                                src="/images/247.svg" 
                                alt="Support Icon" 
                                className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]" 
                            />
                        </div>
                        <h3 className="text-lg font-bold mb-2 md:mb-3 text-white">24/7 Expert Support</h3>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">Responsive 24/7 expert support.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusinessHeader;