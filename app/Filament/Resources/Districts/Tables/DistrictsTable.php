<?php

namespace App\Filament\Resources\Districts\Tables;


use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ColorColumn;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;

class DistrictsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Kecamatan')
                    ->searchable()
                    ->sortable(),
                    
                ColorColumn::make('color')
                    ->label('Warna')
                    ->copyable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
