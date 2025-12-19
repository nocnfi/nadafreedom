<?php

namespace App\Filament\Resources\News;

use App\Filament\Resources\News\Pages;
use App\Models\News;

// 1. IMPORT PENTING V4: Schema sebagai wadah utama
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

// 2. IMPORT KOMPONEN (TETAP DARI FORMS)
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Set; 

// 3. IMPORT ACTIONS (UNIFIED ACTIONS)
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\BulkActionGroup;

use Illuminate\Support\Str;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationLabel = 'Berita / Artikel';

    // ✅ METODE V4: Parameter 'Schema $schema', return 'Schema'
    public static function form(Schema $schema): Schema
    {
        // ✅ SYNTAX V4: Gunakan 'components()' untuk root schema
        return $schema
            ->components([
                Group::make()
                    ->schema([ // Layout component tetap pakai 'schema()'
                        Section::make()
                            ->schema([
                                TextInput::make('title')
                                    ->required()
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn (Set $set, ?string $state) => $set('slug', Str::slug($state ?? ''))),
                                
                                TextInput::make('slug')
                                    ->required()
                                    ->unique(News::class, 'slug', ignoreRecord: true),

                                RichEditor::make('content')
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
                                    ->label('Thumbnail Image'),

                                Select::make('category')
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
                                    ->label('Ringkasan')
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

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')->label('Image'),
                Tables\Columns\TextColumn::make('title')->searchable()->limit(50)->sortable(),
                Tables\Columns\TextColumn::make('category')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Teknologi' => 'info',
                        'Bisnis' => 'success',
                        'Layanan' => 'warning',
                        'Regulasi & Kebijakan' => 'danger',
                        default => 'gray',
                    })
                    ->sortable(),
                Tables\Columns\TextColumn::make('published_at')->date('d F Y')->sortable(),
                Tables\Columns\IconColumn::make('is_active')->boolean()->label('Aktif'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'Teknologi' => 'Teknologi',
                        'Bisnis' => 'Bisnis',
                        'Layanan' => 'Layanan',
                        'Regulasi & Kebijakan' => 'Regulasi & Kebijakan',
                    ]),
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}