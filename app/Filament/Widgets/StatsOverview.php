<?php

namespace App\Filament\Widgets;

use App\Models\CoverageLocation;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    // PERBAIKAN: Hapus kata 'static' di sini
    protected ?string $pollingInterval = '15s';

    protected function getStats(): array
    {
        return [
            Stat::make('Total Coverage', CoverageLocation::count())
                ->description('Titik Fiber Optic Terdata')
                ->descriptionIcon('heroicon-m-globe-alt')
                ->color('primary')
                ->chart([7, 2, 10, 3, 15, 4, 17]),

            Stat::make('Site Aktif', CoverageLocation::where('is_active', true)->count())
                ->description('Siap digunakan pelanggan')
                ->descriptionIcon('heroicon-m-check-badge')
                ->color('success'),

            Stat::make('Area Tercover', CoverageLocation::distinct('city')->count('city'))
                ->description('Kabupaten/Kota berbeda')
                ->descriptionIcon('heroicon-m-building-office-2')
                ->color('warning'),
        ];
    }
}