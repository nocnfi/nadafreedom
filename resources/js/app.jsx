import '../css/app.css'; // Import CSS Global (Tailwind)

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Import Halaman (Pages) ---
import Home from './pages/home';
import NewsPage from './pages/news';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Route Utama (Home) */}
                <Route path="/" element={<Home />} />
                
                {/* Route Halaman Berita */}
                <Route path="/news" element={<NewsPage />} />
                
                {/* Route Placeholder */}
                <Route path="/business" element={<div className="p-20 text-center">Halaman Business Belum Dibuat</div>} />
                <Route path="/plans" element={<div className="p-20 text-center">Halaman Plans Belum Dibuat</div>} />
                <Route path="/contact" element={<div className="p-20 text-center">Halaman Contact Belum Dibuat</div>} />
                <Route path="/about-us" element={<div className="p-20 text-center">Halaman About Us Belum Dibuat</div>} />

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