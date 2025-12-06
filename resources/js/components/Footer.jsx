import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#1A1A1A] text-white pt-20 pb-8 font-['Poppins']">
            <div className="container mx-auto px-4">
                
                {/* === MAIN FOOTER CONTENT === */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* --- COLUMN 1: BRAND & NEWSLETTER (Lebar 4/12) --- */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Logo */}
                        <div className="w-32">
                            <img 
                                src="/images/logo.png" // Ganti dengan path logo Anda
                                alt="NFI Logo" 
                                className="w-full h-auto object-contain" 
                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed pr-4">
                            Best Quality, Right Price, Best Quality, Right Price. 
                            We are committed to providing a stable pure fiber network for every home and business.
                        </p>

                        {/* Newsletter Form */}
                        <div className="mt-2">
                            <label className="block text-sm font-medium mb-3 text-white">For our news</label>
                            <div className="relative w-full max-w-sm">
                                <input 
                                    type="email" 
                                    placeholder="enter your email addres" 
                                    className="w-full h-12 pl-6 pr-36 rounded-full bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                                />
                                <button className="absolute top-1 right-1 bottom-1 px-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMN 2: SERVICES (Lebar 2/12) --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Network Area Check</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Home Packages</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">24/7 Support</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Free Installation</a></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 3: COMPANY (Lebar 2/12) --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 4: RESOURCES (Lebar 2/12) --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ (Q&A)</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">News & Updates</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Router Usage Tips</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Network Stabilization</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Service Guide</a></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 5: CONTACT & SOCIAL (Lebar 2/12) --- */}
                    <div className="lg:col-span-2 pt-2 flex flex-col gap-8">
                        
                        {/* Contact Info */}
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

                        {/* Follow Us (Social Media Icons) */}
                        <div>
                            <h4 className="text-sm font-bold mb-4 text-white">Follow Us</h4>
                            <div className="flex gap-3">
                                {/* Ganti src dengan file SVG yang sudah Anda siapkan */}
                                <a href="#" className="group">
                                    <img src="/icons/icon-facebook.svg" alt="Facebook" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                                </a>
                                <a href="#" className="group">
                                    <img src="/icons/icon-instagram.svg" alt="Instagram" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                                </a>
                                <a href="#" className="group">
                                    <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                                </a>
                                <a href="#" className="group">
                                    <img src="/icons/icon-linkedin.svg" alt="LinkedIn" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* === COPYRIGHT BAR === */}
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