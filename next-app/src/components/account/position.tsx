'use client';

interface Props {
    position: string;
    onChange: (position: string) => void;
}

export default function PositionSelector({ position, onChange }: Props) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="position">
            </label>
            <input
                type="text"
                id="position"
                name="position"
                value={position}
                onChange={(e) => onChange(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="立場"
            />
        </div>
    );
}
