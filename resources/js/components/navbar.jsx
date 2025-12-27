import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    // Deteksi scroll untuk memberikan efek shadow dan mengecilkan ukuran
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- LOGIKA BAHASA (Huruf Besar Sesuai Request) ---
    const currentLang = i18n.language ? i18n.language.toUpperCase().split('-')[0] : 'ID';

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang); // Kirim 'ID' atau 'EN'
        setIsOpen(false);
    };

    const navLinks = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.news'), href: '/news' }, 
        { name: t('nav.business'), href: '/business' },
        { name: t('nav.plans'), href: '/plans' },
        { name: t('nav.about'), href: '/about-us' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    const gradientTextClass = 'text-transparent bg-clip-text bg-gradient-to-r from-[#6717cd] to-[#2871fa] font-bold';
    const inactiveTextClass = 'text-gray-400 hover:text-blue-600 transition font-medium';

    return (
        // PERUBAHAN UTAMA: 'sticky' bukan 'fixed'.
        // bg-white selalu aktif agar konten di bawahnya tidak terlihat tembus saat sticky
        <nav className={`sticky top-0 left-0 w-full z-[9999] transition-all duration-300 font-sans border-b bg-white/95 backdrop-blur-md ${
            isScrolled 
            ? 'shadow-md border-gray-200 py-2' // Saat Scroll: Ada shadow, padding kecil
            : 'border-transparent py-4'        // Saat Di Atas: Tanpa shadow, padding besar
        }`}>
            <div className={`container mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
                isScrolled ? 'h-16' : 'h-20'
            }`}>
                
                {/* LOGO */}
                <Link to="/" className="flex items-center gap-1 group">
                    <img 
                        src="/images/logo.svg" 
                        alt="NFI Logo"
                        className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'} w-auto`}
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            document.getElementById('logo-fallback').style.display = 'flex';
                        }}
                    />
                    <div id="logo-fallback" className="hidden text-3xl font-extrabold tracking-tighter items-center select-none">
                        <span className="bg-gradient-to-r from-[#6717cd] to-[#2871fa] bg-clip-text text-transparent">
                            NFI
                        </span>
                    </div>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = currentPath === link.href;
                        return (
                            <Link 
                                key={link.href} 
                                to={link.href} 
                                className={`text-sm lg:text-base font-bold tracking-wide transition-all duration-300 uppercase 
                                    ${isActive ? gradientTextClass : 'text-indigo-900/70 hover:text-indigo-600'}
                                    hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa]
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* RIGHT SECTION */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center text-sm tracking-wider cursor-pointer select-none font-bold">
                        <span 
                            onClick={() => handleLanguageChange('ID')}
                            className={currentLang === 'ID' ? gradientTextClass : inactiveTextClass}
                        >ID</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span 
                            onClick={() => handleLanguageChange('EN')}
                            className={currentLang === 'EN' ? gradientTextClass : inactiveTextClass}
                        >EN</span>
                    </div>

                    {/* Mobile Toggle */}
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

            {/* MOBILE DROPDOWN */}
            <div className={`lg:hidden bg-white absolute w-full left-0 shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            to={link.href} 
                            className={`text-xl font-bold block ${currentPath === link.href ? gradientTextClass : 'text-gray-600'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center gap-3 font-bold text-sm cursor-pointer">
                         <span onClick={() => handleLanguageChange('ID')} className={currentLang === 'ID' ? gradientTextClass : inactiveTextClass}>ID</span>
                        <span className="text-gray-300">|</span>
                        <span onClick={() => handleLanguageChange('EN')} className={currentLang === 'EN' ? gradientTextClass : inactiveTextClass}>EN</span>
                    </div>
                </div>
            </div> 
        </nav>
    );
}