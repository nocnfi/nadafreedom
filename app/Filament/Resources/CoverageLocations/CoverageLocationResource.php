<?php

namespace App\Filament\Resources\CoverageLocations;

use App\Filament\Resources\CoverageLocations\Pages;
use App\Filament\Resources\CoverageLocations\Schemas\CoverageLocationForm;
use App\Filament\Resources\CoverageLocations\Tables\CoverageLocationsTable;
use App\Models\CoverageLocation;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

// 👇 IMPORT PENTING AGAR TIDAK ERROR TYPE MISMATCH
use UnitEnum;   // Untuk navigationGroup
use BackedEnum; // Untuk navigationIcon

class CoverageLocationResource extends Resource
{
    protected static ?string $model = CoverageLocation::class;

    // 👇 PERBAIKAN 1: Tipe data Icon (String | BackedEnum | Null)
    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-signal';
    
    // 👇 PERBAIKAN 2 (SUMBER ERROR): Tipe data Group harus lengkap
    protected static string | UnitEnum | null $navigationGroup = 'Network'; 
    
    protected static ?string $navigationLabel = 'Data Site';
    protected static ?string $modelLabel = 'Site';
    protected static ?string $pluralModelLabel = 'Data Site';

    public static function form(Schema $schema): Schema
    {
        return CoverageLocationForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CoverageLocationsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCoverageLocations::route('/'),
            'create' => Pages\CreateCoverageLocation::route('/create'),
            'edit' => Pages\EditCoverageLocation::route('/{record}/edit'),
        ];
    }
}