<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'excerpt',
        'content',
        'image',
        'published_at',
        'is_active',
    ];

    protected $casts = [
        'published_at' => 'date',
        'is_active' => 'boolean',
    ];

    // Helper untuk mendapatkan URL gambar lengkap buat API
    public function getImageUrlAttribute()
    {
        return $this->image 
            ? Storage::url($this->image) 
            : 'https://source.unsplash.com/random/400x300?sig=' . $this->id; // Fallback jika tidak ada gambar
    }
}
