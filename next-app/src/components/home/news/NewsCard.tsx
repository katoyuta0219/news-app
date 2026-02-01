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
            className="
                bg-[#ffffff]
                border border-[#FFE9DC]
                p-4
                rounded-lg
                cursor-pointer
                transition
                shadow-[0_2px_10px_#F3A683]
                "
            >
            <h2 className="text-lg font-bold text-[#000000]">
                {name}
            </h2>
            <p className="text-sm text-gray-600">
                {description}
            </p>
        </div>
    );
}
