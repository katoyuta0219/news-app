これは[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)でブートストラップされた[Next.js](https://nextjs.org)プロジェクトです。

## セットアップ

### 必要な環境
- Node.js 18.17以上
- npm または yarn、pnpm、bun

### 初期セットアップ手順

1. **プロジェクトディレクトリに移動**
```bash
cd next-app
```

2. **依存パッケージをインストール**
```bash
npm install
# または
yarn install
# または
pnpm install
```

## はじめに

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

3. **ブラウザで確認**

[http://localhost:3000](http://localhost:3000)をブラウザで開いて、アプリケーションを確認してください。

### ファイル編集

`app/page.tsx`を編集することでページをカスタマイズできます。ファイルを保存すると、ページは自動的に更新されます（ホットリロード）。

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーをポート3000で起動
- `npm run dev:debug` - デバッグモードで開発サーバーを起動
- `npm run build` - 本番用にビルド
- `npm start` - 本番環境でアプリケーションを起動
- `npm run lint` - コードをリント
- `npm run analyze` - バンドルサイズを分析

## プロジェクト構造

```
src/
├── app/              # Next.js App Router
├── components/       # Reactコンポーネント
├── hooks/           # カスタムフック
├── lib/             # ユーティリティ関数
├── types/           # TypeScript型定義
└── utils/           # ヘルパー関数
```

## 技術スタック

- **フレームワーク**: Next.js 16.1.1
- **UI Library**: React 19.2.3
- **スタイリング**: Tailwind CSS 4
- **言語**: TypeScript
- **コンパイラ**: SWC（Rust製）

このプロジェクトは[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)を使用して、Vercelの新しいフォントファミリーである[Geist](https://vercel.com/font)を自動的に最適化してロードしています。

## 詳しく知る

Next.jsについてさらに詳しく知りたい場合は、以下のリソースをご覧ください：

- [Next.jsドキュメント](https://nextjs.org/docs) - Next.jsの機能とAPIについて学んでください。
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル。

[Next.jsのGitHubリポジトリ](https://github.com/vercel/next.js)をチェックしてください。フィードバックと貢献を歓迎します！

## Vercelでデプロイする

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの作成者による[Vercelプラットフォーム](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を使用することです。

詳細は[Next.jsデプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)をチェックしてください。
