import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // next export 사용 가능하게 설정
  trailingSlash: true, // GitHub Pages에서 경로 문제 방지
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? './' : '', // 상대 경로로 설정
  basePath: '', // 루트 경로일 경우 비워두거나 생략 가능
  reactStrictMode: true,
};

export default nextConfig;
