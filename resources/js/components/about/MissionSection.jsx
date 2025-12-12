import React from 'react';

const MissionSection = () => {
    return (
        <div className="animate-fade-in-up w-full">
            <div className="text-center mb-10">
                <h3 className="text-lg font-bold text-gray-700">Our mission serves as a blueprint explaining how we achieve excellence.</h3>
                <p className="text-gray-500 italic">We dedicate our efforts to the following four strategic areas:</p>
            </div>

            {/* TIMELINE VISUAL */}
            <div className="relative mb-8 hidden lg:flex items-center px-4">
                 <div className="flex -space-x-6 mr-[-2px] z-10 shrink-0">
                    <div className="w-16 h-20 bg-[#3d8da3]" style={{clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)'}}></div>
                    <div className="w-16 h-20 bg-[#2c6e80]" style={{clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)'}}></div>
                </div>
                <div className="flex-grow h-3 bg-[#2c6e80] relative flex items-center justify-between px-16">
                    {[1,2,3,4].map(i => <div key={i} className="w-4 h-6 bg-cyan-400 rounded-sm top-[-8px] relative"></div>)}
                </div>
                <div className="relative z-10 ml-[-5px] shrink-0">
                    <img src="https://cdn-icons-png.flaticon.com/512/1605/1605350.png" className="w-20 h-20 drop-shadow-lg" alt="Target"/>
                </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                {[
                    {id:1, t:"Delivering superior connectivity solutions"},
                    {id:2, t:"Developing and maintaining a resilient network infrastructure"},
                    {id:3, t:"Driving digital acceleration"},
                    {id:4, t:"Building synergies and strategic partnerships"}
                ].map(item => (
                    <div key={item.id} className="bg-white shadow rounded-xl p-6 relative text-center border-t-4 border-blue-600 hover:-translate-y-1 transition-transform">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white shadow rounded-full flex items-center justify-center font-bold text-blue-600">{item.id}</div>
                        <p className="text-sm text-gray-700 mt-2">{item.t}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MissionSection;