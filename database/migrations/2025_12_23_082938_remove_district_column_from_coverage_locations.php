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
        // Hapus kolom 'district' karena sudah diganti 'district_id'
        $table->dropColumn('district'); 
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
