import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import translation hook
import axios from 'axios';

const Footer = () => {
    const { t } = useTranslation(); // Inisialisasi hook
    const location = useLocation();
    const navigate = useNavigate();

    // --- STATE MANAGEMENT ---
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subscribeStatus, setSubscribeStatus] = useState(null); 
    const [message, setMessage] = useState('');

    // --- FUNGSI SUBSCRIBE ---
    const handleSubscribe = async (e) => {
        e.preventDefault(); 
        
        if (!email || !email.includes('@')) {
            setSubscribeStatus('error');
            setMessage(t('footer.newsletter.messages.invalid_email')); // Gunakan translate
            return;
        }

        setIsSubmitting(true);
        setSubscribeStatus(null);
        setMessage('');

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

            const response = await axios.post('/api/subscribe', 
                { email: email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrfToken || ''
                    }
                }
            );

            if (response.status === 200 || response.status === 201) {
                setSubscribeStatus('success');
                setEmail(''); 
                setMessage(''); 
                setTimeout(() => { setSubscribeStatus(null); }, 3000);
            }

        } catch (error) {
            console.error("Subscribe Error:", error);
            setSubscribeStatus('error');
            
            if (error.response) {
                const { status, data } = error.response;
                if (status === 422) {
                    if (data.errors && data.errors.email) {
                        setMessage(data.errors.email[0]); 
                    } else {
                        setMessage(data.message || t('footer.newsletter.messages.invalid_email'));
                    }
                } else {
                    setMessage(t('footer.newsletter.messages.failed')); // Gunakan translate
                }
            } else {
                setMessage(t('footer.newsletter.messages.network_error')); // Gunakan translate
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToCoverage = () => {
        const sectionId = 'coverage-section';
        const doScroll = () => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        if (location.pathname === '/') {
            doScroll();
        } else {
            navigate('/');
            setTimeout(doScroll, 500);
        }
    };

    const scrollToFAQ = () => {
        const sectionId = 'faq-section'; 
        const doScroll = () => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        if (location.pathname === '/contact') {
            doScroll();
        } else {
            navigate('/contact');
            setTimeout(doScroll, 500);
        }
    };

    return (
        <footer className="w-full bg-[#1A1A1A] text-white pt-20 pb-8 font-['Poppins']">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* --- COLUMN 1: BRAND & NEWSLETTER --- */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="w-32">
                            <img src="/images/logo.svg" alt="NFI Logo" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed pr-4">
                            {t('footer.description')}
                        </p>
                        
                        <div className="mt-2">
                            <label className="block text-sm font-medium mb-3 text-white">
                                {t('footer.newsletter.label')}
                            </label>
                            <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('footer.newsletter.placeholder')} 
                                    className={`w-full h-12 pl-6 pr-36 rounded-full bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 disabled:opacity-70 ${subscribeStatus === 'error' ? 'ring-2 ring-red-500' : ''}`}
                                    disabled={isSubmitting || subscribeStatus === 'success'}
                                />
                                <button 
                                    type="submit"
                                    disabled={isSubmitting || subscribeStatus === 'success'}
                                    className={`absolute top-1 right-1 bottom-1 h-10 px-8 rounded-full text-white text-sm font-bold transition-all duration-300 flex items-center justify-center min-w-[100px] ${
                                        isSubmitting 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : subscribeStatus === 'success'
                                                ? 'bg-green-500 cursor-default scale-105'
                                                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span>{t('footer.newsletter.loading')}</span>
                                    ) : subscribeStatus === 'success' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white animate-bounce-short" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        t('footer.newsletter.button')
                                    )}
                                </button>
                            </form>
                            {subscribeStatus === 'error' && message && (
                                <p className="text-xs mt-2 ml-4 text-red-400 font-medium animate-pulse">{message}</p>
                            )}
                        </div>
                    </div>

                    {/* --- COLUMN 2: SERVICES --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">{t('footer.titles.services')}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <button onClick={scrollToCoverage} className="hover:text-blue-400 transition-colors text-left">
                                    {t('footer.links.network_check')}
                                </button>
                            </li>
                            <li><Link to="/plans" className="hover:text-blue-400 transition-colors">{t('footer.links.home_packages')}</Link></li>
                            <li><Link to="/support" className="hover:text-blue-400 transition-colors">{t('footer.links.support')}</Link></li>
                            <li><Link to="/free-installation" className="hover:text-blue-400 transition-colors">{t('footer.links.free_install')}</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 3: COMPANY --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">{t('footer.titles.company')}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">{t('footer.links.about')}</Link></li>
                            <li><Link to="/careers" className="hover:text-blue-400 transition-colors">{t('footer.links.careers')}</Link></li>
                            <li><Link to="/terms-and-conditions" className="hover:text-blue-400 transition-colors">{t('footer.links.terms')}</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">{t('footer.links.privacy')}</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 4: RESOURCES --- */}
                    <div className="lg:col-span-2 pt-2">
                        <h4 className="text-lg font-bold mb-6 text-white">{t('footer.titles.resources')}</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <button onClick={scrollToFAQ} className="hover:text-blue-400 transition-colors text-left font-medium">
                                    {t('footer.links.faq')}
                                </button>
                            </li>
                            <li><Link to="/news" className="hover:text-blue-400 transition-colors">{t('footer.links.news')}</Link></li>
                            <li><Link to="/news/tips-mengoptimalkan-penggunaan-router-internet" className="hover:text-blue-400 transition-colors">{t('footer.links.router_tips')}</Link></li>
                            <li><Link to="/news/tips-mengoptimalkan-penggunaan-router-internet" className="hover:text-blue-400 transition-colors">{t('footer.links.network_stabil')}</Link></li>
                            <li><Link to="/service-guide" className="hover:text-blue-400 transition-colors">{t('footer.links.service_guide')}</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 5: CONTACT & SOCIAL --- */}
                    <div className="lg:col-span-2 pt-2 flex flex-col gap-8">
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white">{t('footer.titles.contact')}</h4>
                            <ul className="space-y-5 text-sm text-gray-400">
                                <li className="flex items-start gap-3">
                                    <img src="/icons/paper-plane.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                                    <a href="mailto:info@nfi.net.id" className="hover:text-white transition-colors cursor-pointer">info@nfi.net.id</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img src="/icons/location.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-80" />
                                    <span>Perumnas blok C57, Karawang Barat, Jawa Barat, Indonesia. 41360</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/share/17wuieuQyv/" target="_blank" rel="noreferrer" className="group">
                                <img src="/icons/icon-facebook.svg" alt="Facebook" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                            </a>
                            <a href="https://www.instagram.com/nadafreedomindonesia?utm_source=qr&igsh=Zmg1YjVja3lxZWhy" target="_blank" rel="noreferrer" className="group">
                                <img src="/icons/icon-instagram.svg" alt="Instagram" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                            </a>
                            <a href="https://wa.me/6282295555976" target="_blank" rel="noreferrer" className="group">
                                <img src="/icons/icon-whatsapp.svg" alt="WhatsApp" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                            </a>
                            <a href="https://www.linkedin.com/in/nada-freedom-indonesia-4109573a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="group">
                                <img src="/icons/icon-linkedin.svg" alt="LinkedIn" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-sm font-medium text-gray-500">
                        {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;