<?php

namespace App\Filament\Resources\News\Schemas;

use App\Models\News;
use Illuminate\Support\Str;

// ✅ Group & Section menggunakan Schemas (Struktur)
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;

// ✅ Input Field tetap menggunakan Forms (Komponen)
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;

class NewsForm
{
    public static function schema(): array
    {
        return [
            Group::make()
                ->schema([
                    Section::make('Konten Utama')
                        ->schema([
                            TextInput::make('title')
                                ->label('Judul Berita')
                                ->required()
                                ->live(onBlur: true)
                                ->afterStateUpdated(fn ($set, ?string $state) => $set('slug', Str::slug($state ?? ''))),

                            TextInput::make('slug')
                                ->required()
                                ->unique(News::class, 'slug', ignoreRecord: true),

                            RichEditor::make('content')
                                ->label('Isi Berita')
                                ->required()
                                ->columnSpanFull(),
                        ]),
                ])
                ->columnSpan(['lg' => 2]),

            Group::make()
                ->schema([
                    Section::make('Pengaturan & Media')
                        ->schema([
                            FileUpload::make('image')
                                ->label('Gambar Utama')
                                ->image()
                                ->directory('news-images')
                                ->required(),

                            Select::make('category')
                                ->label('Kategori')
                                ->options([
                                    'Teknologi' => 'Teknologi',
                                    'Bisnis' => 'Bisnis',
                                    'Layanan' => 'Layanan',
                                    'Regulasi & Kebijakan' => 'Regulasi & Kebijakan',
                                    'Event' => 'Event',
                                ])
                                ->required()
                                ->searchable(),

                            DatePicker::make('published_at')
                                ->label('Tanggal Terbit')
                                ->default(now())
                                ->required(),

                            Textarea::make('excerpt')
                                ->label('Ringkasan Singkat')
                                ->rows(3)
                                ->maxLength(255),

                            Toggle::make('is_active')
                                ->label('Tampilkan Berita')
                                ->default(true),
                        ]),
                ])
                ->columnSpan(['lg' => 1]),
        ];
    }
}