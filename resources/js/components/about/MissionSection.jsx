import React from 'react';

const MissionSection = () => {
    return (
        <div className="animate-fade-in-up">
            <div className="text-center mb-10">
                <h3 className="text-xl font-bold text-gray-700">
                    Our mission serves as a blueprint explaining how we achieve excellence.
                </h3>
                <p className="text-gray-500 italic">
                    We dedicate our efforts to the following four strategic areas:
                </p>
            </div>

            {/* 4 Strategic Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                    { id: 1, text: "Delivering superior connectivity solutions" },
                    { id: 2, text: "Developing and maintaining a resilient and sustainable network infrastructure" },
                    { id: 3, text: "Driving digital acceleration" },
                    { id: 4, text: "Building synergies and strategic partnerships" }
                ].map((item) => (
                    <div key={item.id} className="bg-blue-50 rounded-xl p-6 relative group hover:-translate-y-2 transition-transform duration-300 border border-blue-100">
                        <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                            {item.id}
                        </div>
                        <p className="mt-4 text-gray-700 font-medium text-center md:text-left leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
            
            {/* Panah Dekorasi */}
            <div className="mt-12 hidden lg:block relative h-4 bg-gray-100 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20"></div>
                <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-300 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-[12%] w-3 h-3 bg-blue-600 rounded-full -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-[37%] w-3 h-3 bg-blue-600 rounded-full -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-[62%] w-3 h-3 bg-blue-600 rounded-full -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-[87%] w-3 h-3 bg-blue-600 rounded-full -translate-y-1/2"></div>
            </div>
        </div>
    );
};

export default MissionSection;