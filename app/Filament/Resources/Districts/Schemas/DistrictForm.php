<?php

namespace App\Filament\Resources\Districts\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\ColorPicker;

class DistrictForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama Kecamatan')
                    ->required()
                    ->maxLength(255),
                
                ColorPicker::make('color')
                    ->label('Warna Peta')
                    ->required(),
            ]);
    }
}
