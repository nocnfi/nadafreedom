<?php

namespace App\Filament\Widgets;

use App\Models\News;
// ✅ Wajib Import NewsResource agar bisa panggil getUrl()
use App\Filament\Resources\News\NewsResource; 

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Filament\Actions\EditAction;

class LatestNewsWidget extends BaseWidget
{
    protected static ?int $sort = 2;
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                News::query()->latest('published_at')->limit(5)
            )
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->circular()
                    ->size(40),
                
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul Terkini')
                    ->limit(50)
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('category')
                    ->badge(),

                Tables\Columns\TextColumn::make('published_at')
                    ->date('d M Y')
                    ->label('Tanggal'),
                    
                Tables\Columns\ToggleColumn::make('is_active')
                    ->label('Status'),
            ])
            ->actions([
                EditAction::make()
                    // ✅ SOLUSI: Gunakan getUrl dari Resource agar otomatis mendeteksi route yang benar
                    ->url(fn (News $record): string => NewsResource::getUrl('edit', ['record' => $record]))
                    ->icon('heroicon-m-pencil-square')
                    ->iconButton(),
            ]);
    }
}