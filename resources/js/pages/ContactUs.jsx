import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ReviewCard, { reviewsData } from '../components/ReviewCard';
import FAQSection from '../components/FAQSection'; 
import TeamSection from '../components/TeamSection';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; 

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ContactUs = () => {
    const { t } = useTranslation(); 
    const position = [-6.3382425, 107.280465]; 
    const [phoneNumber, setPhoneNumber] = useState(''); 

    const initialFormState = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const adminPhone = "6285692173125";

        if (!name || !message) {
            Swal.fire({
                icon: 'warning',
                title: t('contact.alert_warning_title') || 'Data Belum Lengkap',
                text: t('contact.alert_warning_text') || 'Mohon isi Nama dan Pesan Anda.',
                confirmButtonColor: '#3B82F6'
            });
            return;
        }

        setIsSubmitting(true);

        try {
            await axios.post('http://127.0.0.1:8000/api/contact', {
                name: name,
                email: email,
                phone: phoneNumber,
                subject: subject,
                message: message
            });

            setFormData(initialFormState);
            setPhoneNumber('');
            setIsSubmitting(false);

            const textWA = `*Halo NFI, Ada Pesan Baru!*%0A%0A` +
                           `*Nama:* ${name}%0A` +
                           `*Email:* ${email || '-'}%0A` +
                           `*Telepon:* ${phoneNumber || '-'}%0A` +
                           `*Subjek:* ${subject || '-'}%0A` +
                           `*Pesan:* ${message}`;
            
            const waUrl = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${textWA}`;

            Swal.fire({
                title: t('contact.alert_success_title') || 'Pesan Tersimpan!',
                text: t('contact.alert_success_text') || 'Data Anda sudah masuk ke sistem kami. Lanjutkan chat via WhatsApp?',
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#25D366',
                cancelButtonColor: '#6B7280',
                confirmButtonText: t('contact.btn_wa_confirm') || 'Ya, Buka WhatsApp',
                cancelButtonText: t('contact.btn_wa_cancel') || 'Cukup Simpan Saja',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(waUrl, "_blank");
                }
            });

        } catch (error) {
            console.error("Error submitting form:", error);
            setIsSubmitting(false);
            
            if (error.response && error.response.status === 422) {
                const messages = Object.values(error.response.data.errors).flat().join('\n');
                Swal.fire({ 
                    icon: 'error', 
                    title: t('contact.alert_invalid_title') || 'Data Tidak Valid', 
                    text: messages,
                    confirmButtonColor: '#EF4444' 
                });
            } else {
                Swal.fire({ 
                    icon: 'error', 
                    title: t('contact.alert_error_title') || 'Gagal', 
                    text: t('contact.alert_error_text') || 'Terjadi kesalahan pada server atau jaringan.',
                    confirmButtonColor: '#EF4444'
                });
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- DATA PREPARATION FOR ANIMATION ---
    const leftReviews = reviewsData.slice(0, 5);
    const rightReviews = reviewsData.slice(5, 10);
    
    // Untuk Desktop (Vertikal)
    const dupLeft = [...leftReviews, ...leftReviews];
    const dupRight = [...rightReviews, ...rightReviews];

    // Untuk Mobile (Horizontal - Semua data digabung & diduplikasi agar loop mulus)
    const mobileReviews = [...reviewsData, ...reviewsData];

    return (
        <div className="w-full min-h-screen bg-gray-50 font-['Poppins'] flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 lg:pt-32 pb-12 lg:pb-24 relative">
                
                {/* Inject CSS Animation Keyframes */}
                <style>
                    {`
                        @keyframes scrollLeft {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll-left {
                            animation: scrollLeft 30s linear infinite;
                        }
                    `}
                </style>

                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-[600px] z-0 opacity-10 pointer-events-none overflow-hidden">
                     <img src="/images/bg-world.svg" alt="" className="w-full h-full object-cover object-top" />
                     <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                    
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-12 lg:mb-24 gap-8 lg:gap-8">
                        <div className="max-w-md text-center lg:text-left z-20 w-full">
                            <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight custom-text-color">
                                {t('contact.hero_title_1')} <br className="hidden md:block"/> {t('contact.hero_title_2')}
                            </h1>
                            <p className="text-gray-500 text-sm md:text-lg mb-6 lg:mb-0">
                                {t('contact.hero_subtitle')}
                            </p>
                        </div>

                        <div className="w-full lg:w-auto">
                            
                            {/* 1. TAMPILAN DESKTOP (Marquee Vertikal) */}
                            <div className="hidden lg:flex gap-4 h-[450px] overflow-hidden relative border-y border-transparent mask-linear justify-center">
                                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
                                <div className="marquee-down gap-4 w-60">
                                    {dupLeft.map((item, index) => <ReviewCard key={`left-${index}`} data={item} />)}
                                </div>
                                <div className="marquee-up gap-4 w-60 -mt-12"> 
                                    {dupRight.map((item, index) => <ReviewCard key={`right-${index}`} data={item} />)}
                                </div>
                            </div>

                            {/* 2. TAMPILAN MOBILE (Horizontal Auto-Scroll) */}
                            <div className="lg:hidden w-full overflow-hidden relative pb-4">
                                {/* Gradient Overlay Kiri Kanan agar terlihat smooth */}
                                <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
                                <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>
                                
                                {/* Container Animasi */}
                                <div className="flex w-max animate-scroll-left gap-4">
                                    {mobileReviews.map((item, index) => (
                                        <div key={`mob-marq-${index}`} className="w-[260px] flex-shrink-0">
                                            <ReviewCard data={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    {/* Grid utama konten */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20 lg:mb-32">
                        
                        {/* FORM SECTION */}
                        <div className="bg-white rounded-[30px] lg:rounded-[40px] shadow-xl p-6 md:p-12 relative z-20 order-1">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">{t('contact.form_title')}</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">{t('contact.label_name')}</label>
                                    <input 
                                        type="text" name="name" value={formData.name} onChange={handleInputChange} required
                                        className="w-full border-b-2 border-blue-100 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800 font-medium text-sm md:text-base" 
                                    />
                                </div>

                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">{t('contact.label_email')}</label>
                                    <input 
                                        type="email" name="email" value={formData.email} onChange={handleInputChange}
                                        className="w-full border-b-2 border-blue-100 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800 font-medium text-sm md:text-base" 
                                    />
                                </div>

                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">{t('contact.label_phone')}</label>
                                    <div className="border-b-2 border-blue-100 focus-within:border-blue-600 transition-colors pb-1">
                                        <PhoneInput
                                            international defaultCountry="ID" value={phoneNumber} onChange={setPhoneNumber}
                                            className="custom-phone-input bg-transparent outline-none w-full font-medium text-gray-800 text-sm md:text-base"
                                            numberInputProps={{
                                                className: "bg-transparent border-none outline-none w-full ml-2 focus:ring-0 placeholder-gray-400 text-gray-800 font-medium", 
                                                placeholder: t('contact.placeholder_phone')
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">{t('contact.label_subject')}</label>
                                    <input 
                                        type="text" name="subject" value={formData.subject} onChange={handleInputChange}
                                        className="w-full border-b-2 border-blue-100 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800 font-medium text-sm md:text-base" 
                                    />
                                </div>

                                <div className="group relative">
                                    <label className="block text-sm font-semibold text-gray-600 mb-2">{t('contact.label_message')}</label>
                                    <textarea 
                                        name="message" value={formData.message} onChange={handleInputChange} required rows="2" 
                                        className="w-full border-b-2 border-blue-100 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent resize-none text-gray-800 font-medium text-sm md:text-base"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button 
                                        type="submit" disabled={isSubmitting}
                                        className={`w-full py-3 rounded-full border-2 font-bold transition-all duration-300 lowercase text-sm 
                                            ${isSubmitting 
                                                ? 'bg-gray-100 border-gray-100 text-gray-400 cursor-not-allowed' 
                                                : 'border-blue-300 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                                            }`}
                                    >
                                        {isSubmitting ? 'Sending...' : t('contact.btn_submit')}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* KONTAK & PETA */}
                        <div className="flex flex-col gap-6 lg:gap-8 h-full relative order-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative z-10">
                                {/* Kartu Telepon */}
                                <a href="tel:085692173125" className="group relative bg-white/40 backdrop-blur-md border border-white/60 p-5 lg:p-6 rounded-2xl lg:rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300 h-32 lg:h-40 flex flex-col justify-center">
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500/90 rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-xs lg:text-sm">{t('contact.card_call_title')}</h3>
                                    <p className="text-[10px] text-gray-600 mt-0.5">{t('contact.card_call_subtitle')}</p>
                                    <p className="font-bold text-blue-700 text-xs lg:text-sm mt-1">0856-9217-3125</p>
                                </a>

                                {/* Kartu Email */}
                                <a href="mailto:info@nfi.net.id" className="group relative bg-white/40 backdrop-blur-md border border-white/60 p-5 lg:p-6 rounded-2xl lg:rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300 h-32 lg:h-40 flex flex-col justify-center">
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-cyan-400/90 rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-xs lg:text-sm">{t('contact.card_chat_title')}</h3>
                                    <p className="text-[10px] text-gray-600 mt-0.5">{t('contact.card_chat_subtitle')}</p>
                                    <p className="font-bold text-cyan-700 text-xs lg:text-sm mt-1">info@nfi.net.id</p>
                                </a>
                            </div>

                            {/* Peta Lokasi */}
                            <div className="flex-grow min-h-[300px] lg:min-h-[400px] rounded-[30px] lg:rounded-[40px] shadow-xl overflow-hidden relative border-4 border-white z-0">
                                <MapContainer center={position} zoom={16} scrollWheelZoom={false} className="w-full h-full">
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
                                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-white/90 backdrop-blur-sm p-4 lg:p-5 rounded-2xl lg:rounded-3xl shadow-lg z-[400]">
                                    <h4 className="font-bold text-gray-800 text-sm lg:text-base mb-1 lg:mb-2">{t('contact.office_title')}</h4>
                                    <div className="flex items-start text-xs text-gray-500 mb-3 lg:mb-4">
                                        <span className="mr-2 text-purple-600">📍</span>
                                        <p className="leading-relaxed text-[10px] lg:text-xs">Perumahan Bumi Telukjambe Blok C No. 57 Sukaluyu, Telukjambe Timur, Karawang, Jawa Barat 41361</p>
                                    </div>
                                    <a href={`http://maps.google.com/maps?q=${position[0]},${position[1]}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-1.5 lg:px-5 lg:py-2 border border-gray-300 rounded-full text-[10px] lg:text-xs font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                                        {t('contact.btn_directions')} <span className="ml-1">›</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FAQSection />
                    <TeamSection />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactUs;