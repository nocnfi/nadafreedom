import React from 'react';

const BusinessHeader = () => {
    return (
        <section className="relative py-24 bg-black text-white overflow-hidden min-h-[600px] flex items-center">
            {/* CSS Animation */}
            <style>{`
                @keyframes aurora-wave { 0% { transform: translateX(0) scaleY(1); opacity: 0.5; } 50% { transform: translateX(20px) scaleY(1.1); opacity: 0.8; } 100% { transform: translateX(0) scaleY(1); opacity: 0.5; } }
                @keyframes aurora-shimmer { 0% { transform: skewX(0deg) translateX(0); } 50% { transform: skewX(-5deg) translateX(-30px); } 100% { transform: skewX(0deg) translateX(0); } }
                .animate-aurora-green { animation: aurora-wave 8s infinite ease-in-out; }
                .animate-aurora-purple { animation: aurora-shimmer 12s infinite ease-in-out; }
                .animate-aurora-blue { animation: aurora-wave 10s infinite ease-in-out reverse; }
            `}</style>
            
            {/* Background Aurora */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-[-20%] left-[5%] w-[25%] h-[80%] bg-gradient-to-t from-green-400 via-green-600 to-transparent blur-[60px] opacity-60 mix-blend-screen animate-aurora-green"></div>
                <div className="absolute bottom-[-10%] left-[30%] w-[40%] h-[90%] bg-gradient-to-t from-purple-500 via-pink-500 to-transparent blur-[70px] opacity-70 mix-blend-screen animate-aurora-purple"></div>
                <div className="absolute bottom-[-15%] right-[10%] w-[30%] h-[85%] bg-gradient-to-t from-blue-500 via-cyan-400 to-transparent blur-[60px] opacity-60 mix-blend-screen animate-aurora-blue"></div>
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 mt-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                        Why work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-blue-500 italic">NFI</span> business ?
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
                        Meet our new standard for corporate network reliability.
                    </p>
                </div>

                {/* Grid 4 Kolom Fitur */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {/* Feature 1 */}
                    <div className="group p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                        <div className="h-16 flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white">Service Level Agreement</h3>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">Robust SLA guarantee up to 99.9%.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="group p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]">
                        <div className="h-16 flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white">Pure Fiber Infrastructure</h3>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">End-to-end fiber optic network.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="group p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        <div className="h-16 flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.571-4.175m6.896-1.558a3.18 3.18 0 00-6.491.545c0 1.077.53 2.035 1.341 2.65" /></svg>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white">Integrated Security</h3>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">Equipped with DDoS protection.</p>
                    </div>
                    {/* Feature 4 */}
                    <div className="group p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                        <div className="h-16 flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white">24/7 Expert Support</h3>
                        <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">Responsive 24/7 expert support.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessHeader;