<?php

namespace App\Filament\Resources\News\Tables;

use Filament\Tables;
use Filament\Tables\Table;
// ✅ Namespace yang benar sesuai file yang Anda temukan
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
// ✅ Untuk Bulk Actions biasanya mengikuti pola yang sama
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;

class NewsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->label('Image')
                    ->circular(),

                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(50),

                Tables\Columns\TextColumn::make('category')
                    ->badge()
                    ->sortable(),

                Tables\Columns\ToggleColumn::make('is_active')
                    ->label('Active'),

                Tables\Columns\TextColumn::make('published_at')
                    ->date('d M Y')
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                // ✅ Sekarang menggunakan EditAction & DeleteAction yang sudah di-import
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('published_at', 'desc');
    }
}