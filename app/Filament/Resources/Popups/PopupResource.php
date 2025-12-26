<?php

namespace App\Filament\Resources\Popups;

use App\Filament\Resources\Popups\Pages\CreatePopup;
use App\Filament\Resources\Popups\Pages\EditPopup;
use App\Filament\Resources\Popups\Pages\ListPopups;
use App\Filament\Resources\Popups\Schemas\PopupForm;
use App\Filament\Resources\Popups\Tables\PopupsTable;
use App\Models\Popup;
use Filament\Resources\Resource;
use Filament\Schemas\Schema; // <--- PENTING: Gunakan Schema
use Filament\Tables\Table;
use BackedEnum;

class PopupResource extends Resource
{
    protected static ?string $model = Popup::class;

    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationLabel = 'Iklan Popup';

    protected static ?string $recordTitleAttribute = 'title';

    // Perbaiki fungsi form agar menerima Schema
    public static function form(Schema $schema): Schema
    {
        return PopupForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PopupsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPopups::route('/'),
            'create' => CreatePopup::route('/create'),
            'edit' => EditPopup::route('/{record}/edit'),
        ];
    }
}