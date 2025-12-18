import React from 'react';

const BusinessSolutions = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#5D2E8C] mb-2 italic">Solutions for every kind of business</h2>
                    <p className="text-gray-500 text-sm">Learn more about how NFI helps leaders in your sector.</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* KIRI: Ilustrasi */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-business-deal-concept_23-2148102379.jpg?w=996" alt="Business Deal" className="w-full max-w-md object-contain" />
                    </div>

                    {/* KANAN: List */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Item 1 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Small Business</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mt-1">Maximize your business potential with affordable yet stable broadband internet.</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Corporate Solutions</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mt-1">Dedicated Internet (1:1) service with guaranteed high SLA.</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Public Sector</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mt-1">Supporting digitalization of schools and government agencies.</p>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Industry Partnership</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mt-1">Custom network solutions for hospitality and manufacturing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;