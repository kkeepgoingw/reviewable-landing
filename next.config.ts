import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // next export 사용 가능하게 설정
  trailingSlash: true, // GitHub Pages에서 경로 문제 방지
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? "./" : undefined, // 선택 사항: 상대 경로 처리
};

export default nextConfig;
