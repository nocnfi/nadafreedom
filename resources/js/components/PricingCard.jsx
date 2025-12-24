import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import hook

const PricingCard = ({ plan }) => {
    const { t } = useTranslation(); // 2. Inisialisasi hook

    return (
        <div 
            className={`
                relative flex flex-col p-6 rounded-[2rem] h-full bg-white transition-all duration-300
                ${plan.is_popular 
                    ? 'border-2 border-blue-600 shadow-xl z-10' 
                    : 'border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1'
                }
            `}
        >
            {/* Header */}
            <div className="mb-4">
                <h3 className="text-xl font-extrabold text-gray-900 italic uppercase">{plan.name}</h3>
                <p className="text-xs text-gray-500 mt-2 h-10 leading-snug">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
                <p className="text-lg font-extrabold text-gray-900 italic">
                    {plan.price} <span className="text-xs font-normal text-gray-500 not-italic">/ {t('pricing.per_month')}</span>
                </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
                {plan.features && plan.features.map((feature, idx) => {
                    let label = "";
                    if (typeof feature === 'string') label = feature;
                    else if (feature.feature_name) label = feature.feature_name;
                    else if (feature.item) label = feature.item;

                    return (
                        <li key={idx} className="flex items-start text-xs text-gray-600">
                            <span className="mr-2 mt-0.5 flex-shrink-0 text-gray-900">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1"/>
                                    <path d="M4 7L6 9L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <span className="leading-tight">{label}</span>
                        </li>
                    );
                })}
            </ul>

            {/* Button Action */}
            <div className="mt-auto w-full">
                {plan.is_popular ? (
                    <button className="
                        w-full py-3 
                        rounded-tl-xl rounded-br-xl rounded-tr-[3em] rounded-bl-[3em]
                        bg-gradient-to-r from-blue-600 to-purple-600 
                        text-white text-sm font-bold tracking-wide
                        shadow-lg shadow-blue-500/30 
                        hover:from-purple-600 hover:to-blue-600
                        hover:shadow-blue-500/50 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5
                        transition-all duration-500 ease-in-out
                    ">
                        {t('pricing.buy_now')} {/* 3. Gunakan Key JSON */}
                    </button>
                ) : (
                    <div className="
                        p-[2px] 
                        rounded-tl-xl rounded-br-xl rounded-tr-[3em] rounded-bl-[3em]
                        bg-gradient-to-r from-blue-600 to-purple-600
                        hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300
                    ">
                        <button className="
                            w-full py-[10px]
                            rounded-tl-xl rounded-br-xl rounded-tr-[3em] rounded-bl-[3em]
                            bg-white 
                            text-gray-900 text-sm font-bold tracking-wide
                            hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white
                            transition-all duration-300
                        ">
                            {t('pricing.buy_now')} {/* 3. Gunakan Key JSON */}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PricingCard;