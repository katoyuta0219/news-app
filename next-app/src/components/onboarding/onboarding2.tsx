'use client';

type Props = {
    onNext: () => void;
    onBack: () => void;
};

export default function Onboarding2({ onNext, onBack }: Props) {
    return (
        <div>
            <h2>onboarding 2</h2>

            <p>Step2の内容</p>

            <button onClick={onNext}>次へ</button>
        </div>
    );
}
