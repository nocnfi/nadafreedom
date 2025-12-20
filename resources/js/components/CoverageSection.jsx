import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Popup, CircleMarker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// --- KOMPONEN PEMBANTU: AUTO ZOOM ---
// Ini bertugas menggeser peta secara otomatis saat filter berubah
const MapUpdater = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, zoom, { duration: 1.5 });
    }, [center, zoom, map]);
    return null;
};

const CoverageSection = () => {
    // 1. DATA LOKASI (Diperkaya dengan Province & City)
    const rawLocations = [
      { name: "Sukaraya Indah", lat: -6.219148, lng: 107.171218, kec: "Karangbahagia", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Perumahan Sukaraya Indah Blok E1 Nomor 2A" },
      { name: "Mutiara Puri Harmoni 2", lat: -6.204106, lng: 107.186504, kec: "Karangbahagia", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Blok F8 Nomor 26 Karanganyar" },
      { name: "Pondok Pesona Regensi 2", lat: -6.208168, lng: 107.180845, kec: "Karangbahagia", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Blok G Nomor 7 Karanganyar" },
      { name: "Cabang Lio", lat: -6.248175, lng: 107.147281, kec: "Cikarang Utara", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Kp. Cabang Lio RT 003 RW 004 Karangasih" },
      { name: "Graha Cikarang", lat: -6.267519, lng: 107.169376, kec: "Cikarang Utara", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Blok C-13 No. 13 Simpangan" },
      { name: "Taman Permata Indah", lat: -6.254473, lng: 107.235863, kec: "Kedungwaringin", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Blok F3 No. 20 RT 004 RW 008 Waringin Jaya" },
      { name: "Bumi Waringin Indah 2", lat: -6.261649, lng: 107.235219, kec: "Kedungwaringin", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Gg. Murai Blok A02 No. 35" },
      { name: "Shamandra Gardenia", lat: -6.189818, lng: 107.180939, kec: "Karangbahagia", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Blok GC 23 No. 17 Karangsentosa" },
      { name: "Karanganyar Residence", lat: -6.204767, lng: 107.182503, kec: "Karangbahagia", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Blok D10/5 Karangsentosa" },
      { name: "Sukamantri", lat: -6.236098, lng: 107.163027, kec: "Karangbahagia", city: "Kab. Bekasi", prov: "Jawa Barat", desc: "Kp. Sukamantri RT 003 RW 004" },
      
      // Karawang Area
      { name: "Karangsinom", lat: -6.321937, lng: 107.274937, kec: "Telukjambe Timur", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Kp. Karangsinom No. 54 RW 004 Wadas" },
      { name: "Babakan Gede", lat: -6.337819, lng: 107.298204, kec: "Telukjambe Timur", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Kp. Babakan Gede No. 35 Puseurjaya" },
      { name: "Citarum Adiarsa", lat: -6.320593, lng: 107.307401, kec: "Adiarsa Barat", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Jl. Citarum Adiarsa No. 19 RT 004" },
      { name: "Bumi Karawang Permai", lat: -6.326268, lng: 107.323466, kec: "Karawang Timur", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Blok C4 No. 8 Warung Bambu" },
      { name: "Palumbonsari Quro", lat: -6.293889, lng: 107.330694, kec: "Karawang Timur", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Jl. Syech Quro No. 9" },
      { name: "Perum Buana Asri", lat: -6.288727, lng: 107.333614, kec: "Karawang Timur", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Blok A17 No. 19 Palumbonsari" },
      { name: "Greenside Residence", lat: -6.277006, lng: 107.336168, kec: "Karawang Timur", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Blok G No. 28 Palumbonsari" },
      { name: "Lengo Tanjung Pura", lat: -6.286993, lng: 107.286612, kec: "Karawang Barat", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Kp. Lengo RT 002 RW 014" },
      { name: "Green Garden", lat: -6.297300, lng: 107.321194, kec: "Karawang", city: "Kab. Karawang", prov: "Jawa Barat", desc: "Blok J5 No. 7 Karawang" },

      // Pemalang Area
      { name: "Masjid Al Hidayah", lat: -6.838918, lng: 109.539031, kec: "Ulujami", city: "Kab. Pemalang", prov: "Jawa Tengah", desc: "Sebelah utara Masjid Al Hidayah" },
    ];

    const kecamatanColors = {
      "Karangbahagia": "#3B82F6", 
      "Cikarang Utara": "#EF4444", 
      "Kedungwaringin": "#10B981", 
      "Telukjambe Timur": "#F97316", 
      "Karawang Timur": "#8B5CF6", 
      "Karawang Barat": "#06B6D4", 
      "Adiarsa Barat": "#EC4899", 
      "Ulujami": "#A0522D", 
      "Karawang": "#6B7280" 
    };

    // --- 2. STATE FILTER ---
    const [selectedProv, setSelectedProv] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedKec, setSelectedKec] = useState('');
    
    // State untuk tampilan Peta (Center & Zoom)
    const [mapView, setMapView] = useState({ center: [-6.26, 107.25], zoom: 11 });

    // --- 3. LOGIKA FILTER DATA ---
    
    // Ambil list Provinsi Unik
    const provinces = useMemo(() => [...new Set(rawLocations.map(i => i.prov))], []);

    // Ambil list Kota berdasarkan Provinsi yang dipilih
    const cities = useMemo(() => {
        if (!selectedProv) return [];
        return [...new Set(rawLocations.filter(i => i.prov === selectedProv).map(i => i.city))];
    }, [selectedProv]);

    // Ambil list Kecamatan berdasarkan Kota yang dipilih
    const kecamatans = useMemo(() => {
        if (!selectedCity) return [];
        return [...new Set(rawLocations.filter(i => i.city === selectedCity).map(i => i.kec))];
    }, [selectedCity]);

    // Filter Data Lokasi Akhir untuk ditampilkan di Peta
    const filteredLocations = rawLocations.filter(loc => {
        return (
            (selectedProv ? loc.prov === selectedProv : true) &&
            (selectedCity ? loc.city === selectedCity : true) &&
            (selectedKec ? loc.kec === selectedKec : true)
        );
    });

    // --- 4. HANDLE SEARCH BUTTON ---
    const handleSearch = () => {
        if (filteredLocations.length > 0) {
            // Ambil koordinat titik pertama dari hasil filter untuk jadi pusat peta
            const firstLoc = filteredLocations[0];
            
            // Tentukan zoom level berdasarkan spesifik filter
            let newZoom = 11;
            if (selectedKec) newZoom = 14;      // Zoom dekat jika pilih kecamatan
            else if (selectedCity) newZoom = 12; // Zoom sedang jika pilih kota
            
            setMapView({ center: [firstLoc.lat, firstLoc.lng], zoom: newZoom });
        } else {
            alert("No locations found in this area.");
        }
    };

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
                    
                    {/* --- LEFT COLUMN --- */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-[#6D28D9] font-bold tracking-widest uppercase text-sm mb-2 block">
                            Network Availability
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A237E] mb-6 leading-tight">
                            Find Your Nearest <br />
                            <span className="text-[#4F26E9]">Coverage Point.</span>
                        </h2>
                        
                        <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-lg">
                            Select your province, city, and district to see available NFI Fiber Optic connection points.
                        </p>

                        {/* --- SEARCH BAR (LOGIC IMPLEMENTED) --- */}
                        <div className="bg-white border border-gray-200 rounded-[2rem] p-4 shadow-xl shadow-blue-900/5 max-w-lg w-full relative z-20">
                            
                            <div className="flex flex-col gap-3">
                                {/* 1. PROVINCE SELECT */}
                                <div className="relative">
                                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-3 mb-1 block">Province</label>
                                    <select 
                                        className="w-full bg-gray-50 border border-gray-200 text-[#1A237E] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 appearance-none"
                                        value={selectedProv}
                                        onChange={(e) => {
                                            setSelectedProv(e.target.value);
                                            setSelectedCity(''); // Reset anak
                                            setSelectedKec('');  // Reset cucu
                                        }}
                                    >
                                        <option value="">All Provinces</option>
                                        {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                    {/* Chevron Icon Custom */}
                                    <div className="absolute right-4 bottom-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    {/* 2. CITY SELECT */}
                                    <div className="relative flex-1">
                                        <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-3 mb-1 block">City / Regency</label>
                                        <select 
                                            className="w-full bg-gray-50 border border-gray-200 text-[#1A237E] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 appearance-none disabled:opacity-50"
                                            value={selectedCity}
                                            disabled={!selectedProv}
                                            onChange={(e) => {
                                                setSelectedCity(e.target.value);
                                                setSelectedKec(''); // Reset cucu
                                            }}
                                        >
                                            <option value="">Select City</option>
                                            {cities.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                        <div className="absolute right-4 bottom-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>

                                    {/* 3. KECAMATAN SELECT */}
                                    <div className="relative flex-1">
                                        <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-3 mb-1 block">District</label>
                                        <select 
                                            className="w-full bg-gray-50 border border-gray-200 text-[#1A237E] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 appearance-none disabled:opacity-50"
                                            value={selectedKec}
                                            disabled={!selectedCity}
                                            onChange={(e) => setSelectedKec(e.target.value)}
                                        >
                                            <option value="">All Districts</option>
                                            {kecamatans.map(k => <option key={k} value={k}>{k}</option>)}
                                        </select>
                                        <div className="absolute right-4 bottom-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* SEARCH BUTTON */}
                                <button 
                                    onClick={handleSearch}
                                    className="w-full bg-[#1A237E] hover:bg-blue-800 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-blue-900/30 transition-all duration-300 mt-2 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    Find Coverage
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* --- RIGHT COLUMN: MAP --- */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 blur-3xl rounded-full -z-10"></div>

                            <div className="relative p-3 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-2xl shadow-blue-900/10 w-full h-[450px] md:h-[550px]">
                                <div className="overflow-hidden rounded-[2rem] w-full h-full z-0 relative border border-gray-100">
                                    
                                    <MapContainer 
                                        center={mapView.center} 
                                        zoom={mapView.zoom} 
                                        scrollWheelZoom={false}
                                        style={{ height: "100%", width: "100%" }}
                                    >
                                        {/* Component untuk handle flyTo animation */}
                                        <MapUpdater center={mapView.center} zoom={mapView.zoom} />

                                        <TileLayer
                                            attribution='&copy; OpenStreetMap'
                                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                                        />
                                        
                                        {/* Render Data Hasil Filter */}
                                        {filteredLocations.map((loc, idx) => (
                                            <CircleMarker 
                                                key={idx}
                                                center={[loc.lat, loc.lng]}
                                                pathOptions={{ 
                                                    color: kecamatanColors[loc.kec] || '#333',
                                                    fillColor: kecamatanColors[loc.kec] || '#333',
                                                    fillOpacity: 0.7,
                                                    weight: 2
                                                }}
                                                radius={8}
                                            >
                                                <Popup>
                                                    <div className="font-['Poppins'] text-center p-1 min-w-[150px]">
                                                        <span 
                                                            className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full inline-block mb-2 uppercase tracking-wide"
                                                            style={{ backgroundColor: kecamatanColors[loc.kec] || '#666' }}
                                                        >
                                                            {loc.kec}
                                                        </span>
                                                        <h3 className="font-bold text-[#1A237E] text-sm leading-tight mb-1">
                                                            {loc.name}
                                                        </h3>
                                                        <p className="text-[11px] text-gray-500 leading-snug mb-1">
                                                            {loc.city}, {loc.prov}
                                                        </p>
                                                        <p className="text-[10px] text-gray-400 italic">
                                                            {loc.desc}
                                                        </p>
                                                    </div>
                                                </Popup>
                                            </CircleMarker>
                                        ))}
                                    </MapContainer>
                                </div>

                                {/* Floating Stats */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-lg border border-white z-[1000] flex items-center gap-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Locations Found</p>
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