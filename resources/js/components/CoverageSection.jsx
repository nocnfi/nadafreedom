import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- FIX ICON MARKER DEFAULT (Wajib di React) ---
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
});
// ------------------------------------------------

const CoverageSection = () => {
    // Koordinat Default (Contoh: Jakarta Pusat)
    const centerPosition = [-6.2088, 106.8456]; 

    return (
        <section 
            className="relative w-full py-20 font-['Poppins'] overflow-hidden"
            style={{ 
                // MENGGUNAKAN BACKGROUND 'indonesianmaps.svg'
                backgroundImage: "url('/images/indonesianmaps.svg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* === MASKING GRADIENT (FADE EFFECT) === */}
            {/* Membuat transisi halus di atas dan bawah section */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* --- LEFT COLUMN: TEXT & SEARCH --- */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
                            Check Your <br />
                            <span className="text-purple-700">Area Coverage.</span>
                        </h2>
                        
                        <p className="text-gray-500 mb-10 text-sm md:text-base leading-relaxed max-w-lg">
                            NFI continues to expand our fiber optic network. 
                            Enter your location for instant verification. If your area is covered, 
                            you can choose a package and schedule installation today!
                        </p>

                        {/* Search Bar Component */}
                        <div className="flex items-center bg-white border-2 border-purple-100 rounded-full p-2 shadow-xl shadow-purple-100/50 max-w-md w-full">
                            <div className="flex-1 px-4 py-2 cursor-pointer flex items-center justify-between border-r border-gray-200 hover:bg-gray-50 rounded-l-full transition-colors">
                                <span className="text-sm font-bold text-purple-700">Province</span>
                                <svg className="w-4 h-4 text-purple-700 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                            <div className="flex-1 px-4 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <span className="text-sm font-bold text-purple-700">City</span>
                                <svg className="w-4 h-4 text-purple-700 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: OPEN SOURCE MAP (LEAFLET) --- */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        {/* Wrapper Map dengan Border Biru Khas Desain */}
                        <div className="relative p-2 bg-blue-50/80 rounded-[2.5rem] border border-blue-100 shadow-2xl shadow-blue-200/50 w-full h-[400px] md:h-[500px] backdrop-blur-sm">
                            
                            <div className="overflow-hidden rounded-[2rem] w-full h-full z-0 relative">
                                <MapContainer 
                                    center={centerPosition} 
                                    zoom={13} 
                                    scrollWheelZoom={false} 
                                    style={{ height: "100%", width: "100%" }}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    
                                    <Marker position={centerPosition}>
                                        <Popup>
                                            <div className="font-['Poppins'] text-center">
                                                <h3 className="font-bold text-blue-600">NFI Coverage Area</h3>
                                                <p className="text-xs text-gray-500">Jakarta Central Hub</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CoverageSection;