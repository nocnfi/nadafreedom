<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    // Bagian ini WAJIB ada agar data bisa disimpan
    protected $fillable = [
        'name',
        'email',
        'phone',
        'subject',
        'message',
    ];
}