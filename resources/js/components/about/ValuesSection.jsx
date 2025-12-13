import React from 'react';

const ValuesSection = () => {
    
    const valuesList = [
        "Integrity & Trust",
        "Customer Focus",
        "Excellence & Innovation",
        "Professionalism",
        "Collaboration"
    ];

    return (
        <div className="animate-fade-in-up flex flex-col lg:flex-row items-center gap-12 h-full w-full py-6">
            
            {/* --- BAGIAN KIRI: TEKS & DESKRIPSI --- */}
            <div className="w-full lg:w-1/2 px-4 relative z-30">
                <h3 className="font-bold text-gray-400 mb-3 uppercase tracking-widest text-xs">
                    PT NADA FREEDOM INDONESIA
                </h3>
                
                <div className="text-gray-600 leading-8 text-justify mb-8 text-[15px] space-y-4">
                    <p>
                        At PT Nada Freedom Indonesia, our values are the compass that guides how we work, innovate, and serve our customers every day.
                    </p>
                    <p>
                        We adhere to <span className="font-bold text-blue-600">Integrity & Trust</span> by upholding honesty and transparency in every service. We have a <span className="font-bold text-blue-600">Customer Focus</span>, making your satisfaction a priority, supported by the spirit of <span className="font-bold text-blue-600">Excellence & Innovation</span> to always use the latest technology and exceed quality standards.
                    </p>
                    <p>
                        All of this is realized with <span className="font-bold text-blue-600">Professionalism</span>, acting competently, responsibly, and efficiently and establishing strong <span className="font-bold text-blue-600">Collaboration</span> both internally and with strategic partners to achieve optimal results.
                    </p>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-3 mt-6">
                    {valuesList.map((val, idx) => (
                        <div key={idx} className="group px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-sm font-semibold text-gray-500 hover:border-blue-400 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-600 transition-colors"></span>
                            <span className="group-hover:text-blue-600 transition-colors">{val}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- BAGIAN KANAN: KOMPOSISI GAMBAR (FIXED SIZE) --- */}
            {/* Container luar diatur tingginya (h-[400px] s/d h-[500px]) agar elemen absolute punya ruang */}
            <div className="w-full lg:w-1/2 flex justify-center items-end relative mt-10 lg:mt-0 h-[380px] md:h-[480px]">
                
                {/* WRAPPER RELATIVE: Membungkus semua gambar agar center */}
                <div className="relative w-full max-w-lg h-full flex justify-center items-end pb-2">

                    {/* LAYER 1: BACKGROUND GLOBE (Paling Belakang) */}
                    {/* Z-Index: 0 */}
                    <img 
                        src="/images/globe-values.svg" 
                        alt="Background Globe" 
                        className="absolute z-0 opacity-90 object-contain"
                        style={{ 
                            width: '85%',       /* Lebar globe */
                            bottom: '20%',      /* Naik sedikit dari bawah */
                            left: '50%',        /* Trik centering absolute */
                            transform: 'translateX(-50%)' /* Center horizontal */
                        }} 
                    />

                    {/* LAYER 2: ANAK PANAH (Tengah - Bergerak) */}
                    {/* Z-Index: 10 */}
                    <img 
                        src="/images/arrow-values.svg"
                        alt="Rising Arrow" 
                        className="absolute z-10 animate-smooth-draw object-contain"
                        
                       
                    />

                    {/* LAYER 3: ORANG SALAMAN (Paling Depan) */}
                    {/* Z-Index: 20 */}
                    <img 
                        src="/images/human-values.svg" 
                        alt="People Shaking Hands" 
                        className="absolute z-20 object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default ValuesSection;