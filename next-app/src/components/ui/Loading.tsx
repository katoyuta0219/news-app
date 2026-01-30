
export default function Loading() {
  return (
    // 外枠：画面全体の背景色と中央寄せ
    <div className="flex items-center h-full justify-center min-h-screen bg-[#FFF7ED] overflow-hidden relative"> 

    <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reveal-right {
          0% { transform: translateX(0%); }
          100% { transform: translateX(101%); }
        }
        .animate-reveal {
          animation: reveal-right 2.5s ease-in-out forwards;
        }
      `}} />
      
      {/* メイン：幅を393pxに固定 */}
      <div className="w-[393px] h-screen bg-[#FFF7ED] flex flex-col items-center justify-center shadow-2xl overflow-hidden">
        
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-normal text-[#EBA388] tracking-tight font-[family-name:var(--font-lemon)]">
              honnori
          </h1>
          <div 
            className="absolute inset-0 bg-[#FFF7ED] animate-reveal" 
            style={{ width: '105%' }} // 文字が確実に見えるよう少し広め
          />
        </div>
        
      </div>
    </div>
  );
}