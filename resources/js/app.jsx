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
import TermsConditions from './pages/TermsConditions'; 
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import ScrollToTop from './components/ScrollToTop';
import NewsDetail from './components/NewsDetail'; 
import ServiceGuide from './pages/ServiceGuide';
import Support from './pages/Support';
import FreeInstallation from './pages/FreeInstallation';
import NotFound from "./pages/NotFound";
    


// Matikan restorasi scroll browser agar ScrollToTop bekerja maksimal saat refresh
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:slug" element={<NewsDetail />} />
                <Route path="/business" element={<Business />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/terms-and-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/service-guide" element={<ServiceGuide />} />
                <Route path="/support" element={<Support />} />
                <Route path="/free-installation" element={<FreeInstallation />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

// Bagian ini adalah side-effect yang melakukan render ke DOM.
// JANGAN menambahkan kata kunci 'export' pada variabel rootElement atau App.
const rootElement = document.getElementById('app');
if (rootElement) {
    createRoot(rootElement).render(<App />);
}