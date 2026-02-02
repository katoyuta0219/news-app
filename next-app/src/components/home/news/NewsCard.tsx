'use client';

import { useRouter } from "next/navigation";
import { LucideIcon, MapPin, Clover } from "lucide-react";

interface Props {
    id: string;
    name: string;
    location: string;
    description: string;
    category: string;
    imageUrl: string;
    Icon?: LucideIcon;
    iconColor?: string;
}

export default function NewsCard({ id, name, location, description, category, imageUrl, Icon: IconComponent, iconColor = "#D2977C" }: Props) {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/home/${id}`)}
            className="group relative w-full bg-white py-4 px-5 rounded-[2rem] border border-[#FFE9DC] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3 cursor-pointer"
        >
            {/* Left Content */}
            <div className="flex-1 min-w-0 flex flex-col gap-2">
                {/* Header: Icon + Name + Location */}
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3">
                    <div className="flex items-center gap-1 text-[#D2977C] font-bold text-sm shrink-0">
                        {IconComponent && <IconComponent size={16} color={iconColor} />}
                        <span className="font-zen-maru">{name}</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-[#A0A0A0] text-xs font-zen-maru shrink-0">
                        <MapPin size={12} />
                        <span className="truncate max-w-[120px]">{location}</span>
                    </div>
                </div>

                {/* Description - limit lines */}
                <h2 className="font-medium text-black text-[15px] leading-snug font-zen-maru line-clamp-2">
                    {description}
                </h2>

                {/* Category Tag */}
                <div className="inline-flex items-center gap-1 px-3 py-1 mt-1 rounded-full border border-[#76B473] text-[#76B473] bg-[#76B473]/5 w-fit">
                    <Clover size={14} />
                    <span className="font-bold text-[10px] whitespace-nowrap">{category.split(',')[0]}</span>
                </div>
            </div>

            {/* Right Content: Image */}
            <div className="relative w-24 h-24 shrink-0 mt-1">
                {/* Decorative background offset */}
                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#76B473] rounded-[1.2rem]" />
                {/* Image container */}
                <div className="relative w-full h-full rounded-[1.2rem] overflow-hidden border-2 border-white bg-gray-100">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
