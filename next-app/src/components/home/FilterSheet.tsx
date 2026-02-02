"use client";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function FilterSheet({ open, onClose }: Props) {
    return (
        <>
            {/* 背景の暗い幕 */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* 下から出るボード */}
            <div
                className={`fixed left-0 right-0 bottom-0 z-50 rounded-t-2xl bg-white dark:bg-zinc-900
          p-6 shadow-xl transition-transform duration-300
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold">絞り込み</h2>
                    <button onClick={onClose} className="text-sm text-gray-500">
                        閉じる
                    </button>
                </div>

                {/* ここに絞り込みUIを追加していく */}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    ここにチェックボックスやタグを入れる
                </p>

                <div className="mt-6">
                    <button
                        onClick={onClose}
                        className="w-full py-3 rounded-lg bg-blue-600 text-white"
                    >
                        適用
                    </button>
                </div>
            </div>
        </>
    );
}
