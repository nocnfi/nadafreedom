import React, { useState } from 'react';

// --- IMPORT KOMPONEN ---
// Pastikan path import ini sesuai dengan struktur folder Anda
import Navbar from '../components/navbar'; 
import Footer from '../components/Footer';
import NewsTrending from '../components/News-Trending';
import NewsFilter from '../components/NewsFilter';
import NewsList from '../components/Newslist';

const NewsPage = () => {
    // 1. State untuk Kategori (Default 'All' agar muncul semua di awal)
    const [activeCategory, setActiveCategory] = useState('All');

    // 2. State untuk Search (Baru)
    const [searchQuery, setSearchQuery] = useState('');

    // Daftar Kategori (Sesuai database Laravel)
    const categories = ['All', 'Teknologi', 'Bisnis', 'Layanan', 'Regulasi & Kebijakan'];

    return (
        <div className="w-full bg-white min-h-screen font-['Poppins'] flex flex-col">
            
            <Navbar />

            <main className="flex-grow pb-20 pt-24"> 
                {/* pt-24 ditambahkan agar tidak tertutup navbar jika fixed */}
                
                {/* 1. SECTION: NEWS TRENDING */}
                {/* Komponen ini mandiri, dia ambil data sendiri dari API */}
                <NewsTrending />

                {/* 2. SECTION: FILTER & SEARCH */}
                {/* Kita oper State & Setter ke sini agar tombol & input berfungsi */}
                <NewsFilter 
                    activeCategory={activeCategory} 
                    setActiveCategory={setActiveCategory} 
                    categories={categories}
                    searchQuery={searchQuery}       // Oper value search
                    setSearchQuery={setSearchQuery} // Oper fungsi update search
                />

                {/* 3. SECTION: LIST BERITA */}
                {/* Kita HAPUS 'articles={articles}' karena NewsList sekarang ambil data sendiri */}
                {/* Kita GANTI dengan mengirim 'activeCategory' & 'searchQuery' */}
                <NewsList 
                    activeCategory={activeCategory} 
                    searchQuery={searchQuery} 
                />

            </main>

            <Footer />
        </div>
    );
};

export default NewsPage;