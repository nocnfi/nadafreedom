<?php

namespace App\Filament\Resources\News;

use App\Filament\Resources\News\Pages;
use App\Filament\Resources\News\Schemas\NewsForm; // Import Form Terpisah
use App\Filament\Resources\News\Tables\NewsTable; // Import Table Terpisah
use App\Models\News;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationLabel = 'Berita / Artikel';

    // ✅ Panggil konfigurasi Form dari file NewsForm.php
    public static function form(Schema $schema): Schema
    {
        return NewsForm::configure($schema);
    }

    // ✅ Panggil konfigurasi Table dari file NewsTable.php
    public static function table(Table $table): Table
    {
        return NewsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}