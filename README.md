# 🚀 Reviewable Landing Page

> 이 프로젝트는 **[리뷰어블](https://www.reviewable.kr) 서비스 소개를 위한 랜딩 페이지**입니다.  
> Next.js + TypeScript + Tailwind CSS를 기반으로 정적 사이트로 빌드되어 **GitHub Pages를 통해 배포**됩니다.

---

## 📦 기술 스택

- [Next.js](https://nextjs.org/) (Static Export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Yarn](https://yarnpkg.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 🛠️ 프로젝트 실행

로컬 개발 환경에서 프로젝트를 실행하려면 다음 명령어를 입력하세요:

```bash
yarn install       # 의존성 설치
yarn dev           # 개발 서버 실행
````

개발 서버는 `http://localhost:3000`에서 확인할 수 있습니다.

---

## 🚀 정적 빌드 및 배포

이 프로젝트는 GitHub Pages로 정적 배포됩니다.

```bash
yarn build         # 프로덕션 빌드
yarn export        # 정적 HTML 파일 생성 (out/ 디렉토리)
yarn deploy        # gh-pages 브랜치로 배포
```

배포 후 사이트는 다음 주소에서 확인할 수 있습니다:

🔗 [https://landing.reviewable.kr](https://landing.reviewable.kr)

---

## 🌳 Git 브랜치 전략

* `main` – 운영 배포용 브랜치
* `feature/*` – 기능 단위 작업 브랜치 (`feature/landing-ui`, `feature/faq-section` 등)
* `gh-pages` – GitHub Pages 배포용 (자동으로 생성됨)

---

## 📌 커밋 컨벤션 (Conventional Commits)

* `feat`: 새로운 기능
* `fix`: 버그 수정
* `docs`: 문서 수정
* `refactor`: 코드 리팩토링
* `style`: 포맷, 세미콜론 누락 등
* `test`: 테스트 추가/수정
* `chore`: 기타 작업 (빌드 설정 등)

---

## 🔧 TODO (진행 중 기능)

* [x] 초기 구조 설계 및 스타일링 적용
* [x] 반응형 최적화
* [x] SEO 메타태그 추가
<!-- * [ ] 다국어 지원 -->

---

## 🧑‍💻 개발 및 기여 가이드

* 모든 작업은 `feature/*` 브랜치에서 진행 후 PR로 `main`에 병합합니다.
* PR에는 작업 요약, 테스트 방법, TODO를 포함해주세요.
* 커밋 메시지는 위 커밋 컨벤션을 따릅니다.

---

## 📄 라이선스

해당 프로젝트는 사내 전용 프로젝트로, 별도 라이선스를 적용하지 않습니다.