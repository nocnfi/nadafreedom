import React from 'react';
import { MapPin, Wifi, FileText, Wrench, CreditCard, Headphones, CheckCircle, ArrowRight } from 'lucide-react';

// --- IMPORT NAVBAR & FOOTER ---
// Sesuaikan path ini jika file Anda ada di folder lain (misal: '../components/Navbar')
import Navbar from '../components/navbar'; 
import Footer from '../components/Footer'; 

const ServiceGuide = () => {
    // Data Langkah-langkah
    const steps = [
        {
            id: 1,
            title: "Cek Ketersediaan Area",
            desc: "Pastikan lokasi rumah atau kantor Anda masuk dalam jangkauan jaringan Fiber Optic NFI. Anda bisa menanyakan langsung kepada admin kami.",
            icon: <MapPin className="w-8 h-8 text-white" />,
            color: "bg-blue-600"
        },
        {
            id: 2,
            title: "Pilih Paket Internet",
            desc: "Tentukan paket yang sesuai dengan kebutuhan Anda. Kami menyediakan berbagai pilihan kecepatan mulai dari 10 Mbps hingga 100 Mbps.",
            icon: <Wifi className="w-8 h-8 text-white" />,
            color: "bg-yellow-500"
        },
        {
            id: 3,
            title: "Registrasi & Administrasi",
            desc: "Isi formulir pendaftaran dan lampirkan foto KTP. Tim kami akan memverifikasi data Anda untuk proses penjadwalan instalasi.",
            icon: <FileText className="w-8 h-8 text-white" />,
            color: "bg-blue-600"
        },
        {
            id: 4,
            title: "Proses Instalasi",
            desc: "Teknisi profesional kami akan datang ke lokasi Anda untuk melakukan pemasangan perangkat modem dan penarikan kabel fiber optic.",
            icon: <Wrench className="w-8 h-8 text-white" />,
            color: "bg-yellow-500"
        },
        {
            id: 5,
            title: "Pembayaran & Aktifasi",
            desc: "Setelah instalasi selesai, lakukan pembayaran deposit/biaya pasang. Layanan internet Anda akan langsung aktif dan siap digunakan.",
            icon: <CreditCard className="w-8 h-8 text-white" />,
            color: "bg-blue-600"
        }
    ];

    return (
        <>
            {/* 1. NAVBAR DI BAGIAN ATAS */}
            <Navbar />

            <div className="min-h-screen bg-gray-50 pb-20">
                {/* HERO SECTION DENGAN CSS CUSTOM (APP.CSS) */}
                <div className="hero-bg relative text-white py-20 px-4 overflow-hidden min-h-[500px] flex items-center justify-center">
                    
                    {/* --- ELEMEN DEKORASI BACKGROUND --- */}
                    <div className="hero-grid"></div>
                    <div className="glow-shape glow-1"></div>
                    <div className="glow-shape glow-2"></div>
                    
                    <div className="data-packet packet-1"></div>
                    <div className="data-packet packet-2"></div>
                    <div className="data-packet packet-3"></div>

                    {/* --- KONTEN HERO --- */}
                    <div className="container mx-auto max-w-5xl relative z-10 text-center"> 
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
                            Panduan Berlangganan <br />
                            <span className="text-[#FFC107]">NFI Internet</span>
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-sm">
                            5 Langkah mudah menghubungkan rumah Anda ke masa depan dengan internet cepat dan stabil.
                        </p>
                        <a 
                            href="https://wa.me/6282295555976?text=Halo%20NFI,%20saya%20ingin%20cek%20area%20untuk%20pasang%20internet" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFD54F] text-[#1A237E] font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20"
                        >
                            Daftar Sekarang
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* ALUR PROSES */}
                <div className="container mx-auto px-4 max-w-5xl -mt-10 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map((step) => (
                            <div key={step.id} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:border-blue-200 transition-all hover:-translate-y-1 group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform`}>
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-black text-gray-100 select-none">0{step.id}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#1A237E] mb-3">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                        
                        {/* Card Contact Support */}
                        <div className="bg-[#1A237E] p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-white">
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm animate-pulse">
                                <Headphones className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Butuh Bantuan?</h3>
                            <p className="text-blue-200 text-sm mb-6">
                                Jika Anda mengalami kendala teknis atau pertanyaan tagihan.
                            </p>
                            <a 
                                href="https://wa.me/6282295555976" 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-full bg-white text-[#1A237E] font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Hubungi CS
                            </a>
                        </div>
                    </div>
                </div>

                {/* PERSYARATAN SECTION */}
                <div className="container mx-auto px-4 max-w-4xl mt-20">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1A237E] mb-6">
                                Persyaratan <span className="text-yellow-500">Pemasangan</span>
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Foto KTP Asli (E-KTP) pemohon.",
                                    "Share lokasi / koordinat rumah (via WhatsApp).",
                                    "Nomor Handphone yang aktif (WhatsApp).",
                                    "Membayar biaya deposit/instalasi awal sesuai paket."
                                ].map((req, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                            <div className="text-5xl mb-2">📄</div>
                            <h4 className="font-bold text-[#1A237E] mb-2">Proses Cepat</h4>
                            <p className="text-sm text-gray-500">
                                Data lengkap mempercepat proses survey dan jadwal instalasi.
                            </p>
                        </div>
                    </div>
                </div>

                {/* METODE PEMBAYARAN */}
                <div className="container mx-auto px-4 max-w-3xl mt-20 mb-20 text-center">
                    <h2 className="text-2xl font-bold text-[#1A237E] mb-8">Metode Pembayaran</h2>
                    <div className="flex flex-wrap justify-center gap-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="bg-white px-6 py-3 rounded-xl shadow-sm border font-bold text-gray-600">Transfer Bank</div>
                        <div className="bg-white px-6 py-3 rounded-xl shadow-sm border font-bold text-gray-600">Virtual Account</div>
                        <div className="bg-white px-6 py-3 rounded-xl shadow-sm border font-bold text-gray-600">E-Wallet (Dana/OVO)</div>
                        <div className="bg-white px-6 py-3 rounded-xl shadow-sm border font-bold text-gray-600">Alfamart/Indomaret</div>
                    </div>
                    <p className="mt-6 text-sm text-gray-400">
                        *Detail rekening pembayaran resmi akan dikirimkan melalui WhatsApp/Email resmi NFI.
                    </p>
                </div>
            </div>

            {/* 2. FOOTER DI BAGIAN BAWAH */}
            <Footer />
        </>
    );
};

export default ServiceGuide;