import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import hook

const PartnersSection = () => {
    const { t } = useTranslation(); // 2. Inisialisasi hook

    // DATA LOGO (Tetap sama karena logo tidak perlu diterjemahkan)
    const partners = [
        { name: "APJII", src: "/images/partners/logo_apjii.png" },
        { name: "Ciptara", src: "/images/partners/logo_ciptara.png" },
        { name: "FMI", src: "/images/partners/logo_fmi.png" },
        { name: "FiberStar", src: "/images/partners/logo_fs.png" },
        { name: "GGC", src: "/images/partners/logo_ggc.png" },
        { name: "Global Optics", src: "/images/partners/logo_global.png" },
        { name: "H3C", src: "/images/partners/logo_h3c.png" },
        { name: "HiOSO", src: "/images/partners/logo_hioso.png" },
        { name: "Horaco", src: "/images/partners/logo_horaco.png" },
        { name: "HSGQ", src: "/images/partners/logo_hsgq.png" },
        { name: "ION", src: "/images/partners/logo_ion.png" },
        { name: "JKT IX", src: "/images/partners/logo_jktix.png" },
        { name: "Kensatel", src: "/images/partners/logo_kensatel.png" },
        { name: "Lenovo", src: "/images/partners/logo_lenovo.png" },
        { name: "Linktel", src: "/images/partners/logo_linktel.png" },
        { name: "Merbabu", src: "/images/partners/logo_merbabu.png" },
        { name: "Mikrobits", src: "/images/partners/logo_mikrobits.png" },
        { name: "Mikrotik", src: "/images/partners/logo_mikrotik.png" },
        { name: "MNI", src: "/images/partners/logo_mni.png" },
        { name: "Nadanet", src: "/images/partners/logo_nadanet.png" },
        { name: "Ruijie", src: "/images/partners/logo_ruiji.png" },
        { name: "Tarmoc", src: "/images/partners/logo_tarmoc.png" },
        { name: "TP-Link", src: "/images/partners/logo_tplink.png" },
        { name: "Zimmlink", src: "/images/partners/Logo_Zimmlink.png" },
        { name: "ZTE", src: "/images/partners/logo_zte.png" },
    ];

    const seamlessPartners = [...partners, ...partners];

    return (
        <section className="w-full py-16 bg-white overflow-hidden font-['Poppins']">
            {/* --- JUDUL SECTION --- */}
            <div className="container mx-auto px-4 mb-10">
                <h3 className="text-center text-gray-400 font-bold uppercase tracking-[0.2em] text-sm leading-relaxed">
                    {t('partners.title')} {/* 3. Gunakan fungsi t() */}
                </h3>
            </div>

            {/* --- MARQUEE CONTAINER --- */}
            <div className="relative w-full">
                
                {/* Gradient Masking */}
                <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* TRACK ANIMASI */}
                <div className="marquee-track items-center">
                    
                    {seamlessPartners.map((partner, index) => (
                        <div 
                            key={index} 
                            className="partner-item flex-shrink-0 mx-6 md:mx-10 h-10 md:h-14 flex items-center justify-center px-2"
                        >
                            <img
                                src={partner.src}
                                alt={`${partner.name} logo`}
                                className="partner-logo max-h-full w-auto object-contain"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PartnersSection;