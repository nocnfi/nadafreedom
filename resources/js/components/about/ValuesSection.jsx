import React from 'react';

const ValuesSection = () => {
    return (
        <div className="animate-fade-in-up flex flex-col lg:flex-row items-center gap-10 h-full">
            <div className="w-full lg:w-1/2">
                <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">PT NADA FREEDOM INDONESIA</h3>
                <p className="text-gray-600 text-sm leading-7 text-justify">
                    At PT Nada Freedom Indonesia, our values are the compass that guides how we work. We adhere to <span className="text-blue-600 font-bold">Integrity & Trust</span>, have a <span className="text-blue-600 font-bold">Customer Focus</span>, supported by <span className="text-blue-600 font-bold">Excellence & Innovation</span>. All realized with <span className="text-blue-600 font-bold">Professionalism</span> and strong <span className="text-blue-600 font-bold">Collaboration</span>.
                </p>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-center items-end h-64">
                <div className="absolute bottom-0 left-0 w-full h-40 bg-orange-400" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 30%, 75% 50%, 50% 10%, 25% 50%, 0 70%)"}}></div>
                <img src="/images/illustration-handshake.png" alt="Collaboration" className="relative z-10 h-56 object-contain" onError={(e) => e.target.src = "https://img.freepik.com/free-vector/partnership-concept-illustration_114360-629.jpg"}/>
            </div>
        </div>
    );
};
export default ValuesSection;