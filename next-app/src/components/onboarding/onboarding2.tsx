'use client';

type Props = {
    onNext: () => void;
    onBack: () => void; // 必要に応じて戻る処理に使用
};

export default function Onboarding2({ onNext, onBack }: Props) {
    return (
        <div className="flex justify-center min-h-screen bg-[#FFF9F3] font-[family-name:var(--font-zen-maru)]">
            <div className="w-[393px] h-[852px] flex flex-col items-center px-8 py-12 relative">
            {/* バックボタン（仮） */}
                <div className="w-full flex justify-between items-center mb-12">
                    <button onClick={onBack} className="w-10 text-gray-400 text-2xl">
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
                        AIが、<br />
                        あなたの心を守ります。
                    </h2>
                </div>

                {/* フィルタリングのイラストエリア（仮） */}
                <div className="relative w-72 h-72 mb-10 flex items-center justify-center">
                    <div className="text-8xl">
                        <img
                            src="/filter.png"
                            alt="filter"
                            className="w-full h-full object-contain"
                         />
                    </div>
                </div>

                <div className="text-center mb-2">
                    <p className="text-sm font-medium text-gray-600 leading-relaxed px-4 font-[family-name:var(--font-zen-maru)]">
                        3段階の徹底したフィルタリングで、<br />
                        ストレスになる言葉をブロック。<br />
                        安心してニュースをスクロールできます。
                    </p>
                </div>

                <div className="mt-auto w-full flex flex-col items-center gap-8">
                    {/* ステップ表示 */}
                    <div className="flex gap-4 items-center">
                        <div className="w-6 h-6 rounded-full border-4 border-[#68A76E]"></div>
                        <div className="w-10 h-10 rounded-full border-4 border-[#68A76E] flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#5EA754] rounded-full"></div>
                        </div>
                        <div className="w-6 h-6 rounded-full border-4 border-[#68A76E]"></div>
                    </div>

                    <button 
                        onClick={onNext}
                        className="w-full py-5 bg-[#F3A683] text-white text-xl font-bold rounded-full shadow-md active:scale-95 transition-transform font-[family-name:var(--font-zen-maru)]">
                        次へ
                    </button>
                </div>
            </div>
        </div>
    );
}