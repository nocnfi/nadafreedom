<?php

namespace App\Filament\Resources\PricingRegions\Tables;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

// 👇 SEMUA ACTION SEKARANG ADA DI SINI (Filament V4)
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;

class PricingRegionsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('region_name')
                    ->label('Wilayah')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                TextColumn::make('plans')
                    ->label('Total Paket')
                    ->formatStateUsing(fn ($state) => count($state ?? []) . ' Varian')
                    ->badge()
                    ->color('info'),

                TextColumn::make('updated_at')
                    ->label('Terupdate')
                    ->dateTime('d M Y, H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([])
            ->actions([
                // Action Per Baris
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                // Action Massal (Sudah kita aktifkan lagi)
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}