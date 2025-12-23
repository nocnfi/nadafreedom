<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CoverageLocation;
use App\Models\District;

class CoverageLocationSeeder extends Seeder
{
    public function run(): void
    {
        // Data dari React Anda (sudah dikonversi ke Array PHP)
        $rawLocations = [
            // BEKASI AREA
            [ "name" => "Sukaraya Indah", "lat" => -6.219148, "lng" => 107.171218, "kec" => "Karangbahagia", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Perumahan Sukaraya Indah Blok E1 Nomor 2A" ],
            [ "name" => "Mutiara Puri Harmoni 2", "lat" => -6.204106, "lng" => 107.186504, "kec" => "Karangbahagia", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Blok F8 Nomor 26 Karanganyar" ],
            [ "name" => "Pondok Pesona Regensi 2", "lat" => -6.208168, "lng" => 107.180845, "kec" => "Karangbahagia", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Blok G Nomor 7 Karanganyar" ],
            [ "name" => "Cabang Lio", "lat" => -6.248175, "lng" => 107.147281, "kec" => "Cikarang Utara", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Kp. Cabang Lio RT 003 RW 004 Karangasih" ],
            [ "name" => "Graha Cikarang", "lat" => -6.267519, "lng" => 107.169376, "kec" => "Cikarang Utara", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Blok C-13 No. 13 Simpangan" ],
            [ "name" => "Taman Permata Indah", "lat" => -6.254473, "lng" => 107.235863, "kec" => "Kedungwaringin", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Blok F3 No. 20 RT 004 RW 008 Waringin Jaya" ],
            [ "name" => "Bumi Waringin Indah 2", "lat" => -6.261649, "lng" => 107.235219, "kec" => "Kedungwaringin", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Gg. Murai Blok A02 No. 35" ],
            [ "name" => "Shamandra Gardenia", "lat" => -6.189818, "lng" => 107.180939, "kec" => "Karangbahagia", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Blok GC 23 No. 17 Karangsentosa" ],
            [ "name" => "Karanganyar Residence", "lat" => -6.204767, "lng" => 107.182503, "kec" => "Karangbahagia", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Blok D10/5 Karangsentosa" ],
            [ "name" => "Sukamantri", "lat" => -6.236098, "lng" => 107.163027, "kec" => "Karangbahagia", "city" => "Kab. Bekasi", "prov" => "Jawa Barat", "desc" => "Kp. Sukamantri RT 003 RW 004" ],
            
            // KARAWANG AREA
            [ "name" => "Karangsinom", "lat" => -6.321937, "lng" => 107.274937, "kec" => "Telukjambe Timur", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Kp. Karangsinom No. 54 RW 004 Wadas" ],
            [ "name" => "Babakan Gede", "lat" => -6.337819, "lng" => 107.298204, "kec" => "Telukjambe Timur", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Kp. Babakan Gede No. 35 Puseurjaya" ],
            [ "name" => "Citarum Adiarsa", "lat" => -6.320593, "lng" => 107.307401, "kec" => "Adiarsa Barat", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Jl. Citarum Adiarsa No. 19 RT 004" ],
            [ "name" => "Bumi Karawang Permai", "lat" => -6.326268, "lng" => 107.323466, "kec" => "Karawang Timur", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Blok C4 No. 8 Warung Bambu" ],
            [ "name" => "Palumbonsari Quro", "lat" => -6.293889, "lng" => 107.330694, "kec" => "Karawang Timur", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Jl. Syech Quro No. 9" ],
            [ "name" => "Perum Buana Asri", "lat" => -6.288727, "lng" => 107.333614, "kec" => "Karawang Timur", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Blok A17 No. 19 Palumbonsari" ],
            [ "name" => "Greenside Residence", "lat" => -6.277006, "lng" => 107.336168, "kec" => "Karawang Timur", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Blok G No. 28 Palumbonsari" ],
            [ "name" => "Lengo Tanjung Pura", "lat" => -6.286993, "lng" => 107.286612, "kec" => "Karawang Barat", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Kp. Lengo RT 002 RW 014" ],
            [ "name" => "Green Garden", "lat" => -6.297300, "lng" => 107.321194, "kec" => "Karawang", "city" => "Kab. Karawang", "prov" => "Jawa Barat", "desc" => "Blok J5 No. 7 Karawang" ],

            // PEMALANG AREA
            [ "name" => "Masjid Al Hidayah", "lat" => -6.838918, "lng" => 109.539031, "kec" => "Ulujami", "city" => "Kab. Pemalang", "prov" => "Jawa Tengah", "desc" => "Sebelah utara Masjid Al Hidayah" ],
        ];

        foreach ($rawLocations as $data) {
            // 1. Cari Kecamatan dulu, kalau tidak ada buat baru
            $district = District::firstOrCreate(
                ['name' => $data['kec']], // Cari berdasarkan nama
                ['color' => '#3B82F6']    // Default warna Biru jika baru dibuat
            );

            // 2. Buat Data Site
            CoverageLocation::create([
                'district_id' => $district->id, // Ambil ID dari proses di atas
                'name'        => $data['name'],
                'latitude'    => $data['lat'],
                'longitude'   => $data['lng'],
                'city'        => $data['city'],
                'province'    => $data['prov'],
                'address'     => $data['desc'],
                'is_active'   => true,
            ]);
        }
    }
}