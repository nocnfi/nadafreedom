<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CoverageLocation;
use Illuminate\Http\Request;

class CoverageController extends Controller
{
    public function index()
    {
        // 1. Ambil semua lokasi yang statusnya 'Aktif'
        $locations = CoverageLocation::where('is_active', true)->get();

        // 2. Format datanya agar sesuai dengan kebutuhan React (Leaflet Map)
        $formatted = $locations->map(function($item) {
            return [
                'id'    => $item->id,
                'name'  => $item->name,
                // Pastikan lat/lng dikirim sebagai angka (float), bukan string
                'lat'   => (float) $item->latitude,  
                'lng'   => (float) $item->longitude,
                'kec'   => $item->district,
                'city'  => $item->city,
                'prov'  => $item->province,
                'desc'  => $item->address
            ];
        });

        // 3. Kirim sebagai JSON
        return response()->json($formatted);
    }
}