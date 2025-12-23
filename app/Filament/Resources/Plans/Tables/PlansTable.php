<?php

// 👇 PASTIKAN NAMESPACE INI: Akhirannya harus \Tables
namespace App\Filament\Resources\Plans\Tables; 

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\BulkActionGroup;

class PlansTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns(self::getColumns())
            ->filters([])
            ->actions(self::getActions())
            ->bulkActions(self::getBulkActions());
    }

    protected static function getColumns(): array
    {
        return [
            TextColumn::make('name')->label('Paket')->weight('bold')->searchable(),
            TextColumn::make('region')->label('Wilayah')->sortable(),
            TextColumn::make('price')->label('Harga'),
            TextColumn::make('features')->label('Fitur')->badge()->color('gray'),
            IconColumn::make('is_popular')->label('Populer')->boolean(),
        ];
    }

    protected static function getActions(): array
    {
        return [
            EditAction::make(),
            DeleteAction::make(),
        ];
    }

    protected static function getBulkActions(): array
    {
        return [
            BulkActionGroup::make([
                DeleteBulkAction::make(),
            ]),
        ];
    }
}