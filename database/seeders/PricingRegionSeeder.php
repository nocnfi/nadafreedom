<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PricingRegion;

class PricingRegionSeeder extends Seeder
{
    public function run(): void
    {
        // 1. DATA KAB. BEKASI (Lengkap 5 Paket)
        PricingRegion::updateOrCreate(
            ['region_name' => 'Kab. Bekasi'], // Kunci Cek (agar tidak duplikat)
            [
                'plans' => [
                    [
                        'name' => 'NFI BASIC',
                        'price' => 'IDR 110.000',
                        'description' => 'Economical connection solution for single users.',
                        'is_popular' => false,
                        'features' => [
                            ['feature_name' => 'Symmetrical 10 Mbps Speed'],
                            ['feature_name' => 'Standard Quality (SD) Streaming'],
                            ['feature_name' => 'No Installation Fee'],
                            ['feature_name' => 'Standard Technical Support'],
                        ]
                    ],
                    [
                        'name' => 'NFI LITE',
                        'price' => 'IDR 130.000',
                        'description' => 'An economical choice for couples or light WFH.',
                        'is_popular' => false,
                        'features' => [
                            ['feature_name' => 'Symmetrical 15 Mbps Speed'],
                            ['feature_name' => 'Ideal for 1-on-1 Video Calls'],
                            ['feature_name' => 'Free Router Rental'],
                            ['feature_name' => 'Standard Technical Support'],
                        ]
                    ],
                    [
                        'name' => 'NFI SMART',
                        'price' => 'IDR 160.000',
                        'description' => 'Price balance and stability for homes.',
                        'is_popular' => false,
                        'features' => [
                            ['feature_name' => 'Symmetrical 20 Mbps Speed'],
                            ['feature_name' => '4K Streaming on One Device'],
                            ['feature_name' => 'Free Wi-Fi Router'],
                            ['feature_name' => 'All Pure Fiber Networks'],
                        ]
                    ],
                    [
                        'name' => 'NFI FAMILY',
                        'price' => 'IDR 210.000',
                        'description' => 'The best choice for families and multi-devices.',
                        'is_popular' => true, // BEST SELLER
                        'features' => [
                            ['feature_name' => 'Symmetrical 30 Mbps Speed'],
                            ['feature_name' => 'Anti-Buffering for Active Families'],
                            ['feature_name' => 'Priority Technician Response'],
                            ['feature_name' => 'FREE Installation & Wi-Fi 6 Router'],
                        ]
                    ],
                    [
                        'name' => 'NFI POWER',
                        'price' => 'IDR 300.000',
                        'description' => 'Maximum performance for Gamers and Content Creators.',
                        'is_popular' => false,
                        'features' => [
                            ['feature_name' => 'Symmetrical 100 Mbps Speed'],
                            ['feature_name' => 'Lowest Latency'],
                            ['feature_name' => 'Ideal for Smart Homes'],
                            ['feature_name' => 'Premium 24/7 Support'],
                        ]
                    ],
                ]
            ]
        );

        // 2. DATA KAB. KARAWANG (2 Paket)
        PricingRegion::updateOrCreate(
            ['region_name' => 'Kab. Karawang'],
            [
                'plans' => [
                    [
                        'name' => 'KRW STARTER',
                        'price' => 'IDR 115.000',
                        'description' => 'Paket hemat kawasan industri.',
                        'is_popular' => false,
                        'features' => [
                            ['feature_name' => 'Speed 15 Mbps'],
                            ['feature_name' => 'Stabil 24 Jam'],
                        ]
                    ],
                    [
                        'name' => 'KRW PRO',
                        'price' => 'IDR 250.000',
                        'description' => 'Cocok untuk WFH dan Bisnis.',
                        'is_popular' => true,
                        'features' => [
                            ['feature_name' => 'Speed 50 Mbps'],
                            ['feature_name' => 'Prioritas Support'],
                            ['feature_name' => 'Free Router Dual Band'],
                        ]
                    ],
                ]
            ]
        );

        // 3. DATA KAB. PEMALANG (1 Paket)
        PricingRegion::updateOrCreate(
            ['region_name' => 'Kab. Pemalang'],
            [
                'plans' => [
                    [
                        'name' => 'PML HEMAT',
                        'price' => 'IDR 100.000',
                        'description' => 'Internet masuk desa, harga merakyat.',
                        'is_popular' => true,
                        'features' => [
                            ['feature_name' => 'Speed 10 Mbps'],
                            ['feature_name' => 'Koneksi Stabil'],
                            ['feature_name' => 'Bisa YouTube Lancar'],
                        ]
                    ]
                ]
            ]
        );
    }
}