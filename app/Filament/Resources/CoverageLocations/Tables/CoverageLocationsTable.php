<?php

namespace App\Filament\Resources\CoverageLocations\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\SelectFilter;

// 👇 IMPORTS YANG BENAR UNTUK FILAMENT v4
use Filament\Actions\EditAction;      // Pindah ke Filament\Actions
use Filament\Actions\DeleteAction;    // Pindah ke Filament\Actions
use Filament\Actions\BulkActionGroup; // Pindah ke Filament\Actions
use Filament\Actions\DeleteBulkAction; // Pindah ke Filament\Actions

class CoverageLocationsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                // ... columns Anda tetap sama
                TextColumn::make('name')
                    ->label('Nama Site')
                    ->searchable()
                    ->weight('bold'),

                TextColumn::make('district.name')
                    ->label('Kecamatan')
                    ->badge()
                    ->sortable(),

                TextColumn::make('city')
                    ->label('Kota')
                    ->toggleable(isToggledHiddenByDefault: true),

                ToggleColumn::make('is_active')
                    ->label('Status'),
            ])
            ->filters([
                SelectFilter::make('district')
                    ->relationship('district', 'name')
                    ->label('Filter Kecamatan'),
            ])
            // 👇 GUNAKAN recordActions() UNTUK FILAMENT v4
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}