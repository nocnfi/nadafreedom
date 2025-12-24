import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PricingCard from '@/Components/PricingCard';

// Menerima props 'customRegion'. 
// Jika ada isinya, kita pakai itu. Jika null/undefined, kita pakai logika otomatis.
const PricingGrid = ({ customRegion = null }) => {
    // 1. STATE
    const [regionsData, setRegionsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [internalRegion, setInternalRegion] = useState('Kab. Bekasi'); // Default internal

    // Data Fallback (Simpanan jika API mati)
    const fallbackRegions = [
        {
            id: 1, region_name: 'Kab. Bekasi',
            plans: [
                { name: 'NFI BASIC', price: 'IDR 110.000', description: 'Economical solution.', is_popular: false, features: [{feature_name:'Speed 10 Mbps'}] },
                { name: 'NFI FAMILY', price: 'IDR 210.000', description: 'Best for families.', is_popular: true, features: [{feature_name:'Speed 30 Mbps'}] }
            ]
        },
        {
            id: 2, region_name: 'Kab. Karawang',
            plans: [
                { name: 'KRW STARTER', price: 'IDR 115.000', description: 'Hemat.', is_popular: false, features: [{feature_name:'Speed 15 Mbps'}] }
            ]
        },
        {
            id: 3, region_name: 'Kab. Pemalang',
            plans: [
                { name: 'PML HEMAT', price: 'IDR 100.000', description: 'Murah.', is_popular: true, features: [{feature_name:'Speed 10 Mbps'}] }
            ]
        }
    ];

    useEffect(() => {
        // A. FETCH DATA (Selalu jalan dimanapun komponen ini dipasang)
        axios.get('/api/pricing-regions')
            .then(response => {
                const data = response.data;
                if (Array.isArray(data) && data.length > 0) {
                    setRegionsData(data);
                } else {
                    throw new Error("Empty API");
                }
                setLoading(false);
            })
            .catch(() => {
                setRegionsData(fallbackRegions);
                setLoading(false);
            });

        // B. GEOLOCATION (Hanya jalan jika TIDAK ADA customRegion dari Parent)
        if (!customRegion && "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    const isKarawang = (lat < -6.20 && lat > -6.45) && (lng > 107.20 && lng < 107.45);
                    const isPemalang = (lat < -6.80 && lat > -7.00) && (lng > 109.30 && lng < 109.60);

                    if (isKarawang) setInternalRegion('Kab. Karawang');
                    else if (isPemalang) setInternalRegion('Kab. Pemalang');
                    else setInternalRegion('Kab. Bekasi');
                },
                () => setInternalRegion('Kab. Bekasi')
            );
        }
    }, [customRegion]); // Re-run effect jika customRegion berubah (tapi geolocation diblock logic if)

    // 2. LOGIKA PENENTUAN WILAYAH AKTIF
    // Prioritas: customRegion (dari Dropdown) > internalRegion (dari Geolocation)
    const activeRegionName = customRegion || internalRegion;

    // 3. FILTER DATA
    const activeRegionData = regionsData.find(r => r.region_name === activeRegionName);
    const activePlans = activeRegionData ? activeRegionData.plans : [];

    if (loading) {
        return <div className="text-center py-10 animate-pulse text-blue-600 font-semibold">Memuat paket...</div>;
    }

    return (
        <div className="flex flex-col gap-10">
            {/* GRID KARTU HARGA */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start justify-center">
                {activePlans.length > 0 ? (
                    activePlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-10">
                        <p className="text-gray-400 text-lg">
                            Paket untuk area <span className="font-bold">{activeRegionName}</span> belum tersedia.
                        </p>
                    </div>
                )}
            </div>

            {/* INFO LOKASI (Opsional, matikan jika tidak ingin double info dengan Dropdown) */}
            {!customRegion && (
                <div className="text-center mt-4">
                    <p className="text-gray-500 italic text-sm">
                        {/* 👇 TAMBAHKAN text-blue-600 atau text-[#1A237E] DISINI */}
                        Menampilkan paket default: <span className="font-bold text-blue-600 not-italic uppercase">{activeRegionName}</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default PricingGrid;