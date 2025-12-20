import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import { Heart, Share2, Bookmark, User, Clock, Calendar } from 'lucide-react';

const NewsDetail = () => {
    const { slug } = useParams();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    // State untuk fitur Like (Simulasi)
    const [likesCount, setLikesCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll ke atas saat halaman dimuat
        setLoading(true);

        // Fetch API Laravel
        fetch(`http://127.0.0.1:8000/api/news/${slug}`, {
            headers: { 'Accept': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
            setNews(data);
            // Generate angka random untuk like (hanya simulasi)
            setLikesCount(Math.floor(Math.random() * 200) + 50);
            setLoading(false);
        })
        .catch(err => {
            console.error("Gagal load berita:", err);
            setLoading(false);
        });
    }, [slug]);

    // Handle Like Button
    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    // Handle Share Button
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: news.title,
                text: news.excerpt,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link berhasil disalin ke clipboard!");
        }
    };

    if (loading) return (
        <div className="h-screen flex justify-center items-center bg-white">
            <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (!news) return <div className="text-center py-40 font-bold text-xl">Berita tidak ditemukan.</div>;

    return (
        <div className="bg-white text-gray-900 font-sans">
            <Navbar />

            {/* CONTAINER UTAMA */}
            {/* Kita gunakan class 'news-container' agar sinkron dengan app.css */}
            <main className="container mx-auto px-4 max-w-6xl pt-28 pb-24 news-container">

                {/* 1. HEADER SECTION (Kategori & Judul) */}
                <div className="max-w-4xl news-header-section mb-8">
                    {/* Kategori Label */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span className="text-sm font-bold text-yellow-600 uppercase tracking-widest">
                            {news.category || 'NEWS'}
                        </span>
                    </div>

                    {/* Judul Besar */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        {news.title}
                    </h1>
                </div>

                {/* 2. GAMBAR UTAMA (HERO IMAGE) */}
                <div className="w-full h-[350px] md:h-[550px] bg-gray-100 rounded-2xl overflow-hidden mb-8 shadow-sm news-hero-image">
                    <img 
                        src={news.image || 'https://via.placeholder.com/1200x800'} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 3. META BAR (Penulis, Tanggal, Like, Share) */}
                {/* Posisi ini sekarang DI BAWAH GAMBAR sesuai permintaan */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-gray-100 py-5 mb-12 news-meta-bar gap-6">
                    
                    {/* KIRI: Info Penulis */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                            <img 
                                src="https://ui-avatars.com/api/?name=Admin+NFI&background=1A237E&color=fff" 
                                alt="Admin" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-900">
                                Admin NFI 
                                <button className="text-blue-600 text-xs ml-2 font-semibold hover:underline">Follow</button>
                            </p>
                            <div className="text-xs text-gray-500 flex items-center gap-3 mt-1">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {news.date}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> 5 min read</span>
                            </div>
                        </div>
                    </div>

                    {/* KANAN: Tombol Aksi (Like & Share) */}
                    <div className="flex items-center gap-6">
                        {/* Like */}
                        <button 
                            onClick={handleLike} 
                            className="flex items-center gap-2 group transition-colors"
                        >
                            <div className={`p-2 rounded-full transition-all ${isLiked ? 'bg-red-50' : 'bg-gray-50 group-hover:bg-red-50'}`}>
                                <Heart className={`w-5 h-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500 group-hover:text-red-500'}`} />
                            </div>
                            <span className={`text-sm font-semibold ${isLiked ? 'text-red-600' : 'text-gray-600'}`}>
                                {likesCount}
                            </span>
                        </button>

                        {/* Share */}
                        <button 
                            onClick={handleShare}
                            className="flex items-center gap-2 group transition-colors"
                        >
                            <div className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-all">
                                <Share2 className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                            </div>
                        </button>

                        {/* Bookmark (Opsional) */}
                        <button className="group">
                             <div className="p-2 rounded-full bg-gray-50 group-hover:bg-yellow-50 transition-all">
                                <Bookmark className="w-5 h-5 text-gray-500 group-hover:text-yellow-600" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* 4. KONTEN UTAMA & SIDEBAR (Layout Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 news-content-wrapper">
                    
                    {/* KOLOM KIRI: Artikel (Lebar 8) */}
                    <div className="lg:col-span-8">
                        {/* RENDER KONTEN DENGAN CLASS 'news-content' (dari App.css) */}
                        <article 
                            className="news-content"
                            dangerouslySetInnerHTML={{ __html: news.content }} 
                        />

                        {/* Tags di Bawah Artikel */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Related Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer transition-colors">#Technology</span>
                                <span className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer transition-colors">#Internet</span>
                                <span className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer transition-colors">#NFI</span>
                            </div>
                        </div>
                    </div>

                    {/* KOLOM KANAN: Sidebar (Lebar 4) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 lg:pl-8 border-l border-gray-100">
                            
                            {/* Widget: More Articles */}
                            <div className="mb-10">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-l-4 border-yellow-500 pl-3">
                                    More Articles
                                </h3>
                                <div className="flex flex-col gap-6">
                                    {[1, 2, 3].map((item) => (
                                        <Link to="#" key={item} className="group flex gap-4 items-start">
                                            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                                                <img 
                                                    src={`https://source.unsplash.com/random/200x200?sig=${item + 20}`} 
                                                    alt="" 
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                                                    How AI will transform the internet landscape in 2025.
                                                </h4>
                                                <span className="text-xs text-gray-400 mt-2 block">12 June 2025</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Widget: Subscribe Box */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                                <h4 className="font-bold text-gray-900 text-lg mb-2">Subscribe to NFI</h4>
                                <p className="text-gray-500 text-sm mb-4">Get the latest news & updates directly to your inbox.</p>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input 
                                        type="email" 
                                        placeholder="Your email address" 
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg mb-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white" 
                                    />
                                    <button className="w-full bg-[#1A237E] hover:bg-blue-900 text-white font-bold py-3 rounded-lg text-sm transition-colors uppercase tracking-wider">
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
};

export default NewsDetail;