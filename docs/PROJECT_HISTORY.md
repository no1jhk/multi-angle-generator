# Multi-Angle Image Generator — PROJECT_HISTORY.md

> 새 세션 시작 시 이 파일을 먼저 참조하세요.

---

## 📌 프로젝트 개요

| 항목 | 내용 |
|---|---|
| **프로젝트명** | Multi-Angle Image Generator |
| **목적** | 이미지 1장 → 멀티앵글 이미지 + 영상 생성 앱 |
| **기반** | ComfyUI 캐릭터 시트 워크플로우 (NanoBanana 강의) |
| **기술 스택** | React (Vite) + Vercel Serverless Functions |
| **AI 엔진** | Google Gemini API (이미지) + Veo 3.1 (영상) |
| **배포** | Vercel (multi-angle-generator.vercel.app) |
| **GitHub** | no1jhk/multi-angle-generator |
| **버전** | SemVer (MAJOR.MINOR.PATCH), package.json 기준 |

---

## 📅 세션 1 — 2025-03-05

### 작업 내용
- ComfyUI JSON 분석 → Gemini API 4회 호출 + UI가 본질
- 프로토타입 v1~v8 반복 (다크→라이트, Runway 스타일 최종)
- 디자인 시스템: Noto Sans KR 800 + Inter + JetBrains Mono, 블루 그래디언트
- 온보딩 4단계, API 키 검증, 로딩 오버레이

---

## 📅 세션 2 — (생략)

---

## 📅 세션 3 — 2026-03-09~11

### 작업 내용
- Nano Banana 이미지 생성 동작 확인
- Veo 3.1 영상 생성 동작 확인 (Vite 프록시 CORS 해결)
- 하단 바 컨텍스트 전환 (IntersectionObserver)
- 429 에러 팝업, 안전 필터 안내
- 영상 패널 별도 섹션, 9:16/16:9 비율 선택

---

## 📅 세션 4 — 2026-03-11

### 작업 내용
- `barMode` 이중 IntersectionObserver 보완
- `VideoPanel` 독립 컴포넌트, `useElapsed` 훅
- Vercel Serverless Function 프록시 (`getProxyBase()`, `vercel.json`)
- `ResultCard` 그래디언트 보더 기법

---

## 📅 세션 5 — 2026-03-11 (오후)

### 작업 내용
- 이미지 선택 높이 불일치 수정 (padding:4 고정)
- 영상 섹션 배경 분리 (`videoZone` #E1E1E5 + 점선 경계)

---

## 📅 세션 6 — 2026-03-12

### 작업 내용 (Claude + 사용자 협업)

**UI 정리** ✅
- 하단바 항상 흰색 (영상 모드 오버라이드 제거)
- midZone ↔ 하단바 흰색 간격 제거 (root paddingBottom 제거)
- 이미지↔영상 경계 점선 + 여백 조정
- 소스 이미지 드롭영역 높이 = 포즈 설정 높이 동일화 (comboGrid stretch, drop flex:1)

**버튼 위계 정리** ✅
- 이미지 생성: 파란 그래디언트 / 영상 생성하기: 블랙 138px 중앙 / 전체 영상 생성: 파란
- API 확인 버튼: transparent border + radius.md로 인풋과 높이 통일
- `▶` 기호 제거

**버전 표기 시스템** ✅
- `package.json` → `"version": "0.2.0"` (SemVer 도입)
- `import pkg from "../package.json"` → 헤더 좌측 하단 `ver {pkg.version}` 자동 표시
- `S.verLabel` 스타일: 12px mono, `T.border.dashed` 색상
- 버전 올리기: package.json 숫자만 변경하면 화면 자동 반영

**서브카피 변경** ✅ (사용자 직접 수정)
- "Turn one image into a full character sheet" → "From one image to every angle and motion"

**하단바 높이 복원** ✅
- `barIn` padding: "10px 0" → "14px 0"

### 현재 핵심 스타일 값
```
headerIn:           alignItems:"flex-end" (ver 텍스트 하단 정렬)
main padding:       "28px 0 44px"
videoZone:          paddingTop:36, paddingBottom:100
barIn padding:      "14px 0"
comboGrid:          alignItems:"stretch"
drop:               flex:1, minHeight:200 (aspectRatio 제거)
영상 생성하기 버튼:  width:138px, margin:"0 auto", background:T.black
```

---

## 🔧 현재 파일 구조
```
/Users/jhkim/Documents/multi-angle-generator/
├── src/App.jsx              ← 메인 단일 파일
├── api/
│   ├── gemini-proxy.js
│   └── gemini-proxy/[...path].js
├── vite.config.js
├── vercel.json              (maxDuration: 30)
├── package.json             (version: "0.2.0")
└── docs/PROJECT_HISTORY.md
```

---

## 📋 버전 관리 규칙 (SemVer)
- **MAJOR.MINOR.PATCH** 형식 (예: 0.2.0)
- MAJOR: 호환 깨지는 대규모 변경 / MINOR: 새 기능 추가 / PATCH: 버그 수정·UI 미세 조정
- 0.x.x = 정식 출시 전 / 1.0.0 = 정식 출시 선언
- 관리 위치: `package.json` → App.jsx에서 import하여 화면 표시

---

## 📋 미결 사항
- [ ] 로고/타이틀 리디자인
- [ ] 모바일 반응형
- [ ] 헤더 ver 텍스트 ↔ 시작가이드 버튼 하단 정렬 미세 조정 (보류)
- [ ] Vercel Hobby 타임아웃 이슈 모니터링 (10초 제한)

---

## 🔗 관련 리소스

- Gemini API: https://ai.google.dev/gemini-api/docs/image-generation
- Veo API: https://ai.google.dev/gemini-api/docs/video
- API 키 발급: https://aistudio.google.com/app/apikey
- Vercel 배포: https://multi-angle-generator.vercel.app
- GitHub: https://github.com/no1jhk/multi-angle-generator
