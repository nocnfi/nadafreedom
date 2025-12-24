import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    // FUNGSI 1: Scroll ke Coverage Section (di Home)
    const scrollToCoverage = () => {
        const sectionId = 'coverage-section';

        if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    // FUNGSI 2: Scroll ke FAQ Section (di Contact)
    const scrollToFAQ = () => {
        const sectionId = 'faq-section'; 

        if (location.pathname === '/contact') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/contact');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <footer className="w-full bg-[#1A1A1A] text-white pt-20 pb-8 font-['Poppins']">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* --- COLUMN 1: BRAND & NEWSLETTER --- */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="w-32">
                            <img src="/images/logo.png" alt="NFI Logo" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed pr-4">
                            Best Quality, Right Price. We are committed to providing a stable pure fiber network for every home and business.
                        </p>
                        <div className="mt-2">
                            <label className="block text-sm font-medium mb-3 text-white">For our news</label>
                            <div className="relative w-full max-w-sm">
                                <input type="email" placeholder="enter your email address" className="w-full h-12 pl-6 pr-36 rounded-full bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400" />
                                <button className="absolute top-1 right-1 bottom-1 px-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold hover:scale-105 transition-all">
                                    subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMN 2: SERVICES --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <button onClick={scrollToCoverage} className="hover:text-blue-400 transition-colors text-left">
                                    Network Area Check
                                </button>
                            </li>
                            <li><Link to="/plans" className="hover:text-blue-400 transition-colors">Home Packages</Link></li>
                            <li><Link to="/support" className="hover:text-blue-400 transition-colors">24/7 Support</Link></li>
                            <li><Link to="/installation" className="hover:text-blue-400 transition-colors">Free Installation</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 3: COMPANY --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                            <li><Link to="/terms-and-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 4: RESOURCES --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <button onClick={scrollToFAQ} className="hover:text-blue-400 transition-colors text-left font-medium">
                                    FAQ (Q&A)
                                </button>
                            </li>
                            <li><Link to="/news" className="hover:text-blue-400 transition-colors">News & Updates</Link></li>
                            <li><Link to="/tips" className="hover:text-blue-400 transition-colors">Router Usage Tips</Link></li>
                            <li><Link to="/stabilization" className="hover:text-blue-400 transition-colors">Network Stabilization</Link></li>
                            <li><Link to="/guide" className="hover:text-blue-400 transition-colors">Service Guide</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 5: CONTACT & SOCIAL --- */}
                    <div className="lg:col-span-2 pt-2 flex flex-col gap-8">
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                            <ul className="space-y-5 text-sm text-gray-400">
                                <li className="flex items-start gap-3">
                                    <img src="/icons/paper-plane.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                                    <span className="hover:text-white transition-colors cursor-pointer">nadafreedom@nfi.net</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img src="/icons/location.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                                    <span>Perumnas blok C57, Karawang Barat, Jawa Barat, Indonesia. 41360</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-3">
                             <a href="#" className="group"><img src="/icons/icon-facebook.svg" alt="Facebook" className="w-10 h-10 hover:opacity-80 transition-opacity" /></a>
                             <a href="#" className="group"><img src="/icons/icon-instagram.svg" alt="Instagram" className="w-10 h-10 hover:opacity-80 transition-opacity" /></a>
                             <a href="#" className="group"><img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-10 h-10 hover:opacity-80 transition-opacity" /></a>
                             <a href="#" className="group"><img src="/icons/icon-linkedin.svg" alt="LinkedIn" className="w-10 h-10 hover:opacity-80 transition-opacity" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-sm font-medium text-gray-500">
                        &copy; 2026 NOC NFI . All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;