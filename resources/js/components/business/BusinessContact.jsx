import React from 'react';
import { useTranslation } from 'react-i18next';

const BusinessContact = () => {
    const { t } = useTranslation();

    // Data Kontak Terpusat
    const contactInfo = {
        phone: "085692173125",
        email: "info@nfi.net.id",
        whatsapp: "6285692173125",
        instagram: "https://www.instagram.com/nadafreedomindonesia?utm_source=qr&igsh=Zmg1YjVja3lxZWhy",
        facebook: "https://www.facebook.com/share/17wuieuQyv/",
        linkedIn: "https://www.linkedin.com/in/nada-freedom-indonesia-4109573a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    };

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
                                    {t('business.contact.call_us')}{' '}
                                    {/* Direct Call pada teks nomor */}
                                    <a href={`tel:${contactInfo.phone}`} className="font-bold text-blue-600 hover:underline">
                                        {contactInfo.phone}
                                    </a> 
                                    {' '}{t('business.contact.more_info')}
                                </p>
                                <p className="text-[6px] md:text-[8px] lg:text-sm text-gray-400 mt-0.5 md:mt-0.5 lg:mt-1">
                                    {t('business.contact.availability')}
                                </p>
                            </div>

                            {/* ICONS - SEMUA LINK SUDAH AKTIF */}
                            <div className="flex gap-2 md:gap-3 lg:gap-8 items-center justify-center w-full relative z-30 mt-1 md:mt-1 lg:mt-4">
                                {/* 1. Direct Call Button */}
                                <a href={`tel:${contactInfo.phone}`} className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/call.svg" alt="Call NFI" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>

                                {/* 2. WhatsApp Button */}
                                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/whatsapp.svg" alt="WhatsApp NFI" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>

                                {/* 3. Email Button */}
                                <a href={`mailto:${contactInfo.email}`} className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/gmail.svg" alt="Email NFI" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>

                                {/* 4. Instagram Button */}
                                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/instagram.svg" alt="Instagram NFI" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
                                </a>

                                {/* 5. LinkedIn Button (Update Baru) */}
                                <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="group w-6 h-6 md:w-6 md:h-6 lg:w-20 lg:h-20 transition-transform hover:scale-110">
                                    <img src="/images/call-center/linked.svg" alt="LinkedIn NFI" className="w-full h-full drop-shadow-md group-hover:drop-shadow-xl" />
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