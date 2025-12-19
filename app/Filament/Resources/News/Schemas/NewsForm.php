<?php

namespace App\Filament\Resources\News\Schemas;

use App\Models\News;
use Filament\Schemas\Schema;

// --- [BAGIAN 1] LAYOUTS (SCHEMAS) ---
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;

// --- [BAGIAN 2] INPUTS (FORMS) ---
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;

use Illuminate\Support\Str;

class NewsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                    ->schema([
                        Section::make('Konten Utama')
                            ->schema([
                                TextInput::make('title')
                                    ->label('Judul Berita')
                                    ->required()
                                    ->live(onBlur: true)
                                    // ✅ PERBAIKAN DI SINI:
                                    // Hapus "Set" di depan variabel $set. 
                                    // Ubah dari "fn (Set $set...)" menjadi "fn ($set...)"
                                    ->afterStateUpdated(fn ($set, ?string $state) => $set('slug', Str::slug($state ?? ''))),
                                
                                TextInput::make('slug')
                                    ->required()
                                    ->unique(News::class, 'slug', ignoreRecord: true),

                                RichEditor::make('content')
                                    ->label('Isi Berita')
                                    ->required()
                                    ->columnSpanFull(),
                            ])
                    ])
                    ->columnSpan(['lg' => 2]),

                Group::make()
                    ->schema([
                        Section::make('Pengaturan')
                            ->schema([
                                FileUpload::make('image')
                                    ->image()
                                    ->directory('news-images')
                                    ->label('Gambar Utama'),

                                Select::make('category')
                                    ->label('Kategori')
                                    ->options([
                                        'Teknologi' => 'Teknologi',
                                        'Bisnis' => 'Bisnis',
                                        'Layanan' => 'Layanan',
                                        'Regulasi & Kebijakan' => 'Regulasi & Kebijakan',
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
                            ])
                    ])
                    ->columnSpan(['lg' => 1]),
            ])
            ->columns(3);
    }
}