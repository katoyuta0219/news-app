# Docker セットアップガイド

このドキュメントでは、プロジェクトを Docker で起動・実行する方法を説明します。

## 必要な環境

- Docker 20.10以上
- Docker Compose 2.0以上

[Docker のインストール](https://docs.docker.com/get-docker/)

## プロジェクト構成

```
news-app/
├── dockerfile          # マルチステージビルド定義
├── docker-compose.yml  # コンテナオーケストレーション設定
└── next-app/          # Next.js アプリケーション
```

## Docker イメージ構成

Dockerfile はマルチステージビルドで以下の3つのステージを定義：

### 1. builder ステージ
- Next.js のビルド用
- 依存関係のインストールとビルド実行

### 2. production ステージ
- 本番環境用の軽量イメージ
- ビルド成果物のみを含含

### 3. development ステージ
- 開発環境用
- ホットリロード対応

## 基本的な使用方法

### 開発環境での実行

```bash
# イメージのビルドと起動
docker-compose up app-dev

# バックグラウンド実行
docker-compose up -d app-dev

# ログの確認
docker-compose logs -f app-dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセス

### 本番環境での実行

```bash
# イメージのビルドと起動
docker-compose --profile prod up app-prod

# バックグラウンド実行
docker-compose --profile prod up -d app-prod
```

ブラウザで [http://localhost:3001](http://localhost:3001) にアクセス

## よく使うコマンド

### ビルド

```bash
# 開発環境のみビルド
docker-compose build app-dev

# 本番環境のみビルド
docker-compose build app-prod

# 全てのイメージをビルド
docker-compose build
```

### コンテナ管理

```bash
# 起動
docker-compose up -d app-dev

# 停止
docker-compose stop app-dev

# 停止・削除
docker-compose down

# 全てのボリュームも削除（初期化）
docker-compose down -v

# コンテナ内でコマンド実行
docker-compose exec app-dev npm run lint

# ログ表示
docker-compose logs -f app-dev

# 特定時刻以降のログ
docker-compose logs --since 2024-01-26T10:00:00 app-dev
```

### イメージ管理

```bash
# イメージ一覧表示
docker images | grep news-app

# 不要なイメージを削除
docker image prune

# 特定のイメージを削除
docker rmi news-app:dev
```

## 環境変数

### 開発環境
```yaml
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 本番環境
```yaml
NODE_ENV=production
NEXT_PUBLIC_API_URL=http://localhost:3000
```

環境変数を追加・変更する場合は、`docker-compose.yml` の `environment` セクションを編集してください。

## ポートマッピング

| サービス | コンテナポート | ホストポート |
|---------|---------------|------------|
| app-dev | 3000 | 3000 |
| app-prod | 3000 | 3001 |

ポートを変更する場合は、`docker-compose.yml` の `ports` を修正してください。

## ボリュームマウント

開発環境では以下のボリュームがマウントされます：

```yaml
volumes:
  - ./next-app:/app              # ソースコード
  - /app/node_modules            # node_modules（キャッシュ）
  - /app/.next                    # .next（キャッシュ）
```

本番環境ではボリュームをマウントしません。

## ヘルスチェック

両サービスには curl ベースのヘルスチェックが設定されています：

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 40s
```

ヘルスチェック状態を確認：

```bash
docker-compose ps
```

## トラブルシューティング

### ポートが既に使用されている場合

```bash
# ポート 3000 を使用しているプロセスを確認
lsof -i :3000

# 強制的に終了
kill -9 <PID>

# または別のポートにマッピングを変更
# docker-compose.yml の ports を修正
```

### node_modules のキャッシュ問題

```bash
# 全てのボリュームを削除して初期化
docker-compose down -v

# 再度ビルド
docker-compose build
```

### アプリが起動しない場合

```bash
# ログを詳しく確認
docker-compose logs app-dev

# コンテナ内でシェルを実行して確認
docker-compose exec app-dev sh

# npm のバージョン確認
docker-compose exec app-dev npm -v

# Node のバージョン確認
docker-compose exec app-dev node -v
```

### ホットリロードが動作しない場合

1. ボリュームマウントが正しく設定されているか確認
2. ファイルシステムの監視設定を確認
3. コンテナを再起動

```bash
docker-compose restart app-dev
```

## ネットワーク

コンテナは `news-app-network` という Docker ネットワークで接続されています。

将来複数サービスを追加する場合、同じネットワークに接続することで相互通信が可能になります。

```bash
# ネットワーク一覧確認
docker network ls

# ネットワーク詳細確認
docker network inspect news-app-network
```

## パフォーマンス最適化

### マルチステージビルド

Dockerfile のマルチステージビルドにより、本番イメージサイズを最小化：

```bash
# イメージサイズ確認
docker images news-app:*
```

### ビルドキャッシュの活用

Dockerfile は変更頻度の低いファイルを優先にコピーしています：

1. `package.json` → 依存関係インストール
2. ソースコード → ビルド

このため、ソースコードのみ変更時はキャッシュが活用されます。

### ボリュームキャッシュ

開発環境の `node_modules` と `.next` はボリュームキャッシュされます：

```bash
# 現在のボリュームを確認
docker volume ls | grep news-app
```

## 本番デプロイ

### ローカルで本番イメージをテスト

```bash
docker-compose --profile prod up app-prod
```

### イメージをレジストリにプッシュ

```bash
# レジストリにタグ付け
docker tag news-app:prod myregistry.azurecr.io/news-app:latest

# プッシュ
docker push myregistry.azurecr.io/news-app:latest
```

### Kubernetes へのデプロイ例

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: news-app
spec:
  containers:
  - name: app
    image: news-app:prod
    ports:
    - containerPort: 3000
    env:
    - name: NODE_ENV
      value: "production"
```

## セキュリティ考慮事項

1. **本番環境では production ステージを使用**
   - 不要な開発ツールを含めない

2. **シークレット管理**
   - 環境変数ファイルを `.gitignore` に追加

3. **イメージスキャン**
   ```bash
   docker scan news-app:prod
   ```

4. **定期的な更新**
   - Node.js ベースイメージの更新
   - 依存パッケージの更新

## 参考リンク

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Next.js Docker Deployment](https://nextjs.org/docs/deployment/docker)
