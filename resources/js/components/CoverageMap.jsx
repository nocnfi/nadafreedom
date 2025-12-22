'use client'; // Wajib untuk Next.js App Router

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Popup, CircleMarker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Komponen Helper untuk Auto Zoom
const MapUpdater = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, zoom, { duration: 1.5 });
    }, [center, zoom, map]);
    return null;
};

const CoverageMap = ({ center, zoom, locations, colors }) => {
    return (
        <MapContainer 
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", borderRadius: "2rem" }}
        >
            <MapUpdater center={center} zoom={zoom} />

            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            
            {locations.map((loc, idx) => (
                <CircleMarker 
                    key={idx}
                    center={[loc.lat, loc.lng]}
                    pathOptions={{ 
                        color: colors[loc.kec] || '#333',
                        fillColor: colors[loc.kec] || '#333',
                        fillOpacity: 0.7,
                        weight: 2
                    }}
                    radius={8}
                >
                    <Popup>
                        <div className="font-['Poppins'] text-center p-1 min-w-[150px]">
                            <span 
                                className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full inline-block mb-2 uppercase tracking-wide"
                                style={{ backgroundColor: colors[loc.kec] || '#666' }}
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
    );
};

export default CoverageMap;