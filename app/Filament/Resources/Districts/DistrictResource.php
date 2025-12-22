<?php

namespace App\Filament\Resources\Districts;

use App\Filament\Resources\Districts\Pages;
use App\Filament\Resources\Districts\Schemas\DistrictForm;
use App\Filament\Resources\Districts\Tables\DistrictsTable;
use App\Models\District;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

// Import Tipe Data Enum (Wajib)
use UnitEnum;
use BackedEnum;

class DistrictResource extends Resource
{
    protected static ?string $model = District::class;

    // Tipe Data Ketat (Strict) agar tidak error
    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-swatch';
    protected static string | UnitEnum | null $navigationGroup = 'Master Data';
    
    protected static ?string $navigationLabel = 'Master Kecamatan';

    public static function form(Schema $schema): Schema
    {
        // Panggil Logic dari DistrictForm.php
        return DistrictForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        // Panggil Logic dari DistrictsTable.php
        return DistrictsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDistricts::route('/'),
            'create' => Pages\CreateDistrict::route('/create'),
            'edit' => Pages\EditDistrict::route('/{record}/edit'),
        ];
    }
}