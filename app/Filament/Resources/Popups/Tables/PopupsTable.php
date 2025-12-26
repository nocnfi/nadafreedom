<?php

namespace App\Filament\Resources\Popups\Tables;

use Filament\Tables\Table;
// Import Kolom
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
// Import Action (Tombol-tombol) - INI YANG TADI ERROR
use Filament\Actions\EditAction;      // Pindah ke Filament\Actions
use Filament\Actions\DeleteAction;    // Pindah ke Filament\Actions
use Filament\Actions\BulkActionGroup; // Pindah ke Filament\Actions
use Filament\Actions\DeleteBulkAction; // Pindah ke Filament\Actions

class PopupsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                // 1. Gambar
                ImageColumn::make('image')
                    ->label('Banner')
                    ->square(),

                // 2. Judul
                TextColumn::make('title')
                    ->label('Judul Iklan')
                    ->searchable()
                    ->sortable(),

                // 3. Status Aktif
                ToggleColumn::make('is_active')
                    ->label('Aktif'),

                // 4. Tanggal (Hidden by default)
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                // Tombol Edit & Hapus per baris
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                // Aksi massal (hapus banyak sekaligus)
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}