<?php

namespace App\Support;

class IndonesiaLocations
{
    public static function getRegions(): array
    {
        return [
            // --- SUMATERA (Aceh - Lampung) ---
            'Kota Sabang' => 'Kota Sabang',
            'Kota Banda Aceh' => 'Kota Banda Aceh',
            'Kab. Aceh Besar' => 'Kab. Aceh Besar',
            'Kota Medan' => 'Kota Medan',
            'Kab. Deli Serdang' => 'Kab. Deli Serdang',
            'Kota Padang' => 'Kota Padang',
            'Kota Pekanbaru' => 'Kota Pekanbaru',
            'Kota Batam' => 'Kota Batam',
            'Kota Palembang' => 'Kota Palembang',
            'Kota Bandar Lampung' => 'Kota Bandar Lampung',

            // --- JAWA & DKI (Banten - Jatim) ---
            'Kota Serang' => 'Kota Serang',
            'Kab. Tangerang' => 'Kab. Tangerang',
            'Kota Jakarta Selatan' => 'Kota Jakarta Selatan',
            'Kota Jakarta Pusat' => 'Kota Jakarta Pusat',
            'Kab. Bekasi' => 'Kab. Bekasi',     // Data existing Anda
            'Kota Bekasi' => 'Kota Bekasi',
            'Kab. Karawang' => 'Kab. Karawang', // Data existing Anda
            'Kota Bandung' => 'Kota Bandung',
            'Kab. Bogor' => 'Kab. Bogor',
            'Kota Semarang' => 'Kota Semarang',
            'Kota Surakarta' => 'Kota Surakarta',
            'Kab. Pemalang' => 'Kab. Pemalang', // Data existing Anda
            'Kota Yogyakarta' => 'Kota Yogyakarta',
            'Kab. Sleman' => 'Kab. Sleman',
            'Kota Surabaya' => 'Kota Surabaya',
            'Kab. Malang' => 'Kab. Malang',
            'Kab. Banyuwangi' => 'Kab. Banyuwangi',

            // --- BALI & NUSA TENGGARA ---
            'Kota Denpasar' => 'Kota Denpasar',
            'Kab. Badung' => 'Kab. Badung',
            'Kota Mataram' => 'Kota Mataram',
            'Kota Kupang' => 'Kota Kupang',

            // --- KALIMANTAN (Borneo) ---
            'Kota Pontianak' => 'Kota Pontianak',
            'Kota Banjarmasin' => 'Kota Banjarmasin',
            'Kota Balikpapan' => 'Kota Balikpapan',
            'Kota Samarinda' => 'Kota Samarinda',
            'Kab. Penajam Paser Utara' => 'Kab. Penajam Paser Utara (IKN)',

            // --- SULAWESI ---
            'Kota Makassar' => 'Kota Makassar',
            'Kota Manado' => 'Kota Manado',
            'Kota Kendari' => 'Kota Kendari',
            'Kota Palu' => 'Kota Palu',

            // --- MALUKU & PAPUA (Ambon - Merauke) ---
            'Kota Ambon' => 'Kota Ambon',
            'Kota Ternate' => 'Kota Ternate',
            'Kota Sorong' => 'Kota Sorong',
            'Kab. Manokwari' => 'Kab. Manokwari',
            'Kota Jayapura' => 'Kota Jayapura',
            'Kab. Mimika' => 'Kab. Mimika',
            'Kab. Merauke' => 'Kab. Merauke', // Ujung Timur Indonesia
        ];
    }
}