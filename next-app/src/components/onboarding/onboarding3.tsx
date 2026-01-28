'use client';

type Props = {
    onFinish: () => void;
    onBack: () => void;
};

export default function Onboarding3({ onFinish, onBack }: Props) {
    return (
        <div className="flex justify-center min-h-screen bg-[#FFF9F3] font-[family-name:var(--font-zen-maru)]">
            <div className="w-full max-w-[393px] min-h-screen flex flex-col items-center px-8 py-12 relative">
                <div className="w-full flex justify-between items-center mb-12">
                    <button onClick={onBack} className="w-10 text-gray-400 text-2xl">
                        {/* バックボタン(仮) */}
                        ‹ 
                    </button>
                    <h1 className="text-4xl text-[#EBA388] font-[family-name:var(--font-lemon)]">
                        honnori
                    </h1>
                    {/* 右側のバランス用スペース */}
                    <div className="w-8"></div> 
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-[26px] font-black text-gray-800 leading-tight mb-4 font-[family-name:var(--font-zen-maru)]">
                        近くの「いいこと」<br />
                        を見つけにいこう。
                    </h2>
                </div>

                {/* マップイラストエリア（仮） */}
                <div className="flex-1 flex items-center justify-center w-full mb-8">
                    <div className="relative w-full max-w-[300px] aspect-square flex flex-col items-center justify-center">
                        {/* マップ画像を配置する予定 */}
                        <div className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden">
                            <img
                                src="/map.png"
                                alt='onbording_map'
                                className=""
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <p className="text-sm font-medium text-gray-600 leading-relaxed px-4 font-[family-name:var(--font-zen-maru)]">
                        街に隠れた素敵なお店や、<br />
                        心温まるニュースを地図でチェック。<br />
                        今日という日を、もう少し好きになれるはず。
                    </p>
                </div>

                <div className="mt-auto w-full flex flex-col items-center gap-8">
                    {/* ステップ表示 */}
                    <div className="flex gap-4 items-center">
                        <div className="w-6 h-6 rounded-full border-4 border-[#68A76E]"></div>
                        <div className="w-6 h-6 rounded-full border-4 border-[#68A76E]"></div>
                        <div className="w-10 h-10 rounded-full border-4 border-[#68A76E] flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#5EA754] rounded-full"></div>
                        </div>
                        
                    </div>

                    <button 
                        onClick={onFinish}
                        className="w-full py-5 bg-[#F3A683] text-white text-xl font-bold rounded-full shadow-md active:scale-95 transition-transform font-[family-name:var(--font-zen-maru)]">
                        はじめる
                    </button>
                </div>

            </div>
        </div>
    );
}