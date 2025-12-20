<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Carbon\Carbon;

class NewsController extends Controller
{
    /**
     * API untuk List Berita (Halaman Depan & Search)
     */
    public function index(Request $request)
    {
        // 1. Mulai Query
        $query = News::query()
            ->where('is_active', true) // Hanya tampilkan yang aktif
            ->latest('published_at');

        // 2. FILTER KATEGORI
        // Logika: Jika ada request 'category' DAN isinya bukan 'All'
        if ($request->has('category') && $request->category != 'All') {
            $query->where('category', $request->category);
        }

        // 3. FILTER SEARCH
        // Logika: Jika ada request 'search'
        if ($request->has('search') && $request->search != '') {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        // 4. Eksekusi Pagination
        // Kita gunakan paginate(6) agar pas dengan layout grid React
        $news = $query->paginate(6);

        // Opsional: Memperbaiki URL gambar di list agar full path (seperti di method show)
        // Tapi jika di React sudah ada logika check 'http', ini tidak wajib.
        // Biarkan default paginate response agar pagination link aman.
        
        return response()->json($news);
    }

    /**
     * API untuk Detail Berita (Halaman Baca)
     */
    public function show($slug)
    {
        // 1. Cari Berita
        $news = News::where('slug', $slug)->first();

        // Cek jika tidak ada
        if (!$news) {
            return response()->json(['message' => 'Not Found'], 404);
        }

        // 2. Ambil Related News (Berita Terkait untuk Sidebar)
        $relatedNews = News::where('id', '!=', $news->id) // Jangan tampilkan berita yang sedang dibuka
            ->where('is_active', true)
            ->latest()
            ->take(3) 
            ->get()
            ->map(function ($item) {
                return [
                    'title' => $item->title,
                    'slug'  => $item->slug,
                    'date'  => Carbon::parse($item->published_at)->format('d M Y'),
                    // Pastikan URL gambar lengkap
                    'image' => $item->image ? asset('storage/' . $item->image) : null,
                ];
            });

        // 3. Return Data Lengkap
        return response()->json([
            'id'       => $news->id,
            'title'    => $news->title,
            'slug'     => $news->slug,
            'category' => $news->category ?? 'General',
            'content'  => $news->content,
            // Perbaiki URL gambar utama agar siap pakai di React
            'image'    => $news->image ? asset('storage/' . $news->image) : null,
            'date'     => Carbon::parse($news->published_at)->format('d F Y'),
            'author'   => 'Admin NFI',
            
            // Data Sidebar
            'related_news' => $relatedNews 
        ]);
    }
}