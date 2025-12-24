import React from 'react';
import { useTranslation } from 'react-i18next';

// Data tetap diekspor untuk kebutuhan Marquee di ContactUs
export const reviewsData = [
    { id: 1, img: "https://i.pravatar.cc/150?img=32", name: "Sarah J.", stars: 5 },
    { id: 2, img: "https://i.pravatar.cc/150?img=12", name: "Michael T.", stars: 5 },
    { id: 3, img: "https://i.pravatar.cc/150?img=5", name: "Jessica W.", stars: 5 },
    { id: 4, img: "https://i.pravatar.cc/150?img=11", name: "David K.", stars: 4 },
    { id: 5, img: "https://i.pravatar.cc/150?img=3", name: "Emily R.", stars: 5 },
    { id: 6, img: "https://i.pravatar.cc/150?img=59", name: "James L.", stars: 5 },
    { id: 7, img: "https://i.pravatar.cc/150?img=24", name: "Linda M.", stars: 4 },
    { id: 8, img: "https://i.pravatar.cc/150?img=60", name: "Robert P.", stars: 5 },
    { id: 9, img: "https://i.pravatar.cc/150?img=9", name: "William S.", stars: 5 },
    { id: 10, img: "https://i.pravatar.cc/150?img=44", name: "Karen B.", stars: 5 },
];

const ReviewCard = ({ data }) => {
    const { t } = useTranslation();

    return (
        // Styling CSS (Tailwind) di bawah ini tetap asli 100%
        <div className="bg-white p-4 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col relative shrink-0 transition-transform hover:scale-105 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
                <img 
                    src={data.img} 
                    alt={data.name} 
                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <div className="flex flex-col">
                    <div className="flex text-yellow-400 text-[10px]">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>{i < data.stars ? '★' : '☆'}</span>
                        ))}
                    </div>
                    <span className="text-gray-900 text-[11px] font-bold mt-0.5">
                        {data.name}
                    </span>
                </div>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                {/* Teks diambil dari JSON berdasarkan ID ulasan */}
                "{t(`reviews.text_${data.id}`)}"
            </p>
        </div>
    );
};

export default ReviewCard;