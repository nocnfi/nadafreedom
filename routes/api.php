<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\CoverageController;
use App\Http\Controllers\Api\PricingController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\SubscriberController;  

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// --- ROUTE BERITA ---
Route::get('/news', [NewsController::class, 'index']);           // List Berita
Route::get('/news/{slug}', [NewsController::class, 'show']);     // Detail Berita
Route::get('/news/related/{slug}', [NewsController::class, 'related']); // API BARU: Berita Terkait

// --- ROUTE LAIN ---
Route::get('/coverage-locations', [CoverageController::class, 'index']);
Route::get('/pricing-regions', [PricingController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/subscribe', [SubscriberController::class, 'store']);