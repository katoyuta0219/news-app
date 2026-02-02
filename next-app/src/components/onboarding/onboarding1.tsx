'use client';

type Props = {
    onNext: () => void;
};

export default function Onboarding1({ onNext }: Props) {
    return (
            <div className="h-full flex flex-col items-center px-8 py-12 relative bg-[#FFF9F3]">
                
                <div className="w-full flex justify-between items-center mb-12">
                    <div className="w-10"></div>
                    
                    <h1 className="text-4xl text-[#EBA388] font-[family-name:var(--font-lemon)]">
                        honnori
                    </h1>
                    
                    <button className="text-gray-500 text-sm font-medium font-[family-name:var(--font-zen-maru)]">
                        スキップ
                    </button>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-[28px] font-bold text-gray-800 leading-tight mb-4 font-[family-name:var(--font-zen-maru)]">
                        世界の「やさしい」<br />
                        だけを、集めました。
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-[family-name:var(--font-zen-maru)]">
                        事件や事故、悲しいニュースは一切届きません。<br />
                        あなたの心が、ほんのり温まる場所。
                    </p>
                </div>

                <div className="relative w-72 h-72 mb-16 flex items-center justify-center">
                    <div className="text-8xl">
                        <img
                            src="/famicons_earth-sharp.png"
                            alt="Heart group illustration" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    {/* ハートとかの装飾 */}
                    <div className="absolute inset-0 rounded-full"> {/* animate-[spin_20s_linear_infinite] */}
                        <img
                            src="/heart_group.png"
                            alt="Heart group illustration" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="mt-auto w-full flex flex-col items-center gap-8">
                    {/* ステップ表示 */}
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full border-4 border-[#68A76E] flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#5EA754] rounded-full"></div>
                        </div>
                        <div className="w-6 h-6 rounded-full border-4 border-[#68A76E]"></div>
                        <div className="w-6 h-6 rounded-full border-4 border-[#68A76E]"></div>
                    </div>

                    <button 
                        onClick={onNext}
                        className="w-full py-5 bg-[#F3A683] text-white text-xl font-bold rounded-full shadow-md active:scale-95 transition-transform font-[family-name:var(--font-zen-maru)]">
                        次へ
                    </button>
                </div>

            </div>
    );
}