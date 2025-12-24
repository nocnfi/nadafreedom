import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const BusinessSolutions = () => {
    const { t } = useTranslation();
    const defaultImage = "https://img.freepik.com/free-vector/hand-drawn-business-deal-concept_23-2148102379.jpg?w=996";
    const [activeImage, setActiveImage] = useState(defaultImage);

    const solutions = [
        {
            id: 1,
            title: t('business.solutions.item_1_title'),
            desc: t('business.solutions.item_1_desc'),
            imageUrl: "https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148896826.jpg?w=996",
            iconSrc: "/images/presentation.svg"
        },
        {
            id: 2,
            title: t('business.solutions.item_2_title'),
            desc: t('business.solutions.item_2_desc'),
            imageUrl: "https://img.freepik.com/free-vector/flat-saas-concept-illustration_23-2149230533.jpg?w=996",
            iconSrc: "/images/corporate.svg"
        },
        {
            id: 3,
            title: t('business.solutions.item_3_title'),
            desc: t('business.solutions.item_3_desc'),
            imageUrl: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-3662.jpg?w=996",
            iconSrc: "/images/observatory.svg"
        },
        {
            id: 4,
            title: t('business.solutions.item_4_title'),
            desc: t('business.solutions.item_4_desc'),
            imageUrl: "https://img.freepik.com/free-vector/industry-concept-illustration_114360-3308.jpg?w=996",
            iconSrc: "/images/innovation.svg"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#5D2E8C] mb-2 italic">
                        {t('business.solutions.title')}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {t('business.solutions.subtitle')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 flex justify-center h-[400px] items-center relative overflow-hidden rounded-2xl bg-white shadow-inner">
                        <img 
                            key={activeImage}
                            src={activeImage} 
                            alt="Business Illustration" 
                            className="w-full h-full object-contain hover:scale-105 transition-all duration-500 ease-in-out animate-fade-in mix-blend-multiply" 
                        />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        {solutions.map((item) => (
                            <div 
                                key={item.id} 
                                onMouseEnter={() => setActiveImage(item.imageUrl)}
                                className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md cursor-pointer transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                                    <img 
                                        src={item.iconSrc} 
                                        alt={item.title} 
                                        className="w-8 h-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-800 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;