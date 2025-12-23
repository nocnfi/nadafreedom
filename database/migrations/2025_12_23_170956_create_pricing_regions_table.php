<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('pricing_regions', function (Blueprint $table) {
        $table->id();
        $table->string('region_name')->unique(); // Nama Kota (Parent)
        $table->json('plans'); // 👇 Disini kita simpan 5-10 kartu sekaligus
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pricing_regions');
    }
};
