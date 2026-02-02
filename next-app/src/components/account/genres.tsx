'use client';

type Props = {
    selectedGenres: string[];
    onChange: (genres: string[]) => void;
};

const GENRES = [
    '動物',
    'グルメ・カフェ',
    'エンタメ',
    'カフェ'
];

export default function GenreSelector({ selectedGenres, onChange }: Props) {
    const toggleGenre = (genre: string) => {
        if (selectedGenres.includes(genre)) {
            onChange(selectedGenres.filter((g) => g !== genre));
        } else {
            onChange([...selectedGenres, genre]);
        }
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                好きなジャンル（複数選択可）
            </label>
            <div className="flex flex-wrap gap-2">
                {GENRES.map((genre) => {
                    const isSelected = selectedGenres.includes(genre);
                    return (
                        <button
                            key={genre}
                            type="button"
                            onClick={() => toggleGenre(genre)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isSelected
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 dark:bg-zinc-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700'
                                }`}
                        >
                            {genre}
                        </button>
                    );
                })}
            </div>
            {selectedGenres.length > 0 && (
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    選択中: {selectedGenres.join(', ')}
                </div>
            )}
        </div>
    );
}
