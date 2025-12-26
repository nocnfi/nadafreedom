<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Popup;
use Illuminate\Http\Request;

class PopupController extends Controller
{
    public function getRandom()
    {
        // Ambil 1 iklan aktif secara ACAK
        $popup = Popup::where('is_active', true)
            ->inRandomOrder()
            ->first();

        // Jika tidak ada iklan aktif, kirim null
        if (!$popup) {
            return response()->json(['data' => null]);
        }

        return response()->json([
            'data' => [
                // Pastikan path image mengarah ke storage public
                'image_url' => asset('storage/' . $popup->image),
                'title'     => $popup->title
            ]
        ]);
    }
}