<?php

namespace App\Filament\Resources\PricingRegions;

use App\Filament\Resources\PricingRegions\Pages;

// 👇 HAPUS YANG LAMA, GANTI DENGAN IMPORT INI (ADA HURUF 's')
use App\Filament\Resources\PricingRegions\Tables\PricingRegionsTable; 
// Jika form Anda masih error nanti, pastikan namespace ini juga benar:
use App\Filament\Resources\PricingRegionResource\Schemas\PricingRegionForm;

use App\Models\PricingRegion;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use UnitEnum;
use BackedEnum;

class PricingRegionResource extends Resource
{
    protected static ?string $model = PricingRegion::class;

    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-map';
    protected static ?string $navigationLabel = 'Wilayah & Paket';
    protected static ?string $pluralModelLabel = 'Wilayah & Paket';
    protected static string | UnitEnum | null $navigationGroup = 'Master Data';

    public static function form(Schema $schema): Schema
    {
        return $schema->components(PricingRegionForm::schema());
    }

    public static function table(Table $table): Table
    {
        // 👇 PANGGIL CLASS YANG ADA HURUF 's'-NYA
        return PricingRegionsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPricingRegions::route('/'),
            'create' => Pages\CreatePricingRegion::route('/create'),
            'edit' => Pages\EditPricingRegion::route('/{record}/edit'),
        ];
    }
}