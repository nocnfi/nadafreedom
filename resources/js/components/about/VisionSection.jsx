import React from 'react';

const VisionSection = () => {
    return (
        <div className="animate-fade-in-up flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            
            {/* Ilustrasi Orang & Teropong */}
            <div className="w-full md:w-1/3 flex justify-center z-10">
                <img src="/images/illustration-vision.svg" alt="Vision" className="w-48 md:w-64" onError={(e) => e.target.src='https://cdn-icons-png.flaticon.com/512/3176/3176366.png'} />
            </div>

            {/* Teks Vision */}
            <div className="w-full md:w-2/3 text-center md:text-right z-10">
                <h3 className="text-xl md:text-3xl font-bold text-blue-900 leading-snug">
                    Realizing Indonesia's Digital Future by Providing <br/>
                    <span className="text-blue-500">Fast and Efficient Network Solutions</span> <br/>
                    Created Through <br/>
                    Creative Ideas and Technological Excellence.
                </h3>
                <div className="mt-4 flex justify-end">
                    <div className="h-1 w-20 bg-yellow-400 rounded-full"></div>
                </div>
            </div>
            
            {/* Dekorasi Gunung */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none z-0">
                <svg width="300" height="150" viewBox="0 0 300 150" fill="#1e3a8a"><path d="M0 150 L100 50 L200 100 L300 0 V150 H0 Z" /></svg>
            </div>
        </div>
    );
};

export default VisionSection;