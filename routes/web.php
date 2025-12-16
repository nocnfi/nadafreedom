<?php

use Illuminate\Support\Facades\Route;

// Catch-All Route:
// Menangkap semua URL (/, /plans, /contact, dll) dan mengarahkannya ke view 'app'
Route::get('/{any?}', function () {
    return view('app'); // Pastikan nama file ini 'resources/views/app.blade.php'
})->where('any', '.*');