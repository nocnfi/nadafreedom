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
    Schema::table('coverage_locations', function (Blueprint $table) {
        // Tambah kolom district_id sebagai Foreign Key
        $table->foreignId('district_id')
              ->nullable()
              ->constrained('districts')
              ->nullOnDelete(); 
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('coverage_locations', function (Blueprint $table) {
            //
        });
    }
};
