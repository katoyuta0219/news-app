"use client";

import { useState } from "react";
import Link from "next/link";


/*マップ　ホーム　プロフ の３つを横並びで表示する*/
export default function Footer() {
    const [activeTab, setActiveTab] = useState("home");
    return (
        <footer>
            <nav>
                <ul className="flex justify-around">
                    <li>
                        <Link href="/map" onClick={() => setActiveTab("map")}>
                            <span>マップ</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/home" onClick={() => setActiveTab("home")}>
                            <span>ホーム</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile" onClick={() => setActiveTab("profile")}>
                            <span>プロフ</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

