<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// 1. PENTING: Import Controller News agar dikenali
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\CoverageController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// 2. DAFTARKAN ROUTE BERITA DI SINI
Route::get('/news', [NewsController::class, 'index']);       // Untuk list berita
Route::get('/news/{slug}', [NewsController::class, 'show']); // Untuk detail berita
Route::get('/coverage', [CoverageController::class, 'index']);