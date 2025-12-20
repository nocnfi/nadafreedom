<?php

namespace App\Filament\Resources\CoverageLocations\Pages;

use App\Filament\Resources\CoverageLocations\CoverageLocationResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListCoverageLocations extends ListRecords
{
    protected static string $resource = CoverageLocationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
