import '../css/app.css'; 
import './i18n'; 

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Import Halaman (Pages) ---
import Home from './pages/home';
import NewsPage from './pages/news';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Plans from './pages/Plans';
import Business from './pages/Business';
import TermsConditions from './pages/TermsConditions'; // 👈 IMPORT INI
import PrivacyPolicy from './pages/PrivacyPolicy'; // 👈 IMPORT INI

import NewsDetail from './components/NewsDetail'; 

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:slug" element={<NewsDetail />} />
                <Route path="/business" element={<Business />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                
                {/* 👈 TAMBAHKAN ROUTE BARU INI */}
                <Route path="/terms-and-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                <Route path="*" element={<div className="p-20 text-center text-red-500 font-bold">404 - Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

const rootElement = document.getElementById('app');
if (rootElement) {
    createRoot(rootElement).render(<App />);
}