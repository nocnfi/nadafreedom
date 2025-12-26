<?php

namespace App\Filament\Resources\Popups\Schemas;

use Filament\Schemas\Schema; // Tetap pakai Schema sesuai sistem Anda

// --- IMPORT KOMPONEN INPUT ---
// Pastikan 3 baris ini ada
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

class PopupForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                // KITA HAPUS 'Section' ATAU 'Card'
                // Langsung masukkan komponen input ke dalam array utama
                
                TextInput::make('title')
                    ->label('Judul Iklan')
                    ->placeholder('Contoh: Promo Internet Merdeka')
                    ->required()
                    ->maxLength(255),

                FileUpload::make('image')
                    ->label('Gambar Banner')
                    ->image()
                    ->directory('popups')
                    ->imageEditor()
                    ->maxSize(5120)
                    ->required()
                    ->columnSpan('full'), 

                Toggle::make('is_active')
                    ->label('Aktifkan Iklan Ini?')
                    ->default(true)
                    ->helperText('Jika dimatikan, iklan ini tidak akan muncul di website.'),
            ]);
    }
}