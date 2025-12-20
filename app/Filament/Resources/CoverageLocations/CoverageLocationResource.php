<?php

namespace App\Filament\Resources;

// Import Pages dari folder CoverageLocations (jamak)
use App\Filament\Resources\CoverageLocations\Pages;

// Import Form & Table dari folder CoverageLocations (jamak)
use App\Filament\Resources\CoverageLocations\Schemas\CoverageLocationForm;
use App\Filament\Resources\CoverageLocations\Tables\CoverageLocationsTable;

use App\Models\CoverageLocation;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class CoverageLocationResource extends Resource
{
    protected static ?string $model = CoverageLocation::class;

    public static function getNavigationIcon(): string
    {
        return 'heroicon-o-map-pin';
    }

    public static function getNavigationLabel(): string
    {
        return 'Lokasi Coverage';
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components(CoverageLocationForm::schema());
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