'use client';

type Props = {
    onFinish: () => void;
    onBack: () => void;
};

export default function Onboarding3({ onFinish, onBack }: Props) {
    return (
        <div>
            <h2>onboarding 3</h2>

            <p>Step3の内容</p>

            <button onClick={onFinish}>次へ</button>
        </div>
    );
}
