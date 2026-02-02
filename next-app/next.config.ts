import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // パフォーマンス最適化
  // イメージ最適化
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
  // ビルド最適化
  // ビルド最適化
  productionBrowserSourceMaps: false,
};

export default nextConfig;
