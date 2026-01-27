export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[393px] h-screen bg-[#FFF7ED] flex flex-col items-center justify-center shadow-2xl">
        
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-normal italic text-[#EBA388] tracking-tight font-[family-name:var(--font-lemon)] overflow-hidden">
              honnori
          </h1>
          {/* このspanで今文字隠している状態になってるよ！ */}
          <span className="absolute inset-0 bg-[#FFF7ED] animate-reveal-left"></span>
          {/* 
          これjsにやればなめらかに文字浮き出てくるはず
          module.exports = {
            theme: {
              extend: {
                keyframes: {
                  'reveal-left': {
                  '0%': { transform: 'translateX(0%)' },
                  '100%': { transform: 'translateX(100%)' },
                },
              },
              animation: {
              // 2秒かけて滑らかに右へ消える
              'reveal-left': 'reveal-left 2s ease-in-out forwards',
              },
            },
          },
          } */}
        </div>
        
      </div>
    </div>
  );
}