"use client";

import { useRouter } from "next/navigation";
//iconの引用元（仮）
//figmaの使うかこれ使うか
//import { Coffee, MapPin, Clover } from "lucide-react";

interface Props {
    id: string;             //例))
    name: string;           //カフェ
    location: string;       //名古屋からの距離
    description: string;    //名古屋に新しくスタバが、できました
    category: string[];         //名古屋、学生
    imageUrl: string;
}

export default function NewsCard({ id, name, location, description, category, imageUrl }: Props) {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/home/${id}`)}
            className="h-36 bg-white py-4 px-6 rounded-[2rem] border border-[#FFE9DC] shadow-[0_0_20px_rgba(243,163,131,0.5)] transition flex"
        >
        {/*　--------- 左側コンテンツ --------- */}
            <div>
                <div className="flex items-center gap-4 mb-1">
                    <div className="flex items-center gap-1 text-[#D2977C]">
                        {/* <Coffee size={18} /> */}
                        <span className="text-black font-[family-name:var(--font-zen-maru)]">{name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#D9D9D9] text-xs font-[family-name:var(--font-zen-maru)]">
                        {/* <MapPin size={14} /> */}
                        <span>{location}</span>
                    </div>
                </div>
                {/* タイトル */}
                <h2 className="font-medium text-base font-[family-name:var(--font-zen-maru)]">
                    {description}
                </h2>

                {/* タグ */}
                <div className="inline-flex items-center gap-1 px-4 py-1.5 mt-2 rounded-full border border-[#76B473] text-[#76B473] font-medium text-sm font-[family-name:var(--font-zen-maru)]">
                        {/* <Clover size={16} /> */}
                        <span className="font-bold text-xs">{category}</span>
                </div>
            </div>

        {/* --------- 右側コンテンツ（写真など --------- */}
            <div className="relative w-22 h-22 shrink-0 mt-5">
                {/* 後ろの緑の枠 */}
                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#76B473] rounded-[1.5rem]" />
                {/* メイン画像 */}
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white">
                    <img
                        src={imageUrl}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
