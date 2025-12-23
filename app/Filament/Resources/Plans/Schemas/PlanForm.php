<?php

namespace App\Filament\Resources\Plans\PlanResource\Schemas;

// Import Helper yang baru kita buat
use App\Support\IndonesiaLocations;

// Import Komponen Filament
use Filament\Schemas\Components\Section; 
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TagsInput;

class PlanForm
{
    public static function schema(): array
    {
        return [
            Section::make('Tampilan Kartu (Frontend)')
                ->description('Input data ini sesuai desain kartu di website.')
                ->schema([
                    Select::make('region')
                        ->label('Wilayah Target')
                        // 👇 KITA PANGGIL HELPER DISINI
                        ->options(IndonesiaLocations::getRegions())
                        ->native(false)
                        ->required(),

                    Toggle::make('is_popular')
                        ->label('Best Seller?')
                        ->onColor('warning')
                        ->inline(false),

                    TextInput::make('name')
                        ->label('Nama Paket')
                        ->placeholder('Contoh: NFI FAMILY')
                        ->required(),

                    TextInput::make('price')
                        ->label('Label Harga')
                        ->placeholder('Contoh: IDR 210.000')
                        ->required(),

                    Textarea::make('description')
                        ->label('Deskripsi')
                        ->rows(2)
                        ->columnSpanFull()
                        ->required(),
                ])->columns(2),

            Section::make('Fitur Paket')
                ->schema([
                    TagsInput::make('features')
                        ->label('List Fitur')
                        ->placeholder('Ketik fitur & Enter')
                        ->reorderable()
                        ->separator(',') 
                        ->columnSpanFull()
                        ->required(),
                ]),
        ];
    }
}