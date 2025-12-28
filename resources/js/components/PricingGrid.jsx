import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PricingCard from '@/Components/PricingCard';

const PricingGrid = ({ customRegion = null }) => {
    const [regionsData, setRegionsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [internalRegion, setInternalRegion] = useState('Kab. Bekasi');

    // --- FUNGSI WHATSAPP ACTION ---
    const handleWhatsAppSubscribe = (plan) => {
        // Ganti dengan nomor WhatsApp perusahaan Anda (Gunakan kode negara 62)
        const phoneNumber = "6285692173125"; 
        const activeRegionName = customRegion || internalRegion;

        // Menyusun teks pesan otomatis
        const message = `Halo NFI, saya tertarik untuk berlangganan paket internet berikut:%0A%0A` +
                        `*Area Pemasangan:* ${activeRegionName.toUpperCase()}%0A` +
                        `*Nama Paket:* ${plan.name}%0A` +
                        `*Harga:* ${plan.price}%0A%0A` +
                        `Mohon dibantu untuk proses pendaftaran dan cek ketersediaan jaringan di alamat saya. Terima kasih.`;

        // Membuka WhatsApp di tab baru
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    // Data Fallback (Digunakan jika API Offline)
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
        // Ambil URL API dari Environment (Vite)
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';

        // Fetch Data Paket dari Backend Laravel
        axios.get(`${apiBaseUrl}/api/pricing-regions`)
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
                console.warn("Using fallback data for pricing.");
                setRegionsData(fallbackRegions);
                setLoading(false);
            });

        // Deteksi Lokasi Otomatis (Jika tidak ada pilihan manual)
        if (!customRegion && "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    // Logika area berdasarkan koordinat sederhana
                    const isKarawang = (lat < -6.20 && lat > -6.45) && (lng > 107.20 && lng < 107.45);
                    const isPemalang = (lat < -6.80 && lat > -7.00) && (lng > 109.30 && lng < 109.60);

                    if (isKarawang) setInternalRegion('Kab. Karawang');
                    else if (isPemalang) setInternalRegion('Kab. Pemalang');
                    else setInternalRegion('Kab. Bekasi');
                },
                () => setInternalRegion('Kab. Bekasi')
            );
        }
    }, [customRegion]);

    const activeRegionName = customRegion || internalRegion;
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
                        <PricingCard 
                            key={index} 
                            plan={plan} 
                            onSubscribe={handleWhatsAppSubscribe} 
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-10">
                        <p className="text-gray-400 text-lg">
                            Paket untuk area <span className="font-bold">{activeRegionName}</span> belum tersedia.
                        </p>
                    </div>
                )}
            </div>

            {/* INFO LOKASI SAAT INI */}
            {!customRegion && (
                <div className="text-center mt-4">
                    <p className="text-gray-500 italic text-sm">
                        Menampilkan paket default: <span className="font-bold text-blue-600 not-italic uppercase">{activeRegionName}</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default PricingGrid;