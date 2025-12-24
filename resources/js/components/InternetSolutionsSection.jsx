import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook translasi
import PricingGrid from '@/Components/PricingGrid';

const InternetSolutionsSection = () => {
    const { t } = useTranslation(); // Inisialisasi hook

    // Data fitur menggunakan fungsi t() agar teks berubah otomatis saat ganti bahasa
    const bufferingFeatures = [
        {
            title: t('internet_solutions.feature_1_title'),
            items: [
                t('internet_solutions.feature_1_item_1'),
                t('internet_solutions.feature_1_item_2')
            ]
        },
        {
            title: t('internet_solutions.feature_2_title'),
            items: [
                t('internet_solutions.feature_2_item_1'),
                t('internet_solutions.feature_2_item_2')
            ]
        },
        {
            title: t('internet_solutions.feature_3_title'),
            items: [
                t('internet_solutions.feature_3_item_1'),
                t('internet_solutions.feature_3_item_2')
            ]
        }
    ];

    return (
        <section 
            className="relative w-full font-['Poppins'] bg-white overflow-hidden"
            style={{ 
                backgroundImage: "url('/images/gradient-world.svg')", 
                backgroundSize: '100% auto', 
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* === MASKING GRADIENT === */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">

                {/* === 1. BUFFERING SECTION === */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-0">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-8">
                        <div className="w-80 md:w-[26rem] lg:w-[30rem] relative z-10">
                            <img src="/images/wifi.svg" alt="Working from home" className="w-full h-auto object-contain drop-shadow-2xl"/>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 italic leading-tight mb-6 tracking-tight">
                            {t('internet_solutions.buffering_title')}
                        </h2>
                        <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed max-w-lg">
                            {t('internet_solutions.buffering_desc')}
                        </p>

                        <div className="space-y-8">
                            {bufferingFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-8 h-8">
                                        <img src="/icons/checklist.svg" alt="Check" className="w-full h-full object-contain"/>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-extrabold italic text-lg mb-2 uppercase">{feature.title}</h3>
                                        <ul className="space-y-2">
                                            {feature.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-600 font-medium leading-relaxed">
                                                    <span className="w-3 h-3 bg-blue-600 mr-3 mt-1.5 flex-shrink-0 rounded-sm"></span>
                                                    <span className="flex-1">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === 2. GAMBAR FAMILY === */}
                <div className="w-full flex justify-end relative z-0 mt-8 mb-16 lg:-mr-64 xl:-mr-96 pointer-events-none">
                      <div className="w-48 md:w-64 lg:w-80">
                        <img src="/images/family-fill.svg" alt="Happy Family Decoration" className="w-full h-auto opacity-100" />
                    </div>
                </div>

                {/* === 3. PRICING SECTION === */}
                <div className="relative z-10">
                    <div className="mb-12 max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 tracking-tight uppercase">
                            {t('internet_solutions.pricing_title')}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 font-light">
                            {t('internet_solutions.pricing_subtitle')} <span className="text-blue-600 font-semibold">{t('internet_solutions.pricing_plan')}</span>. {t('internet_solutions.pricing_desc')}
                        </p>
                    </div>

                    <PricingGrid />
                </div>
            </div>
        </section>
    );
};

export default InternetSolutionsSection;