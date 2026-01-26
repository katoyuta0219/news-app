# 📰 News App - ニュースアプリケーション

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-Supported-2496ED?style=flat-square&logo=docker)](https://www.docker.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

位置情報とユーザープロファイルに基づいてニュースを配信するモダンな Web アプリケーション

[デモ](#デモ) • [セットアップ](#セットアップ) • [ドキュメント](#ドキュメント) • [貢献](#貢献)

</div>

---

## 🎯 概要

News App は、ユーザーの位置情報、年齢、興味分野に基づいてパーソナライズされたニュースを配信する Next.js ベースの Web アプリケーションです。

**主な特徴：**
- 📍 GPS ベースの位置情報活用
- 🎭 ユーザープロファイルのカスタマイズ
- 📊 スマートなニュースフィルタリング
- 🗺️ インタラクティブなマップ表示
- 🎨 レスポンシブで美しい UI
- 🚀 高速でスケーラブルなアーキテクチャ

## ✨ 主な機能

### 🏠 ホーム
- パーソナライズされたニュースフィード
- カテゴリ別のニュース表示
- 絞り込み機能

### 📍 マップ
- 現在地表示
- ニュース発生地点の可視化
- インタラクティブなマップナビゲーション

### 👤 プロフィール
- ユーザー情報の管理
- 興味分野の設定
- 位置情報の設定

### 📋 オンボーディング
- ウェルカムツアー
- ユーザープロフィールセットアップ
- スムーズなアプリ初期化

## 🛠️ 技術スタック

### フロントエンド
- **フレームワーク**: Next.js 16.1.1
- **UI ライブラリ**: React 19.2.3
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS 4
- **コンパイラ**: SWC（Rust 製高速コンパイラ）

### デプロイメント
- **コンテナ化**: Docker（マルチステージビルド対応）
- **オーケストレーション**: Docker Compose

### 開発ツール
- **リント**: ESLint
- **型安全性**: TypeScript
- **パッケージ管理**: npm

## 📁 プロジェクト構造

```
news-app/
├── dockerfile              # Docker マルチステージビルド定義
├── docker-compose.yml      # コンテナオーケストレーション設定
├── README.md              # 日本語セットアップガイド
├── DOCKER.md              # Docker使用ガイド
├── next-app/              # Next.js アプリケーション
│   ├── src/
│   │   ├── app/           # App Router（ページコンポーネント）
│   │   │   ├── page.tsx
│   │   │   ├── account/
│   │   │   ├── home/
│   │   │   ├── map/
│   │   │   ├── onboarding/
│   │   │   ├── profile/
│   │   │   ├── api/       # Route Handlers
│   │   │   └── globals.css
│   │   ├── components/    # React コンポーネント
│   │   │   ├── account/   # アカウント関連
│   │   │   ├── home/      # ホーム関連
│   │   │   ├── layout/    # レイアウト
│   │   │   ├── map/       # マップ関連
│   │   │   ├── onboarding/ # オンボーディング
│   │   │   └── ui/        # UI コンポーネント
│   │   ├── hooks/         # カスタムフック
│   │   ├── lib/           # ユーティリティ関数
│   │   ├── types/         # TypeScript 型定義
│   │   └── utils/         # ヘルパー関数
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   └── postcss.config.mjs
└── .gitignore
```

## 🚀 クイックスタート

### 前提条件
- Docker 20.10以上
- Docker Compose 2.0以上

### セットアップと起動

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/news-app.git
cd news-app

# 開発環境を起動
docker-compose up app-dev
```

### ブラウザでアクセス

```
http://localhost:3000
```

## 🐳 Docker コマンド

### 基本的な操作

```bash
# 開発環境を起動
docker-compose up app-dev

# バックグラウンド起動
docker-compose up -d app-dev

# 本番環境を起動
docker-compose --profile prod up app-prod

# ログ確認
docker-compose logs -f app-dev

# コンテナ停止
docker-compose stop app-dev

# 完全に削除
docker-compose down

# ボリュームも削除（初期化）
docker-compose down -v
```

### コンテナ内でコマンド実行

```bash
# リント実行
docker-compose exec app-dev npm run lint

# ビルド
docker-compose exec app-dev npm run build

# 分析
docker-compose exec app-dev npm run analyze
```

### イメージの再ビルド

```bash
# 開発環境のみ
docker-compose build app-dev

# 本番環境のみ
docker-compose build app-prod

# 全てビルド
docker-compose build
```

## 📖 ドキュメント

- [セットアップガイド](./next-app/README.md) - 詳細なセットアップ手順
- [Docker ガイド](./DOCKER.md) - Docker での実行方法

## 🔧 設定ファイル

### `next.config.ts`
- React Compiler 有効化
- SWC 最小化
- イメージ最適化設定
- フォント最適化

### `tsconfig.json`
- 厳密な型チェック
- パス別名設定
- JSX の自動変換

### `tailwind.config.ts`
- Tailwind CSS v4 設定
- カスタムテーマ定義

## 🌍 環境変数

`.env.local` ファイルを作成して設定します：

```env
# API エンドポイント
NEXT_PUBLIC_API_URL=http://localhost:3000

# ジオコーディング API
NEXT_PUBLIC_GEOCODING_API_KEY=your_api_key

# その他の設定
NODE_ENV=development
```

## 🎨 UI/UX

- **レスポンシブデザイン** - モバイル・タブレット・デスクトップ対応
- **ダークモード対応** - Tailwind CSS による自動対応
- **アクセシビリティ** - WCAG ガイドラインに準拠
- **パフォーマンス最適化** - Core Web Vitals に対応

## 🧪 テスト

```bash
# ユニットテスト実行
npm run test

# E2E テスト実行
npm run test:e2e

# カバレッジ確認
npm run test:coverage
```

## 📊 パフォーマンス

- **初期ロード時間**: < 3 秒
- **Time to Interactive (TTI)**: < 5 秒
- **Lighthouse スコア**: 90+ (全項目)

## 🔒 セキュリティ

- HTTPS 推奨
- CSP（Content Security Policy）設定
- XSS 対策
- CSRF トークン実装
- 入力値の検証とサニタイズ

## 🤝 貢献

プロジェクトへの貢献を歓迎します！

### 貢献方法

1. リポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

### 貢献ガイドライン

- コードは TypeScript で記述
- コンポーネントは関数型コンポーネント
- 型注釈を必ず記述
- ESLint に準拠
- コミットメッセージは日本語または英語で明確に

## 🐛 バグ報告

バグを発見した場合、[Issues](https://github.com/yourusername/news-app/issues) で報告してください。

## 📝 ライセンス

このプロジェクトは MIT ライセンス の下でライセンスされています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 👨‍💻 作者

- **Your Name** - [@yourhandle](https://twitter.com/yourhandle)

## 🙏 謝辞

- [Next.js](https://nextjs.org) チーム
- [Tailwind CSS](https://tailwindcss.com) コミュニティ
- [React](https://react.dev) コミュニティ

## 📞 サポート

質問や問題がある場合：

- [Issues](https://github.com/yourusername/news-app/issues) で質問
- [Discussions](https://github.com/yourusername/news-app/discussions) で議論
- メール: your.email@example.com

## 🔗 リンク

- [Web サイト](https://example.com)
- [ブログ](https://blog.example.com)
- [Twitter](https://twitter.com/yourhandle)
- [LinkedIn](https://linkedin.com/in/yourprofile)

---

<div align="center">

⭐ このプロジェクトが役立つ場合は、スター をお願いします！

[⬆ トップへ](#-news-app---ニュースアプリケーション)

</div>
