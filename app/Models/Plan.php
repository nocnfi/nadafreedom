<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    // Izinkan semua kolom diisi (Mass Assignment)
    protected $guarded = ['id'];

    // 👇 PENTING: Casting Data agar cocok dengan Filament & React
    protected $casts = [
        'features' => 'array',     // Agar "TagsInput" tersimpan sebagai JSON
        'is_popular' => 'boolean', // Agar "Toggle" tersimpan sebagai 1/0
    ];
}