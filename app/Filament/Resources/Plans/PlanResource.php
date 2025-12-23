<?php

namespace App\Filament\Resources\Plans;

use App\Filament\Resources\Plans\PlanResource\Pages;
use App\Filament\Resources\Plans\PlanResource\Schemas\PlanForm;

// 👇 PERBAIKAN DISINI: Tambahkan "\Tables"
use App\Filament\Resources\Plans\Tables\PlansTable; 

use App\Models\Plan;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use UnitEnum;
use BackedEnum;

class PlanResource extends Resource
{
    protected static ?string $model = Plan::class;

    protected static BackedEnum | string | null $navigationIcon = 'heroicon-o-currency-dollar';
    protected static UnitEnum | string | null $navigationGroup = 'Master Data';
    protected static ?string $navigationLabel = 'Paket Harga';
    protected static ?int $navigationSort = 2;
    protected static ?string $slug = 'plans';

    public static function form(Schema $schema): Schema
    {
        return $schema->components(PlanForm::schema());
    }

    public static function table(Table $table): Table
    {
        // Sekarang Laravel sudah tahu dimana PlansTable berada
        return PlansTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPlans::route('/'),
            'create' => Pages\CreatePlan::route('/create'),
            'edit' => Pages\EditPlan::route('/{record}/edit'),
        ];
    }
}