import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- IMPORT COMPONENTS ---
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewCard, { reviewsData } from '../components/ReviewCard';
import FAQSection from '../components/FAQSection';   // <--- FAQ Baru
import TeamSection from '../components/TeamSection'; // <--- Team Section

// --- IMPORT LIBRARY LAIN ---
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; 

// Fix icon marker default leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ContactUs = () => {
    // Koordinat Blok C, Perumahan Bumi Telukjambe
    const position = [-6.3358159, 107.2815335]; 
    const [phoneNumber, setPhoneNumber] = useState(); 

    // Logic Marquee (Reviews)
    const leftReviews = reviewsData.slice(0, 5);
    const rightReviews = reviewsData.slice(5, 10);
    const dupLeft = [...leftReviews, ...leftReviews];
    const dupRight = [...rightReviews, ...rightReviews];

    return (
        <div className="w-full min-h-screen bg-gray-50 font-['Poppins'] flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24 relative">
                
                {/* Background Map (Header Only) */}
                <div className="absolute top-0 left-0 w-full h-[600px] z-0 opacity-10 pointer-events-none overflow-hidden">
                     <img src="/images/bg-world.svg" alt="" className="w-full h-full object-cover object-top" />
                     <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                    
                    {/* --- SECTION 1: HEADER & REVIEWS --- */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-8">
                        <div className="max-w-md text-center lg:text-left z-20 mb-8 lg:mb-0">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                                Talk to our <br/> experts
                            </h1>
                            <p className="text-gray-500 text-sm md:text-lg">
                                Have questions about pricing, plans or how we can help? We'd love to chat!
                            </p>
                        </div>
                        <div className="flex gap-4 h-[450px] overflow-hidden relative border-y border-transparent mask-linear">
                             <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
                             <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
                             <div className="marquee-down gap-4 w-60">
                                {dupLeft.map((item, index) => <ReviewCard key={`left-${index}`} data={item} />)}
                             </div>
                             <div className="marquee-up gap-4 w-60 -mt-12"> 
                                {dupRight.map((item, index) => <ReviewCard key={`right-${index}`} data={item} />)}
                             </div>
                        </div>
                    </div>
                    
                    {/* --- SECTION 2: FORM & PETA --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-32">
                        
                        {/* FORM */}
                        <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-12 relative z-20">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Let's Talk</h2>
                            <form className="space-y-8">
                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
                                    <input type="text" className="w-full border-b-2 border-blue-100 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800 font-medium" />
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
                                    <input type="email" className="w-full border-b-2 border-blue-100 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800 font-medium" />
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
                                    <div className="border-b-2 border-blue-100 focus-within:border-blue-600 transition-colors pb-1">
                                        <PhoneInput
                                            international
                                            defaultCountry="ID"
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                            className="custom-phone-input bg-transparent outline-none w-full font-medium text-gray-800"
                                            numberInputProps={{
                                                className: "bg-transparent border-none outline-none w-full ml-2 focus:ring-0 placeholder-gray-400 text-gray-800 font-medium", 
                                                placeholder: "Enter phone number"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">Subject</label>
                                    <input type="text" className="w-full border-b-2 border-blue-100 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800 font-medium" />
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">messages</label>
                                    <textarea rows="2" className="w-full border-b-2 border-blue-100 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent resize-none text-gray-800 font-medium"></textarea>
                                </div>
                                <div className="pt-4">
                                    <button type="button" className="w-full py-3 rounded-full border-2 border-blue-300 text-gray-600 font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 lowercase text-sm">
                                        submit your message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* KONTAK & PETA */}
                        <div className="flex flex-col gap-8 h-full relative">
                            {/* Dekorasi Background */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 -left-4 w-64 h-64 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                <a href="tel:085692173125" className="group relative overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center h-40 cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-10 h-10 bg-blue-500/90 rounded-full flex items-center justify-center text-white mb-3 shadow-lg shadow-blue-500/30 backdrop-blur-sm">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-sm drop-shadow-sm">call us</h3>
                                    <p className="text-[10px] text-gray-600 mt-1 font-medium">mon-sat from 8am to 5 pm</p>
                                    <p className="font-bold text-blue-700 text-sm mt-1">0856-9217-3125</p>
                                </a>

                                <a href="mailto:info@nfi.net.id" className="group relative overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center h-40 cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-10 h-10 bg-cyan-400/90 rounded-full flex items-center justify-center text-white mb-3 shadow-lg shadow-cyan-400/30 backdrop-blur-sm">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-sm drop-shadow-sm">chat to support</h3>
                                    <p className="text-[10px] text-gray-600 mt-1 font-medium">we're here to help</p>
                                    <p className="font-bold text-cyan-700 text-sm mt-1">info@nfi.net.id</p>
                                </a>
                            </div>

                            <div className="flex-grow min-h-[400px] rounded-[40px] shadow-xl overflow-hidden relative border-4 border-white z-0">
                                <MapContainer center={position} zoom={16} scrollWheelZoom={false} className="w-full h-full z-0">
                                    <TileLayer attribution='© OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <Marker position={position}>
                                        <Popup>
                                            <div className="text-center font-sans text-xs">
                                                <b className="text-blue-600 text-sm">PT Nada Freedom Indonesia</b><br/>
                                                Perumahan Bumi Telukjambe<br/>Blok C No. 57
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-5 rounded-3xl shadow-lg z-[400]">
                                    <h4 className="font-bold text-gray-800 text-base mb-2">visit our office</h4>
                                    <div className="flex items-start text-xs text-gray-500 mb-4">
                                        <span className="mr-2 text-purple-600 mt-0.5">📍</span>
                                        <p className="leading-relaxed">Perumahan Bumi Telukjambe Blok C No. 57 Sukaluyu, Telukjambe Timur, Karawang, Jawa Barat 41361</p>
                                    </div>
                                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 border border-gray-300 rounded-full text-xs font-bold text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                                        Get a directions <span className="ml-1">›</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- SECTION 3: FREQUENTLY ASKED QUESTIONS (PANGGIL DISINI) --- */}
                    <FAQSection />

                    {/* --- SECTION 4: MEET OUR TEAM (PANGGIL DISINI) --- */}
                    <TeamSection />

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactUs;