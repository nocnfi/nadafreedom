import React, { useState } from 'react';
// 1. Ganti import dari @inertiajs/react ke react-router-dom
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    // 2. Gunakan hook useLocation untuk mendeteksi URL aktif
    const location = useLocation();
    const currentPath = location.pathname;

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' }, 
        { name: 'BUSINESS', href: '/business' },
        { name: 'PLANS', href: '/plans' },
        { name: 'ABOUT US', href: '/about-us' },
        { name: 'CONTACT', href: '/contact' },
    ];

    // Style untuk gradient text (Tetap sama sesuai desain Anda)
    const gradientTextClass = 'text-transparent bg-clip-text bg-gradient-to-r from-[#6717cd] to-[#2871fa]';

    return (
        <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-100 font-sans">
            <div className="container mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
                
                {/* --- 1. LOGO SECTION --- */}
                {/* Ganti properti 'href' menjadi 'to' */}
                <Link to="/" className="flex items-center gap-1 group">
                    <img 
                        src="/images/logo.png" 
                        alt="NFI Logo"
                        className="h-10 w-auto"
                        onError={(e) => {
                            // Fallback jika gambar error
                            e.currentTarget.style.display = 'none';
                            document.getElementById('logo-fallback').style.display = 'flex';
                        }}
                    />
                    {/* Fallback Teks */}
                    <div id="logo-fallback" className="hidden text-3xl font-extrabold tracking-tighter items-center select-none">
                        <span className="bg-gradient-to-r from-[#6717cd] to-[#2871fa] bg-clip-text text-transparent">
                            NFI
                        </span>
                    </div>
                </Link>

                {/* --- 2. DESKTOP MENU LINKS --- */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        // Cek apakah link ini sedang aktif
                        const isActive = currentPath === link.href;
                        
                        return (
                            <Link 
                                key={link.name} 
                                to={link.href} // Ubah href={link.href} menjadi to={link.href}
                                className={`text-xl font-bold tracking-wide transition-all duration-300 uppercase 
                                    ${isActive 
                                        ? gradientTextClass // Jika Aktif: Pakai Gradient
                                        : 'text-indigo-900/70 hover:text-indigo-600' // Tidak Aktif
                                    }
                                    hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa]
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* --- 3. RIGHT SECTION (Bahasa & Mobile Toggle) --- */}
                <div className="flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="hidden lg:flex items-center text-sm font-bold tracking-wider">
                        <span className={gradientTextClass + " cursor-pointer"}>ID</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-gray-400 cursor-pointer hover:text-blue-600 transition">EN</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition p-1"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>
            </div> 

            {/* --- 4. MOBILE DROPDOWN MENU --- */}
            <div className={`lg:hidden bg-white absolute w-full left-0 top-24 shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href} // Ubah href menjadi to
                            className={`text-xl font-bold block ${currentPath === link.href ? gradientTextClass : 'text-gray-600'}`}
                            onClick={() => setIsOpen(false)} // Tutup menu saat diklik
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* Mobile Language Switcher */}
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center gap-3 font-bold text-sm">
                        <span className={gradientTextClass}>ID</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400">EN</span>
                    </div>
                </div>
            </div> 
        </nav>
    );
}