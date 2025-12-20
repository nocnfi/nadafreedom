<?php

namespace App\Filament\Resources\News;

use App\Filament\Resources\News\Pages;
use App\Filament\Resources\News\Schemas\NewsForm;
use App\Filament\Resources\News\Tables\NewsTable;
use App\Models\News;
use Filament\Resources\Resource;
use Filament\Schemas\Schema; 
use Filament\Tables\Table;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;

    public static function getNavigationIcon(): string
    {
        return 'heroicon-o-newspaper';
    }

    public static function getNavigationLabel(): string
    {
        return 'Berita / Artikel';
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Content Management';
    }

    // ✅ Sesuai v4: Menggunakan Schema $schema
    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components(NewsForm::schema());
    }

    public static function table(Table $table): Table
    {
        return NewsTable::configure($table);
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