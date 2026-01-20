'use client';

type Props = {
    onNext: () => void;
};

export default function Onboarding1({ onNext }: Props) {
    return (
        <div>
            <h2>onboarding 1</h2>

            {/* 入力フォームとかここに置く */}
            <p>Step1の内容</p>

            <button onClick={onNext}>次へ</button>
        </div>
    );
}
