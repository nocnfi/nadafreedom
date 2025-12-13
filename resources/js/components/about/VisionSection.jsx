import React from 'react';

const VisionSection = () => {
    return (
        <div className="animate-fade-in-up flex flex-col md:flex-row items-center justify-between gap-4 h-full relative">
            
            {/* --- 1. BAGIAN KIRI: SVG ILUSTRASI UTAMA --- */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <img 
                    src="/images/vision-human.svg" /* Ganti dengan SVG Kiri Anda */
                    alt="Vision Left" 
                    className="h-48 md:h-64 object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/3079/3079165.png"} 
                />
            </div>

            {/* --- 2. BAGIAN TENGAH: TEKS VISI --- */}
            <div className="w-full md:w-1/3 text-center z-10 px-4">
                
                
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-4">
                    Realizing Indonesia's <br/>
                    <span className="text-blue-600">Digital Future</span>
                </h2>

                <div className="w-12 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>

                <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                    <p>
                        By providing <span className="font-bold text-gray-800">Fast and Efficient Network Solutions</span>.
                    </p>
                    <p className="mt-2">
                        Created through <span className="text-blue-600 font-bold">Creative Ideas</span> and <span className="text-blue-600 font-bold">Technological Excellence</span>.
                    </p>
                </div>

            </div>

            {/* --- 3. BAGIAN KANAN: SVG DEKORASI TAMBAHAN --- */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                <img 
                    src="/images/vision-mount.svg" /* Ganti dengan SVG Kanan Anda */
                    alt="Vision Right" 
                    className="h-48 md:h-64 object-contain opacity-90 hover:rotate-3 transition-transform duration-500"
                    onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/1183/1183672.png"} 
                />
            </div>
            
        </div>
    );
};

export default VisionSection;