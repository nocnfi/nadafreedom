import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the hook

export default function Navbar() {
    const { t, i18n } = useTranslation(); // Use translation hook
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    // Detect active language from i18next (normalized to uppercase)
    const currentLang = i18n.language ? i18n.language.toUpperCase().split('-')[0] : 'ID';

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang); // This triggers the global language update
        setIsOpen(false); // Close mobile menu if open
    };

    // Use t() function to translate link names based on your JSON files
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
        <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-100 font-sans">
            <div className="container mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
                
                {/* LOGO SECTION */}
                <Link to="/" className="flex items-center gap-1 group">
                    <img 
                        src="/images/logo.png" 
                        alt="NFI Logo"
                        className="h-10 w-auto"
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

                {/* DESKTOP MENU LINKS */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = currentPath === link.href;
                        return (
                            <Link 
                                key={link.href} 
                                to={link.href} 
                                className={`text-xl font-bold tracking-wide transition-all duration-300 uppercase 
                                    ${isActive ? gradientTextClass : 'text-indigo-900/70 hover:text-indigo-600'}
                                    hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa]
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* RIGHT SECTION (Language Switcher & Mobile Toggle) */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center text-sm tracking-wider cursor-pointer select-none">
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

            {/* MOBILE DROPDOWN MENU */}
            <div className={`lg:hidden bg-white absolute w-full left-0 top-24 shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
                    
                    {/* LANGUAGE SWITCHER (MOBILE) */}
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center gap-3 font-bold text-sm cursor-pointer">
                         <span 
                            onClick={() => handleLanguageChange('ID')}
                            className={currentLang === 'ID' ? gradientTextClass : inactiveTextClass}
                        >ID</span>
                        <span className="text-gray-300">|</span>
                        <span 
                            onClick={() => handleLanguageChange('EN')}
                            className={currentLang === 'EN' ? gradientTextClass : inactiveTextClass}
                        >EN</span>
                    </div>
                </div>
            </div> 
        </nav>
    );
}