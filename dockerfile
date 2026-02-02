# ビルドステージ
FROM node:22-alpine AS builder

WORKDIR /app

# キャッシュ最適化: 依存関係をコピー
COPY next-app/package.json next-app/package-lock.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY next-app .

# ビルド実行
RUN npm run build

# 本番環境ステージ
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# キャッシュ最適化: 依存関係をコピー
COPY next-app/package.json next-app/package-lock.json ./

# 本番環境の依存関係のみインストール
RUN npm install --only=production

# ビルドステージからビルド成果物をコピー
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]

# 開発環境ステージ
FROM node:22-alpine AS development

WORKDIR /app

ENV NODE_ENV=development

# 依存関係をコピー
COPY next-app/package.json next-app/package-lock.json ./

# 全ての依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY next-app .

EXPOSE 3000

CMD ["npm", "run", "dev"]
