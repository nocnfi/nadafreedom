import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PricingCard from '@/Components/PricingCard';

const PricingGrid = () => {
    // 1. STATE
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Default Lokasi: Kab. Bekasi
    const [currentRegion, setCurrentRegion] = useState('Kab. Bekasi');

    // DATA DUMMY (Kita simpan di variabel agar bisa dipanggil di dua tempat)
    const fallbackPlans = [
        // BEKASI (DEFAULT)
        { id: 1, region: 'Kab. Bekasi', name: 'NFI BASIC', description: 'Economical connection solution for single users.', price: 'IDR 110.000', features: ['Symmetrical 10 Mbps Speed', 'Standard Quality (SD) Streaming', 'No Installation Fee', 'Standard Technical Support'], is_popular: false },
        { id: 2, region: 'Kab. Bekasi', name: 'NFI LITE', description: 'An economical choice for couples or light WFH.', price: 'IDR 130.000', features: ['Symmetrical 15 Mbps Speed', 'Ideal for 1-on-1 Video Calls', 'Free Router Rental', 'Standard Technical Support'], is_popular: false },
        { id: 3, region: 'Kab. Bekasi', name: 'NFI SMART', description: 'Price balance and stability for homes.', price: 'IDR 160.000', features: ['Symmetrical 20 Mbps Speed', '4K Streaming on One Device', 'Free Wi-Fi Router', 'All Pure Fiber Networks'], is_popular: false },
        { id: 4, region: 'Kab. Bekasi', name: 'NFI FAMILY', description: 'The best choice for families and multi-devices.', price: 'IDR 210.000', features: ['Symmetrical 30 Mbps Speed', 'Anti-Buffering for Active Families', 'Priority Technician Response', 'FREE Installation & Wi-Fi 6 Router'], is_popular: true },
        { id: 5, region: 'Kab. Bekasi', name: 'NFI POWER', description: 'Maximum performance for Gamers and Content Creators.', price: 'IDR 300.000', features: ['Symmetrical 100 Mbps Speed', 'Lowest Latency', 'Ideal for Smart Homes', 'Premium 24/7 Support'], is_popular: false },

        // KARAWANG
        { id: 11, region: 'Kab. Karawang', name: 'KARAWANG STARTER', description: 'Internet murah kawasan industri.', price: 'IDR 115.000', features: ['Speed 12 Mbps', 'Streaming Lancar', 'Support 24 Jam'], is_popular: false },
        { id: 12, region: 'Kab. Karawang', name: 'KARAWANG SUPER', description: 'Speed kencang harga pas.', price: 'IDR 220.000', features: ['Speed 35 Mbps', 'Free Router Dual Band', 'Cocok WFH'], is_popular: true },

        // PEMALANG
        { id: 21, region: 'Kab. Pemalang', name: 'PEMALANG HEMAT', description: 'Internet masuk desa.', price: 'IDR 100.000', features: ['Speed 10 Mbps', 'Stabil Cuaca Buruk'], is_popular: false },
    ];

    useEffect(() => {
        // --- LOGIKA 1: AMBIL DATA PAKET ---
        axios.get('/api/plans')
            .then(response => {
                const data = response.data;
                
                // PERBAIKAN: Cek apakah datanya ada isinya?
                // Jika Array valid DAN isinya lebih dari 0, pakai data API.
                // Jika kosong, lempar error agar pindah ke .catch (pakai Dummy)
                if (Array.isArray(data) && data.length > 0) {
                    setPlans(data);
                } else if (data?.data && data.data.length > 0) {
                    setPlans(data.data);
                } else {
                    throw new Error("Data API Kosong, gunakan Fallback.");
                }
                setLoading(false);
            })
            .catch(error => {
                console.log("Menggunakan Data Dummy karena API Error/Kosong");
                setPlans(fallbackPlans); // <--- Pakai data dummy yang sudah didefinisikan di atas
                setLoading(false);
            });

        // --- LOGIKA 2: DETEKSI LOKASI USER ---
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    // Cek Area (Koordinat Kasar)
                    const isKarawang = (lat < -6.20 && lat > -6.45) && (lng > 107.20 && lng < 107.45);
                    const isPemalang = (lat < -6.80 && lat > -7.00) && (lng > 109.30 && lng < 109.60);

                    if (isKarawang) setCurrentRegion('Kab. Karawang');
                    else if (isPemalang) setCurrentRegion('Kab. Pemalang');
                    else setCurrentRegion('Kab. Bekasi'); // Default/Fallback
                },
                () => {
                    setCurrentRegion('Kab. Bekasi'); // Jika akses lokasi ditolak
                }
            );
        }
    }, []);

    // 3. FILTER DATA
    const filteredPlans = plans.filter(plan => plan.region === currentRegion);

    if (loading) {
        return <div className="text-center py-20 animate-pulse text-blue-600 font-semibold">Memuat Paket...</div>;
    }

    return (
        <div className="flex flex-col gap-10">
            
            {/* GRID KARTU HARGA */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start justify-center">
                {filteredPlans.length > 0 ? (
                    filteredPlans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))
                ) : (
                    // Fallback jika tidak ada data sama sekali
                    <div className="col-span-full text-center text-gray-400 py-10">
                        Tidak ada paket tersedia untuk area ini.
                    </div>
                )}
            </div>

            {/* TEXT INFO LOKASI */}
            <div className="text-center mt-4">
                <p className="text-gray-500 italic text-sm md:text-base">
                    saat ini menampilkan paket <span className="font-bold text-[#1A237E] not-italic uppercase">{currentRegion}</span>
                </p>
            </div>

        </div>
    );
};

export default PricingGrid;