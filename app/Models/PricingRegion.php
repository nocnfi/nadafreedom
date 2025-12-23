<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PricingRegion extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    // 👇 PENTING: Agar JSON otomatis diubah jadi Array PHP saat diambil
    protected $casts = [
        'plans' => 'array', 
    ];
}