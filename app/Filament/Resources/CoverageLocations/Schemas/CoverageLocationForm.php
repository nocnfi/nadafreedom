<?php

namespace App\Filament\Resources\CoverageLocations\Schemas;

use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;

class CoverageLocationForm
{
    public static function schema(): array
    {
        return [
            Section::make('Informasi Lokasi')
                ->schema([
                    TextInput::make('name')
                        ->label('Nama Lokasi')
                        ->placeholder('Contoh: Perumahan Grand Wisata')
                        ->required()
                        ->columnSpanFull(),

                    TextInput::make('province')
                        ->label('Provinsi')
                        ->default('Jawa Barat')
                        ->required(),

                    TextInput::make('city')
                        ->label('Kota/Kabupaten')
                        ->required(),

                    TextInput::make('district')
                        ->label('Kecamatan')
                        ->required(),
                    
                    Textarea::make('address')
                        ->label('Alamat Detail / Deskripsi')
                        ->rows(2)
                        ->columnSpanFull(),
                ])->columns(3),

            Section::make('Titik Koordinat')
                ->description('Ambil dari Google Maps (Klik Kanan > Ada angka decimal)')
                ->schema([
                    TextInput::make('latitude')
                        ->label('Latitude')
                        ->numeric()
                        ->required(),

                    TextInput::make('longitude')
                        ->label('Longitude')
                        ->numeric()
                        ->required(),
                        
                    Toggle::make('is_active')
                        ->label('Status Aktif')
                        ->default(true),
                ])->columns(2),
        ];
    }
}