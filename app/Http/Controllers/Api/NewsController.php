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
        if ($request->has('category') && $request->category != 'All') {
            $query->where('category', $request->category);
        }

        // 3. FILTER SEARCH
        if ($request->has('search') && $request->search != '') {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        // 4. Eksekusi Pagination
        $news = $query->paginate(6);
        
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

        // 2. Return Data Lengkap
        return response()->json([
            'id'       => $news->id,
            'title'    => $news->title,
            'slug'     => $news->slug,
            'category' => $news->category ?? 'General',
            'content'  => $news->content,
            'image'    => $news->image ? asset('storage/' . $news->image) : null,
            'date'     => Carbon::parse($news->published_at)->format('d F Y'),
            'author'   => 'Admin NFI',
            'likes_count' => $news->likes_count ?? 0, // Pastikan field ini ada di tabel atau di-handle
        ]);
    }

    /**
     * API KHUSUS: Berita Terkait (Related News)
     * Mengambil 3 berita terbaru KECUALI berita yang sedang dibuka ($slug)
     */
    public function related($slug)
    {
        // 1. Cari dulu berita utamanya untuk dapatkan ID-nya
        $currentNews = News::where('slug', $slug)->first();

        if (!$currentNews) {
            return response()->json(['message' => 'News not found'], 404);
        }

        // 2. Ambil 3 berita lain
        $relatedNews = News::where('id', '!=', $currentNews->id)
            ->where('is_active', true)
            ->latest('published_at')
            ->take(3)
            ->get()
            ->map(function ($item) {
                return [
                    'id'    => $item->id,
                    'title' => $item->title,
                    'slug'  => $item->slug,
                    'date'  => Carbon::parse($item->published_at)->format('d M Y'),
                    'image' => $item->image ? asset('storage/' . $item->image) : null,
                ];
            });

        return response()->json($relatedNews);
    }
}