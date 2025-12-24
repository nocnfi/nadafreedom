import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import hook

const SolutionsSection = () => {
    const { t } = useTranslation(); // 2. Inisialisasi hook

    // 3. Gunakan t() untuk setiap judul dan deskripsi
    const features = [
        {
            id: 1,
            title: t('solutions.feat_1_title'),
            icon: "/icons/rocket.svg",
            desc: t('solutions.feat_1_desc')
        },
        {
            id: 2,
            title: t('solutions.feat_2_title'),
            icon: "/icons/jack.svg",
            desc: t('solutions.feat_2_desc')
        },
        {
            id: 3,
            title: t('solutions.feat_3_title'),
            icon: "/icons/customer-service.svg",
            desc: t('solutions.feat_3_desc')
        },
        {
            id: 4,
            title: t('solutions.feat_4_title'),
            icon: "/icons/price-tag.svg",
            desc: t('solutions.feat_4_desc')
        }
    ];

    return (
        <section className="w-full font-['Poppins'] py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                
                {/* --- HEADER SECTION --- */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700 uppercase mb-2 tracking-wide flex justify-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600 text-center">
                            {/* 4. Gunakan t() untuk Header */}
                            {t('solutions.header')}
                        </span>
                    </h2>
                    <p className="text-gray-500 italic font-medium text-sm md:text-base text-center">
                        {/* 5. Gunakan t() untuk Subheader */}
                        {t('solutions.subheader')}
                    </p>
                </div>

                {/* --- FEATURES GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-0 w-full relative z-10">
                    {features.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-center px-2">
                            <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                <img 
                                    src={item.icon} 
                                    alt={item.title} 
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto text-center">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- FOOTER BANNER --- */}
            <div className="relative w-full h-[362px] bg-white flex items-center justify-center -mt-10 z-0">
                <img 
                    src="/images/bg.svg"
                    alt="Freedom Background"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>

                <div className="relative z-20 w-full max-w-full px-4 flex justify-center items-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold italic tracking-tighter custom-text-color drop-shadow-sm text-center leading-normal py-4 pr-6 w-auto">
                        #FREEDOM OF EXPRESSION
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;