'use client';

type Props = {
    onFinish: () => void;
    onBack: () => void;
};

export default function Onboarding3({ onFinish, onBack }: Props) {
    return (
            <div className="h-full flex flex-col items-center px-8 py-12 relative bg-[#FFF9F3] font-[family-name:var(--font-zen-maru)]">
                <div className="w-full flex justify-between items-center mb-12">
                    <button onClick={onBack} className="w-10 text-gray-400 text-2xl">
                        {/* バックボタン(仮) */}
                        ‹ 
                    </button>
                    <h1 className="text-4xl text-[#EBA388] font-[family-name:var(--font-lemon)]">
                        honnori
                    </h1>
                    <button className="text-gray-500 text-sm font-medium">
                        スキップ
                    </button>
                </div>

                <div className="text-center mb-2">
                    <h2 className="text-[26px] font-black text-gray-800 leading-tight mb-4 font-[family-name:var(--font-zen-maru)]">
                        近くの「いいこと」<br />
                        を見つけにいこう。
                    </h2>
                </div>

                {/* マップイラストエリア（仮） */}
                <div className="relative w-72 h-72 mb-16 flex items-center justify-center">
                    <div className="text-8xl">
                        <img
                            src="/map.png"
                            alt='onbording_map'
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="text-center mb-16">
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
    );
}