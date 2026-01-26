import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // パフォーマンス最適化
  swcMinify: true,
  // イメージ最適化
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
  // 開発サーバー設定
  experimental: {
    optimizeFonts: true,
  },
  // ビルド最適化
  productionBrowserSourceMaps: false,
};

export default nextConfig;
