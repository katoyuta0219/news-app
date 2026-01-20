"use client";

import { useRouter } from "next/navigation";

interface Props {
    id: string;
    name: string;
    description: string;
}

export default function NewsCard({ id, name, description }: Props) {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/home/${id}`)}
            className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
        >
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
}
