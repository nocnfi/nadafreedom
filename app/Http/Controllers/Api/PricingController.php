<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PricingRegion;
use Illuminate\Http\Request;

class PricingController extends Controller
{
    public function index()
    {
        // Kita ambil semua wilayah beserta paket-paket di dalamnya
        $data = PricingRegion::all();
        
        return response()->json($data);
    }
}