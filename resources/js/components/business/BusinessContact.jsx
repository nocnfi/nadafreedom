import React from 'react';

const BusinessContact = () => {
    return (
        <section className="pt-20 pb-0 bg-white overflow-hidden">
            <div className="container mx-auto px-4 flex justify-center">
                
                {/* Wrapper Utama (Full Width untuk Monitor Besar) */}
                <div className="relative w-full">

                    {/* === 1. FRAME MONITOR (BACKGROUND UTAMA) === */}
                    <div className="relative z-0 w-full">
                        <img 
                            src="/images/call-center/computer.svg" 
                            alt="Monitor Frame" 
                            className="w-full h-auto relative z-10 block" 
                        />

                        {/* === 2. AREA KONTEN (DI DALAM LAYAR) === */}
                        {/* PT (Padding Top):
                           - Mobile: 3%
                           - Tablet (sm): 1% (Ditarik mentok ke atas agar jauh dari orang)
                           - Desktop (md): 7% (Normal, di tengah)
                        */}
                        <div className="absolute inset-0 z-20 flex flex-col items-center pt-[3%] sm:pt-[1%] md:pt-[5%]">
                            
                            {/* Header Text */}
                            <div className="text-center w-[95%] sm:w-[90%] mx-auto mb-1 sm:mb-1 md:mb-6">
                                {/* Headline */}
                                <h2 className="text-[10px] sm:text-sm md:text-5xl font-bold text-blue-600 mb-0.5 sm:mb-1 leading-tight">
                                    Contact an <span className="italic">NFI</span> Business sales expert
                                </h2>
                                
                                {/* Subtitle 1 */}
                                <p className="text-[7px] sm:text-[9px] md:text-lg text-gray-500 max-w-3xl mx-auto leading-tight">
                                    Call us at <span className="font-bold text-blue-600">0856-9217-3125</span> for more information.
                                </p>
                                
                                {/* Subtitle 2 */}
                                <p className="text-[6px] sm:text-[8px] md:text-sm text-gray-400 mt-0.5 sm:mt-1">
                                    Our sales experts are available Monday - Saturday, 9:00 AM - 9:00 PM WIB.
                                </p>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex gap-2 sm:gap-3 md:gap-8 items-center justify-center w-full relative z-30 mt-0.5 sm:mt-1 md:mt-4">
                                {/* Phone */}
                                <a href="tel:085692173125" className="group w-5 h-5 sm:w-7 sm:h-7 md:w-20 md:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/call.svg" alt="Call" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                                {/* WhatsApp */}
                                <a href="#" className="group w-5 h-5 sm:w-7 sm:h-7 md:w-20 md:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/whatsapp.svg" alt="WhatsApp" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                                {/* Gmail */}
                                <a href="#" className="group w-5 h-5 sm:w-7 sm:h-7 md:w-20 md:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/gmail.svg" alt="Gmail" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                                {/* Instagram */}
                                <a href="#" className="group w-5 h-5 sm:w-7 sm:h-7 md:w-20 md:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/instagram.svg" alt="Instagram" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                                {/* LinkedIn */}
                                <a href="#" className="group w-5 h-5 sm:w-7 sm:h-7 md:w-20 md:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/linked.svg" alt="LinkedIn" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                            </div>
                        </div>

                        {/* === 3. DEKORASI BAWAH (MEJA & ORANG) === */}
                        <div className="absolute bottom-[22%] sm:bottom-[23%] left-0 w-full flex justify-between items-end px-[8%] sm:px-24 pointer-events-none z-30">
                            
                            {/* A. MEJA (Kiri Bawah) */}
                            {/* Mobile: w-14
                                Tablet (sm): w-20 (Kecil agar aman)
                                Desktop (md): w-64 (Besar Normal)
                                Large (lg): w-80 (Besar Normal)
                            */}
                            <div className="w-14 sm:w-20 md:w-64 lg:w-80 relative z-10 -mb-[1%]">
                                <img 
                                    src="/images/call-center/desk.svg" 
                                    alt="Office Desk" 
                                    className="w-full h-auto object-contain" 
                                />
                            </div>

                            {/* B. ORANG MENUNJUK (Tengah Bawah) */}
                            {/* Mobile: w-9
                                Tablet (sm): w-10 (Sangat Kecil agar tidak nabrak ikon)
                                Desktop (md): w-32 (Besar Normal)
                                Large (lg): w-40 (Besar Normal)
                            */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-9 sm:w-10 md:w-32 lg:w-30 z-20">
                                <img 
                                    src="/images/call-center/human-pointing.svg" 
                                    alt="Sales Expert" 
                                    className="w-full h-auto object-contain" 
                                />
                            </div>

                            {/* C. Area Kosong Kanan */}
                            <div className="w-8 sm:w-20 lg:w-24"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusinessContact;