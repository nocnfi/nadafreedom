<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        // 1. Ambil data yang Aktif saja
        $query = News::where('is_active', true);

        // 2. Filter Kategori (jika dikirim dari React)
        if ($request->has('category') && $request->category != 'All') {
            $query->where('category', $request->category);
        }
        
        // 3. Search Judul (jika ada input search)
        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // 4. Urutkan & Pagination (6 item per load)
        $news = $query->latest('published_at')->paginate(6);

        // 5. Transform Data (PENTING: Agar format JSON sesuai dengan React)
        $news->getCollection()->transform(function ($item) {
            return [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'category' => $item->category,
                // Format tanggal: "19 December 2025"
                'date' => $item->published_at ? $item->published_at->format('d F Y') : '', 
                'excerpt' => $item->excerpt,
                // Pastikan URL gambar lengkap (http://localhost:8000/storage/...)
                'image' => $item->image ? asset('storage/' . $item->image) : null,
            ];
        });

        return response()->json($news);
    }
    
    // API untuk ambil detail satu berita (Single Page)
    public function show($slug)
    {
        $news = News::where('slug', $slug)->where('is_active', true)->firstOrFail();
        
        return response()->json([
            'id' => $news->id,
            'title' => $news->title,
            'category' => $news->category,
            'date' => $news->published_at ? $news->published_at->format('d F Y') : '',
            'content' => $news->content, // Isi lengkap (HTML dari RichEditor)
            'image' => $news->image ? asset('storage/' . $news->image) : null,
        ]);
    }
}