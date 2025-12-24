import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next'; // Import i18n hook

const CoverageMap = lazy(() => import('./CoverageMap'));

const CoverageSection = () => {
    const { t } = useTranslation(); // Inisialisasi hook

    // 1. STATE
    const [locations, setLocations] = useState([]); 
    const [loading, setLoading] = useState(true);

    // 2. FETCH DATA
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/coverage-locations');
                const data = await response.json();
                setLocations(data);
                setLoading(false);
            } catch (error) {
                console.error("Gagal mengambil data coverage:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // 3. LOGIKA FILTER & WARNA
    const kecamatanColors = useMemo(() => {
        const colors = {};
        locations.forEach(loc => {
            if (loc.kec) colors[loc.kec] = loc.color || '#3B82F6';
        });
        return colors;
    }, [locations]);

    const [selectedProv, setSelectedProv] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedKec, setSelectedKec] = useState('');
    const [mapView, setMapView] = useState({ center: [-6.26, 107.25], zoom: 11 });

    const provinces = useMemo(() => [...new Set(locations.map(i => i.prov))], [locations]);

    const cities = useMemo(() => {
        if (!selectedProv) return [];
        return [...new Set(locations.filter(i => i.prov === selectedProv).map(i => i.city))];
    }, [selectedProv, locations]);

    const kecamatans = useMemo(() => {
        if (!selectedCity) return [];
        return [...new Set(locations.filter(i => i.city === selectedCity).map(i => i.kec))];
    }, [selectedCity, locations]);

    const filteredLocations = locations.filter(loc => {
        return (
            (selectedProv ? loc.prov === selectedProv : true) &&
            (selectedCity ? loc.city === selectedCity : true) &&
            (selectedKec ? loc.kec === selectedKec : true)
        );
    });

    const handleSearch = () => {
        if (filteredLocations.length > 0) {
            const firstLoc = filteredLocations[0];
            let newZoom = 11;
            if (selectedKec) newZoom = 14;      
            else if (selectedCity) newZoom = 12; 
            
            setMapView({ center: [firstLoc.lat, firstLoc.lng], zoom: newZoom });
        } else {
            alert(t('coverage.not_found')); // Gunakan i18n alert
        }
    };

    if (loading) {
        return <div className="text-center py-24 font-bold text-gray-400">{t('coverage.loading')}</div>;
    }

    return (
        <section 
            className="relative w-full py-24 font-['Poppins'] overflow-hidden bg-white"
            style={{ 
                backgroundImage: "url('/images/indonesianmaps.svg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/90 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/90 to-transparent z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* --- KIRI: Form Pencarian --- */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-[#6D28D9] font-bold tracking-widest uppercase text-sm mb-2 block">
                            {t('coverage.tagline')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A237E] mb-6 leading-tight">
                            {t('coverage.title_1')} <br />
                            <span className="text-[#4F26E9]">{t('coverage.title_2')}</span>
                        </h2>
                        
                        <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-lg">
                            {t('coverage.description')}
                        </p>

                        <div className="bg-white border border-gray-200 rounded-[2rem] p-4 shadow-xl shadow-blue-900/5 max-w-lg w-full relative z-20">
                            <div className="flex flex-col gap-3">
                                {/* 1. PROVINCE */}
                                <div className="relative">
                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-3 mb-1 block">{t('coverage.label_prov')}</label>
                                    <select 
                                        className="w-full bg-gray-50 border border-gray-200 text-[#1A237E] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                                        value={selectedProv}
                                        onChange={(e) => {
                                            setSelectedProv(e.target.value);
                                            setSelectedCity('');
                                            setSelectedKec('');
                                        }}
                                    >
                                        <option value="">{t('coverage.opt_all_prov')}</option>
                                        {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </div>

                                <div className="flex gap-3">
                                    {/* 2. CITY */}
                                    <div className="relative flex-1">
                                        <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-3 mb-1 block">{t('coverage.label_city')}</label>
                                        <select 
                                            className="w-full bg-gray-50 border border-gray-200 text-[#1A237E] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 appearance-none disabled:opacity-50 cursor-pointer"
                                            value={selectedCity}
                                            disabled={!selectedProv}
                                            onChange={(e) => {
                                                setSelectedCity(e.target.value);
                                                setSelectedKec('');
                                            }}
                                        >
                                            <option value="">{t('coverage.opt_select_city')}</option>
                                            {cities.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>

                                    {/* 3. KECAMATAN */}
                                    <div className="relative flex-1">
                                        <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-3 mb-1 block">{t('coverage.label_kec')}</label>
                                        <select 
                                            className="w-full bg-gray-50 border border-gray-200 text-[#1A237E] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 appearance-none disabled:opacity-50 cursor-pointer"
                                            value={selectedKec}
                                            disabled={!selectedCity}
                                            onChange={(e) => setSelectedKec(e.target.value)}
                                        >
                                            <option value="">{t('coverage.opt_select_kec')}</option>
                                            {kecamatans.map(k => <option key={k} value={k}>{k}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <button 
                                    onClick={handleSearch}
                                    className="w-full bg-[#1A237E] hover:bg-blue-800 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-blue-900/30 transition-all duration-300 mt-2 flex items-center justify-center gap-2"
                                >
                                    {t('coverage.btn_search')}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- KANAN: Peta --- */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 blur-3xl rounded-full -z-10"></div>

                            <div className="relative p-3 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-2xl shadow-blue-900/10 w-full h-[450px] md:h-[550px]">
                                <div className="overflow-hidden rounded-[2rem] w-full h-full z-0 relative border border-gray-100 bg-gray-100">
                                    <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-gray-400 animate-pulse">{t('coverage.map_loading')}</div>}>
                                        <CoverageMap 
                                            center={mapView.center} 
                                            zoom={mapView.zoom} 
                                            locations={filteredLocations}
                                            colors={kecamatanColors}
                                        />
                                    </Suspense>
                                </div>

                                {/* Statistik Mengambang */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-lg border border-white z-[1000] flex items-center gap-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t('coverage.stats_found')}</p>
                                        <p className="text-xl font-extrabold text-[#1A237E]">{filteredLocations.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CoverageSection;