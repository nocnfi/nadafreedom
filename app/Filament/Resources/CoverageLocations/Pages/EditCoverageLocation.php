<?php

namespace App\Filament\Resources\CoverageLocations\Pages;

use App\Filament\Resources\CoverageLocations\CoverageLocationResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditCoverageLocation extends EditRecord
{
    protected static string $resource = CoverageLocationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
