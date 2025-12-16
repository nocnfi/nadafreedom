import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PricingCard from '@/Components/PricingCard';

const PricingGrid = () => {
    // Inisialisasi state dengan array kosong agar aman
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/plans')
            .then(response => {
                const data = response.data;
                
                // Cek 1: Apakah data langsung berupa Array?
                if (Array.isArray(data)) {
                    setPlans(data);
                } 
                // Cek 2: Apakah data dibungkus property 'data' (Laravel Resource)?
                else if (data && Array.isArray(data.data)) {
                    setPlans(data.data);
                } 
                // Jika bukan keduanya, anggap error dan lempar ke catch
                else {
                    console.error("Format data API salah (Bukan Array):", data);
                    throw new Error("Invalid Data Format");
                }
                
                setLoading(false);
            })
            .catch(error => {
                console.error("Gagal fetch API, menggunakan data Dummy:", error);
                
                // === DATA FALLBACK (DUMMY) ===
                // Data ini akan dipakai jika API mati/belum ada
                setPlans([
                    { 
                        id: 1, name: 'NFI BASIC', description: 'Economical connection solution for single users.', price: 'IDR 110.000', 
                        features: ['Symmetrical 10 Mbps Speed', 'Standard Quality (SD) Streaming', 'No Installation Fee', 'Standard Technical Support'], is_popular: false 
                    },
                    { 
                        id: 2, name: 'NFI LITE', description: 'An economical choice for couples or light WFH.', price: 'IDR 130.000', 
                        features: ['Symmetrical 15 Mbps Speed', 'Ideal for 1-on-1 Video Calls', 'Free Router Rental', 'Standard Technical Support'], is_popular: false 
                    },
                    { 
                        id: 3, name: 'NFI SMART', description: 'Price balance and stability for homes.', price: 'IDR 160.000', 
                        features: ['Symmetrical 20 Mbps Speed', '4K Streaming on One Device', 'Free Wi-Fi Router', 'All Pure Fiber Networks'], is_popular: false 
                    },
                    { 
                        id: 4, name: 'NFI FAMILY', description: 'The best choice for families and multi-devices.', price: 'IDR 210.000', 
                        features: ['Symmetrical 30 Mbps Speed', 'Anti-Buffering for Active Families', 'Priority Technician Response', 'FREE Installation & Wi-Fi 6 Router'], is_popular: true 
                    },
                    { 
                        id: 5, name: 'NFI POWER', description: 'Maximum performance for Gamers and Content Creators.', price: 'IDR 300.000', 
                        features: ['Symmetrical 100 Mbps Speed', 'Lowest Latency', 'Ideal for Smart Homes', 'Premium 24/7 Support'], is_popular: false 
                    },
                ]);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-20 animate-pulse text-blue-600 font-semibold">Loading Price Packages...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
            {/* Tambahkan pengecekan Array.isArray lagi di sini untuk keamanan ganda */}
            {Array.isArray(plans) && plans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
            ))}
        </div>
    );
};

export default PricingGrid;