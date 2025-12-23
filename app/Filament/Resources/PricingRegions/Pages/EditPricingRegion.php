<?php

namespace App\Filament\Resources\PricingRegions\Pages;

use App\Filament\Resources\PricingRegions\PricingRegionResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPricingRegion extends EditRecord
{
    protected static string $resource = PricingRegionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
