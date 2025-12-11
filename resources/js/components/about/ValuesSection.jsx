import React from 'react';

const ValuesSection = () => {
    return (
        <div className="animate-fade-in-up flex flex-col lg:flex-row items-center gap-12">
            {/* Teks Values */}
            <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">PT Nada Freedom Indonesia</h3>
                <p className="text-gray-600 leading-loose text-justify text-base">
                    At PT Nada Freedom Indonesia, our values are the compass that guides how we
                    work, innovate, and serve our customers every day. We adhere to <span className="text-blue-600 font-bold">Integrity & Trust</span> by upholding honesty and transparency in every service. We have a <span className="text-blue-600 font-bold">Customer Focus</span>, making your satisfaction a priority, supported by the spirit of <span className="text-blue-600 font-bold">Excellence & Innovation</span> to always use the latest technology and exceed quality standards. All
                    of this is realized with <span className="text-blue-600 font-bold">Professionalism</span>, acting competently, responsibly, and
                    efficiently and establishing strong <span className="text-blue-600 font-bold">Collaboration</span> both internally and with strategic
                    partners to achieve optimal results.
                </p>
            </div>

            {/* Ilustrasi Salaman */}
            <div className="w-full lg:w-1/3 flex justify-center relative">
                {/* Floating Icons Values */}
                <div className="absolute -top-6 -left-6 bg-yellow-100 p-3 rounded-full animate-bounce delay-700">
                    <span className="text-2xl">💡</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-100 p-3 rounded-full animate-bounce delay-1000">
                    <span className="text-2xl">🤝</span>
                </div>
                
                <img 
                    src="https://img.freepik.com/free-vector/partnership-concept-illustration_114360-629.jpg" 
                    alt="Values Collaboration" 
                    className="w-64 md:w-80 mix-blend-multiply"
                />
            </div>
        </div>
    );
};

export default ValuesSection;