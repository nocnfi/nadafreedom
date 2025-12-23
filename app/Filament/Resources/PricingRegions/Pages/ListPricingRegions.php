<?php

namespace App\Filament\Resources\PricingRegions\Pages;

use App\Filament\Resources\PricingRegions\PricingRegionResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPricingRegions extends ListRecords
{
    protected static string $resource = PricingRegionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
