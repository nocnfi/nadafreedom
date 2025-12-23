<?php

namespace App\Filament\Widgets;

use App\Models\CoverageLocation;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class CoverageCityChart extends ChartWidget
{
    // WAJIB NON-STATIC (Tanpa kata 'static')
    protected ?string $heading = 'Sebaran Lokasi per Kota';
    
    // WAJIB STATIC (Harus ada kata 'static')
    protected static ?int $sort = 2; 

    protected function getData(): array
    {
        $data = CoverageLocation::select('city', DB::raw('count(*) as total'))
            ->groupBy('city')
            ->get();

        return [
            'datasets' => [
                [
                    'label' => 'Jumlah Titik',
                    'data' => $data->pluck('total'),
                    'backgroundColor' => [
                        '#3B82F6', 
                        '#F97316', 
                        '#10B981', 
                        '#6366f1', 
                        '#ec4899', 
                    ],
                ],
            ],
            'labels' => $data->pluck('city'),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}