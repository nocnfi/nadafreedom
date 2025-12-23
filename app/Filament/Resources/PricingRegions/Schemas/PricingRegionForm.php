<?php

namespace App\Filament\Resources\PricingRegionResource\Schemas;

use App\Support\IndonesiaLocations;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;

class PricingRegionForm
{
    public static function schema(): array
    {
        return [
            // BAGIAN 1: PILIH WILAYAH (Sekarang Full Width di Atas)
            Section::make('Wilayah Cakupan')
                ->schema([
                    Select::make('region_name')
                        ->label('Kabupaten / Kota')
                        ->options(IndonesiaLocations::getRegions())
                        ->searchable()
                        ->required()
                        ->unique(ignoreRecord: true)
                        ->columnSpanFull(),
                ])
                ->columnSpanFull(), // 👈 INI KUNCINYA: Agar dia memanjang penuh ke samping

            // BAGIAN 2: DAFTAR PAKET (Sekarang Full Width di Bawahnya)
            Section::make('Katalog Paket Internet')
                ->description('Input varian paket untuk wilayah ini (Max 10).')
                ->schema([
                    Repeater::make('plans')
                        ->label('Daftar Paket')
                        ->schema([
                            // --- ISI KARTU PAKET ---
                            TextInput::make('name')
                                ->label('Nama Paket')
                                ->placeholder('Contoh: NFI FAMILY')
                                ->required(),

                            TextInput::make('price')
                                ->label('Harga Bulanan')
                                ->placeholder('Contoh: IDR 210.000')
                                ->required(),

                            Textarea::make('description')
                                ->label('Deskripsi Singkat')
                                ->placeholder('Contoh: Cocok untuk keluarga...')
                                ->rows(2)
                                ->columnSpanFull()
                                ->required(),

                            Toggle::make('is_popular')
                                ->label('Tandai sebagai Best Seller?')
                                ->onColor('warning')
                                ->inline(false),

                            // --- REPEATER FITUR ---
                            Repeater::make('features')
                                ->label('List Fitur')
                                ->schema([
                                    TextInput::make('feature_name')
                                        ->hiddenLabel()
                                        ->placeholder('Contoh: Speed 30 Mbps')
                                        ->required(),
                                ])
                                
                                ->defaultItems(4)
                                ->addActionLabel('Tambah Fitur')
                                ->reorderableWithButtons()
                                ->columnSpanFull(),
                            // ---------------------
                        ])
                        ->grid(1)           // Kartu Paket berjejer 2 kolom (agar tidak terlalu lebar)
                        ->maxItems(10)
                        ->itemLabel(fn (array $state): ?string => $state['name'] ?? null)
                        ->addActionLabel('Tambah Paket Baru')
                        ->collapsible()     
                        ->collapsed()       
                        ->columnSpanFull(),
                ])
                ->columnSpanFull(), // 👈 INI JUGA PENTING: Agar section ini turun ke bawah (baris baru)
        ];
    }
}