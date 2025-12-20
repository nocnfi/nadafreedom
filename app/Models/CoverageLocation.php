<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
