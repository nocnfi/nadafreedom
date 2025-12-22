<?php

namespace App\Filament\Resources\CoverageLocations\Schemas;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
// 👇 INI PERUBAHANNYA: Pakai namespace 'Schemas', bukan 'Forms'
use Filament\Schemas\Components\Grid; 

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\ViewField; 
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;

class CoverageLocationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                // BAGIAN 1: Informasi Site
                Section::make('Informasi Site')
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->label('Nama Site'),
                            
                        Select::make('district_id')
                            ->relationship('district', 'name')
                            ->searchable()
                            ->preload()
                            ->required()
                            ->label('Kecamatan'),
                            
                        TextInput::make('province')
                            ->default('Jawa Barat')
                            ->required()
                            ->label('Provinsi'),
                            
                        TextInput::make('city')
                            ->default('Kab. Bekasi')
                            ->required()
                            ->label('Kota/Kab'),
                            
                        Textarea::make('address')
                            ->label('Alamat Lengkap')
                            ->columnSpanFull(),
                    ])->columns(2),

                // BAGIAN 2: Peta Manual (OSM)
                Section::make('Titik Lokasi')
                    ->schema([
                        
                        ViewField::make('map_preview')
                            ->view('filament.forms.components.osm-map-picker')
                            ->columnSpanFull(),

                        // 👇 SEKARANG KITA BISA PAKAI GRID (Namespace sudah benar)
                        Grid::make(2) 
                            ->schema([
                                TextInput::make('latitude')
                                    ->label('Latitude')
                                    ->numeric()
                                    ->required()
                                    ->default(-6.26), 
                                
                                TextInput::make('longitude')
                                    ->label('Longitude')
                                    ->numeric()
                                    ->required()
                                    ->default(107.25),
                            ]),

                        Toggle::make('is_active')
                            ->label('Status Aktif')
                            ->default(true),
                    ]),
            ]);
    }
}