import React from 'react';

const MissionSection = () => {
    
    const missions = [
        {
            id: 1,
            title: "Connectivity",
            desc: "Delivering superior connectivity solutions for everyone.",
            icon: "📡" 
        },
        {
            id: 2,
            title: "Infrastructure",
            desc: "Developing and maintaining a resilient network infrastructure.",
            icon: "🏗️"
        },
        {
            id: 3,
            title: "Acceleration",
            desc: "Driving digital acceleration across Indonesia.",
            icon: "🚀"
        },
        {
            id: 4,
            title: "Partnership",
            desc: "Building synergies and strategic partnerships.",
            icon: "🤝"
        }
    ];

    return (
        <div className="animate-fade-in-up w-full flex flex-col justify-center h-full">
            
            {/* 1. TEXT INTRO */}
            <div className="text-center mb-5 px-5">
                
                <p className="text-gray-600 italic text-lg max-w-2xl mx-auto">
                    "We dedicate our efforts to excellence in four strategic areas to achieve our goals."
                </p>
            </div>

            {/* 2. VISUAL TIMELINE (GAMBAR ARROW ANDA) */}
            {/* Bagian ini hanya muncul di layar besar (Laptop/Desktop) */}
            <div className="hidden lg:flex items-center justify-center mb-10 px-4">
                
                {/* GANTI src di bawah ini dengan nama file gambar arrow Anda */}
                <img 
                    src="/images/arrow-mission.svg" 
                    alt="Mission Timeline Flow" 
                    className="w-full max-w-4xl object-contain drop-shadow-sm"
                    onError={(e) => e.target.style.display = 'none'} // Sembunyikan jika gambar gagal load
                />

            </div>

            {/* 3. GRID KARTU MISI */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                {missions.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                        
                        {/* Dekorasi Garis Atas */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        {/* Icon & Nomor */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            
                            {/* --- BAGIAN INI YANG DIUPDATE --- */}
                            {/* Logika: Default abu-abu, Hover jadi Gradient sesuai request */}
                            <span className="text-5xl font-extrabold absolute top-2 right-4 select-none transition-all duration-300
                                text-gray-100 
                                group-hover:text-transparent 
                                group-hover:bg-clip-text 
                                group-hover:bg-gradient-to-r 
                                group-hover:from-[#6717cd] 
                                group-hover:to-[#2871fa]">
                                {item.id}
                            </span>
                            {/* ------------------------------- */}
                            
                        </div>

                        <h4 className="font-bold text-gray-800 text-lg mb-2 relative z-10 group-hover:text-blue-600 transition-colors">
                            {item.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MissionSection;