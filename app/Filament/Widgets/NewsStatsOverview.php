<?php

namespace App\Filament\Widgets;

use App\Models\News;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class NewsStatsOverview extends BaseWidget
{
    // Mengatur urutan widget (paling atas)
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        return [
            // Stat 1: Total Semua Berita
            Stat::make('Total Berita', News::count())
                ->description('Semua artikel yang ditulis')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('primary')
                ->chart([7, 2, 10, 3, 15, 4, 17]), // Hiasan grafik kecil

            // Stat 2: Berita yang Tayang (Active)
            Stat::make('Berita Tayang', News::where('is_active', true)->count())
                ->description('Artikel yang bisa dibaca publik')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success'),

            // Stat 3: Berita Kategori Terbanyak (Contoh Logika)
            Stat::make('Kategori Terpopuler', function() {
                // Ambil kategori yang paling sering dipakai
                return News::select('category')
                    ->groupBy('category')
                    ->orderByRaw('COUNT(*) DESC')
                    ->limit(1)
                    ->pluck('category')
                    ->first() ?? '-';
            })
            ->description('Kategori paling sering ditulis')
            ->descriptionIcon('heroicon-m-tag')
            ->color('warning'),
        ];
    }
}