import '../css/app.css'; // Import CSS Global (Tailwind)

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

// --- IMPORT BARU: DETAIL BERITA ---
// Pastikan file NewsDetail.jsx sudah Anda buat di folder components
import NewsDetail from './components/NewsDetail'; 

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Route Utama (Home) */}
                <Route path="/" element={<Home />} />
                
                {/* Route Halaman List Berita */}
                <Route path="/news" element={<NewsPage />} />

                {/* --- ROUTE BARU: DETAIL BERITA (DYNAMIC SLUG) --- */}
                {/* Tanda titik dua (:slug) artinya bagian ini bisa berubah-ubah */}
                <Route path="/news/:slug" element={<NewsDetail />} />
                
                {/* Route Placeholder */}
                <Route path="/business" element={<Business />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />

                {/* Route 404 */}
                <Route path="*" element={<div className="p-20 text-center text-red-500 font-bold">404 - Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

const rootElement = document.getElementById('app');
if (rootElement) {
    createRoot(rootElement).render(<App />);
}