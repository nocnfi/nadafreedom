<?php

namespace App\Filament\Resources\News\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;

class NewsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Image'),
                
                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->limit(50)
                    ->sortable(),

                TextColumn::make('category')
                    ->label('Kategori')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Teknologi' => 'info',
                        'Bisnis' => 'success',
                        'Layanan' => 'warning',
                        'Regulasi & Kebijakan' => 'danger',
                        default => 'gray',
                    })
                    ->sortable(),

                TextColumn::make('published_at')
                    ->label('Tanggal')
                    ->date('d F Y')
                    ->sortable(),

                IconColumn::make('is_active')
                    ->label('Aktif')
                    ->boolean(),
            ])
            ->filters([
                SelectFilter::make('category')
                    ->options([
                        'Teknologi' => 'Teknologi',
                        'Bisnis' => 'Bisnis',
                        'Layanan' => 'Layanan',
                        'Regulasi & Kebijakan' => 'Regulasi & Kebijakan',
                    ]),
            ])
            ->actions([
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