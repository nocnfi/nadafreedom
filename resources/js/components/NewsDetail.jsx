import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar'; 
import Footer from '../components/Footer'; 
import { Heart, Share2, Bookmark, User, Clock, Calendar } from 'lucide-react';
import Swal from 'sweetalert2'; // Pastikan sudah npm install sweetalert2

const NewsDetail = () => {
    const { slug } = useParams();
    
    // --- STATE MANAGEMENT ---
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // State Like, Bookmark, Related News
    const [likesCount, setLikesCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [relatedNews, setRelatedNews] = useState([]);
    
    // State Subscribe
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // State Waktu Baca
    const [readTime, setReadTime] = useState(1); 

    // --- CONFIG SWEETALERT (TOAST) ---
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    // --- HELPER: Hitung Waktu Baca ---
    const calculateReadTime = (content) => {
        const text = content.replace(/<[^>]*>/g, '');
        const wordCount = text.split(/\s+/).length;
        return Math.ceil(wordCount / 200); // Avg speed 200 kata/menit
    };

    // --- USE EFFECT (Load Data) ---
    useEffect(() => {
        window.scrollTo(0, 0); 
        setLoading(true);

        // 1. Fetch Berita Utama
        fetch(`http://127.0.0.1:8000/api/news/${slug}`, {
            headers: { 'Accept': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
            setNews(data);
            setLikesCount(data.likes_count || 0);

            if (data.content) {
                setReadTime(calculateReadTime(data.content));
            }
            setLoading(false);
        })
        .catch(err => {
            console.error("Gagal load berita:", err);
            setLoading(false);
        });

        // 2. Fetch Related News (Endpoint Khusus)
        fetch(`http://127.0.0.1:8000/api/news/related/${slug}`)
        .then(res => res.json())
        .then(data => {
            setRelatedNews(Array.isArray(data) ? data : []);
        })
        .catch(err => console.error("Gagal load related news:", err));

        // 3. Cek LocalStorage
        const savedBookmarks = JSON.parse(localStorage.getItem('nfi_bookmarks') || '[]');
        setIsBookmarked(savedBookmarks.includes(slug));

        const likedArticles = JSON.parse(localStorage.getItem('nfi_liked_articles') || '[]');
        setIsLiked(likedArticles.includes(slug));

    }, [slug]);

    // --- HANDLERS ---

    // 1. Handle Like
    const handleLike = async () => {
        const likedArticles = JSON.parse(localStorage.getItem('nfi_liked_articles') || '[]');

        if (isLiked) {
            Toast.fire({ icon: 'info', title: 'Anda sudah menyukai artikel ini' });
            return; 
        }

        // Optimistic UI Update
        setIsLiked(true);
        setLikesCount(prev => prev + 1);

        // Simpan LocalStorage & Toast
        likedArticles.push(slug);
        localStorage.setItem('nfi_liked_articles', JSON.stringify(likedArticles));
        Toast.fire({ icon: 'success', title: 'Terima kasih atas apresiasi Anda!' });

        // Kirim ke Backend
        try {
            await fetch(`http://127.0.0.1:8000/api/news/${slug}/like`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            console.error("Gagal kirim like ke server", error);
        }
    };

    // 2. Handle Bookmark
    const handleBookmark = () => {
        const savedBookmarks = JSON.parse(localStorage.getItem('nfi_bookmarks') || '[]');
        
        if (isBookmarked) {
            const updatedBookmarks = savedBookmarks.filter(item => item !== slug);
            localStorage.setItem('nfi_bookmarks', JSON.stringify(updatedBookmarks));
            setIsBookmarked(false);
            Toast.fire({ icon: 'warning', title: 'Dihapus dari daftar simpan' });
        } else {
            savedBookmarks.push(slug);
            localStorage.setItem('nfi_bookmarks', JSON.stringify(savedBookmarks));
            setIsBookmarked(true);
            Toast.fire({ icon: 'success', title: 'Berita berhasil disimpan!' });
        }
    };

    // 3. Handle Share
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: news.title,
                text: news.excerpt,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            Toast.fire({ icon: 'success', title: 'Link disalin ke clipboard' });
        }
    };

    // 4. Handle Subscribe (Popup Besar)
    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitting(true);

        try {
            const res = await fetch('http://127.0.0.1:8000/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (res.ok) {
                Swal.fire({
                    title: 'Berhasil Berlangganan!',
                    text: 'Terima kasih telah bergabung dengan NFI News.',
                    icon: 'success',
                    confirmButtonText: 'Mantap!',
                    confirmButtonColor: '#1A237E'
                });
                setEmail('');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email mungkin sudah terdaftar atau tidak valid.',
                    confirmButtonColor: '#d33',
                });
            }
        } catch (error) {
            Swal.fire({ icon: 'error', title: 'Koneksi Gagal', text: 'Periksa koneksi internet Anda.' });
        } finally {
            setSubmitting(false);
        }
    };

    // --- RENDER ---
    if (loading) return (
        <div className="h-screen flex justify-center items-center bg-white">
            <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (!news) return <div className="text-center py-40 font-bold text-xl">Berita tidak ditemukan.</div>;

    return (
        <div className="bg-white text-gray-900 font-sans">
            <Navbar />

            <main className="container mx-auto px-4 max-w-6xl pt-28 pb-24 news-container">

                {/* HEADER SECTION */}
                <div className="max-w-4xl news-header-section mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span className="text-sm font-bold text-yellow-600 uppercase tracking-widest">
                            {news.category || 'NEWS'}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        {news.title}
                    </h1>
                </div>

                {/* HERO IMAGE */}
                <div className="w-full h-[350px] md:h-[550px] bg-gray-100 rounded-2xl overflow-hidden mb-8 shadow-sm news-hero-image">
                    <img 
                        src={news.image || 'https://via.placeholder.com/1200x800'} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => e.target.src = 'https://via.placeholder.com/1200x800?text=No+Image'}
                    />
                </div>

                {/* META BAR */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-gray-100 py-5 mb-12 news-meta-bar gap-6">
                    
                    {/* Info Penulis & Follow Button */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                            <img 
                                src="https://ui-avatars.com/api/?name=Admin+NFI&background=1A237E&color=fff" 
                                alt="Admin" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-900 flex items-center">
                                Admin NFI 
                                {/* TOMBOL FOLLOW KE INSTAGRAM */}
                                <a 
                                    href="https://www.instagram.com/nadafreedomindonesia" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 text-xs ml-2 font-semibold hover:underline cursor-pointer"
                                >
                                    Follow
                                </a>
                            </p>
                            <div className="text-xs text-gray-500 flex items-center gap-3 mt-1">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {news.date || new Date().toLocaleDateString()}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1 font-medium text-blue-800">
                                    <Clock className="w-3 h-3"/> {readTime} min read
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Tombol Aksi (Like, Share, Bookmark) */}
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={handleLike} 
                            disabled={isLiked} 
                            className={`flex items-center gap-2 group transition-colors ${isLiked ? 'cursor-default' : 'cursor-pointer'}`}
                            title={isLiked ? "Anda menyukai ini" : "Suka artikel ini"}
                        >
                            <div className={`p-2 rounded-full transition-all ${isLiked ? 'bg-red-50' : 'bg-gray-50 group-hover:bg-red-50'}`}>
                                <Heart className={`w-5 h-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500 group-hover:text-red-500'}`} />
                            </div>
                            <span className={`text-sm font-semibold ${isLiked ? 'text-red-600' : 'text-gray-600'}`}>
                                {likesCount}
                            </span>
                        </button>

                        <button onClick={handleShare} className="flex items-center gap-2 group transition-colors">
                            <div className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-all">
                                <Share2 className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                            </div>
                        </button>

                        <button onClick={handleBookmark} className="group" title={isBookmarked ? "Hapus Simpanan" : "Simpan Berita"}>
                             <div className={`p-2 rounded-full transition-all ${isBookmarked ? 'bg-yellow-50' : 'bg-gray-50 group-hover:bg-yellow-50'}`}>
                                <Bookmark className={`w-5 h-5 transition-colors ${isBookmarked ? 'fill-yellow-500 text-yellow-500' : 'text-gray-500 group-hover:text-yellow-600'}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* CONTENT & SIDEBAR */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 news-content-wrapper">
                    
                    {/* Artikel Utama */}
                    <div className="lg:col-span-8">
                        <article 
                            className="news-content prose prose-lg text-gray-700 leading-relaxed max-w-none"
                            dangerouslySetInnerHTML={{ __html: news.content }} 
                        />
                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Related Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer transition-colors">#Technology</span>
                                <span className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer transition-colors">#Internet</span>
                                <span className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer transition-colors">#NFI</span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 lg:pl-8 border-l border-gray-100">
                            
                            {/* Widget: More Articles */}
                            <div className="mb-10">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-l-4 border-yellow-500 pl-3">
                                    More Articles
                                </h3>
                                <div className="flex flex-col gap-6">
                                    {relatedNews.length > 0 ? (
                                        relatedNews.map((item) => (
                                            <Link to={`/news/${item.slug}`} key={item.id} className="group flex gap-4 items-start">
                                                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                                                    <img 
                                                        src={item.image || `https://ui-avatars.com/api/?name=${item.title}&background=random`} 
                                                        alt={item.title} 
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        onError={(e) => e.target.src = 'https://via.placeholder.com/200?text=NFI'}
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                                                        {item.title}
                                                    </h4>
                                                    <span className="text-xs text-gray-400 mt-2 block">{item.date}</span>
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500 italic">Tidak ada berita terkait lainnya.</p>
                                    )}
                                </div>
                            </div>

                            {/* Widget: Subscribe Box */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                                <h4 className="font-bold text-gray-900 text-lg mb-2">Subscribe to NFI</h4>
                                <p className="text-gray-500 text-sm mb-4">Get the latest news & updates directly to your inbox.</p>
                                <form onSubmit={handleSubscribe}>
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address" 
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg mb-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white" 
                                    />
                                    <button 
                                        type="submit" 
                                        disabled={submitting}
                                        className={`w-full text-white font-bold py-3 rounded-lg text-sm transition-colors uppercase tracking-wider ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1A237E] hover:bg-blue-900'}`}
                                    >
                                        {submitting ? 'Subscribing...' : 'Subscribe Now'}
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