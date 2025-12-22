<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CoverageLocation;
use Illuminate\Http\Request;

class CoverageController extends Controller
{
    public function index()
    {
        // Ambil data site aktif + data kecamatan (untuk warnanya)
        $locations = CoverageLocation::with('district')
            ->where('is_active', true)
            ->get();

        // Format ulang data supaya mudah dibaca React
        $data = $locations->map(function ($site) {
            return [
                'name'  => $site->name,
                'lat'   => (float) $site->latitude,
                'lng'   => (float) $site->longitude,
                'desc'  => $site->address,
                'city'  => $site->city,
                'prov'  => $site->province, // <-- Data Provinsi dari DB
                
                // Ambil dari relasi district, kalau kosong kasih default
                'kec'   => $site->district ? $site->district->name : 'Unknown',
                'color' => $site->district ? $site->district->color : '#6B7280',
            ];
        });

        return response()->json($data);
    }
}