import React from 'react';
import { useTranslation } from 'react-i18next';

const BusinessContact = () => {
    const { t } = useTranslation();

    return (
        <section className="pt-20 pb-0 bg-white overflow-hidden">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="relative w-full">
                    {/* === 1. FRAME MONITOR === */}
                    <div className="relative z-0 w-full">
                        <img 
                            src="/images/call-center/computer.svg" 
                            alt="Monitor Frame" 
                            className="w-full h-auto relative z-10 block" 
                        />

                        {/* === 2. AREA KONTEN (DI DALAM LAYAR) === */}
                        <div className="absolute inset-0 z-20 flex flex-col items-center pt-[4%] md:pt-[3%] lg:pt-[7%]">
                            <div className="text-center w-[95%] md:w-[90%] mx-auto mb-1 md:mb-1 lg:mb-6">
                                <h2 className="text-[10px] md:text-sm lg:text-5xl font-bold text-blue-600 mb-0.5 md:mb-1 leading-tight">
                                    {t('business.contact.headline_1')} <span className="italic">{t('business.contact.headline_2')}</span>
                                </h2>
                                
                                <p className="text-[7px] md:text-[9px] lg:text-lg text-gray-500 max-w-3xl mx-auto leading-tight">
                                    {t('business.contact.call_us')} <span className="font-bold text-blue-600">0856-9217-3125</span> {t('business.contact.more_info')}
                                </p>
                                <p className="text-[6px] md:text-[8px] lg:text-sm text-gray-400 mt-0.5 md:mt-0.5 lg:mt-1">
                                    {t('business.contact.availability')}
                                </p>
                            </div>

                            {/* ICONS */}
                            <div className="flex gap-2 md:gap-3 lg:gap-8 items-center justify-center w-full relative z-30 mt-1 md:mt-1 lg:mt-4">
                                <a href="tel:085692173125" className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/call.svg" alt="Call" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                                <a href="#" className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/whatsapp.svg" alt="WhatsApp" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                                <a href="#" className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/gmail.svg" alt="Gmail" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                                <a href="#" className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/instagram.svg" alt="Instagram" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                                <a href="#" className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/linked.svg" alt="LinkedIn" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>
                            </div>
                        </div>

                        {/* === 3. DEKORASI BAWAH === */}
                        <div className="absolute bottom-[23%] md:bottom-[23%] lg:bottom-[25%] left-0 w-full flex justify-between items-end px-[8%] md:px-16 lg:px-24 pointer-events-none z-40">
                            <div className="w-16 md:w-20 lg:w-72 relative z-10 -mb-[1%]">
                                <img src="/images/call-center/desk.svg" alt="Office Desk" className="w-full h-auto object-contain" />
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-8 md:w-10 lg:w-32 z-20">
                                <img src="/images/call-center/human-pointing.svg" alt="Sales Expert" className="w-full h-auto object-contain" />
                            </div>
                            <div className="w-10 md:w-20 lg:w-32 relative z-10 scale-x-[-1]">
                                <img src="/images/call-center/black-cat.gif" alt="Funny Cat" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessContact;