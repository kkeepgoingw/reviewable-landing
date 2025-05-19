// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // App Router 사용하는 경우 이건 없어도 됨
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ 실제 컴포넌트 폴더 위치
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard Variable"', 'sans-serif'],
        gmarket: ['"Gmarket Sans"', 'sans-serif'], // 강조용 폰트 별도 등록
      },
    },
  },
}
