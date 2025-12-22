<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CoverageLocation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'province',
        'city',
        'district',
        'address',
        'latitude',
        'longitude',
        'is_active',
    ];

    public function district(): BelongsTo
    {
        return $this->belongsTo(District::class);
    }
}