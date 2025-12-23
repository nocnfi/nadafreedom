<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            
            $table->string('name');             // Nama Paket (misal: NFI BASIC)
            $table->string('region');           // Wilayah (misal: Kab. Bekasi)
            $table->string('price');            // Harga String (misal: IDR 110.000)
            $table->text('description')->nullable(); // Deskripsi singkat
            
            $table->json('features');           // 👇 Array Fitur disimpan sebagai JSON
            
            $table->boolean('is_popular')->default(false); // Status Populer
            
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};