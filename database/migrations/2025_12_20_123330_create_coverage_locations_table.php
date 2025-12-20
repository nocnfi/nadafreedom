<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('coverage_locations', function (Blueprint $table) {
            $table->id();
            $table->string('name');      // Nama Lokasi
            $table->string('province');  // Provinsi
            $table->string('city');      // Kota/Kab
            $table->string('district');  // Kecamatan
            $table->text('address')->nullable(); // Alamat/Deskripsi
            $table->decimal('latitude', 10, 8);
            $table->decimal('longitude', 11, 8);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('coverage_locations');
    }
};