<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CoverageLocation;
use Illuminate\Http\Request;

class CoverageController extends Controller
{
    public function index()
    {
        // Ambil data aktif beserta relasi district
        $locations = CoverageLocation::with('district')
            ->where('is_active', true)
            ->get();

        // Format data agar sesuai dengan keinginan React (lat, lng, prov, kec)
        $formatted = $locations->map(function ($site) {
            return [
                'name'  => $site->name,
                'lat'   => (float) $site->latitude,
                'lng'   => (float) $site->longitude,
                'desc'  => $site->address,
                'city'  => $site->city,
                'prov'  => $site->province,
                'kec'   => $site->district ? $site->district->name : 'Unknown',
                'color' => $site->district ? $site->district->color : '#6B7280',
            ];
        });

        return response()->json($formatted);
    }
}