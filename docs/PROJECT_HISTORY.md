# Character Sheet — PROJECT_HISTORY.md

> 새 세션 시작 시 이 파일을 먼저 참조하세요.

---

## 📌 프로젝트 개요

| 항목 | 내용 |
|---|---|
| **프로젝트명** | Multi-Angle Image Generator (캐릭터 시트) |
| **목적** | 캐릭터 이미지 1장 → 멀티앵글 자동 생성 앱 |
| **기반** | ComfyUI 캐릭터 시트 워크플로우 (NanoBanana 강의) |
| **기술 스택** | React (Vite) → Vercel 배포 예정 |
| **AI 엔진** | Google Gemini API (Nano Banana / 2 / Pro) |
| **상태** | UI 프로토타입 완성 → Cursor 전환 단계 |

---

## 📅 세션 1 — 2025-03-05

### 작업 내용

**1. 워크플로우 분석 & 기술 검토**
- ComfyUI JSON 분석 → Gemini API 4회 호출 + UI가 본질
- 비용: 무료 티어 하루 ~1,500회, 유료 $0.039~$0.134/장
- React 선택 (서버 불필요, 브라우저 직접 API 호출)

**2. 프로토타입 구현 (v1~v8 반복)**
- v1: 기본 기능 (다크 테마)
- v2: 모델 선택, 포즈 8개 확장, 커스텀 포즈
- v3: 온보딩 오버레이 4단계
- v4: Runway 분석 → 라이트 테마 전환
- v5: Gemini 별 로고, Noto Sans ExtraBold, 블루 그래디언트 체크박스
- v6: 3-Zone 배경 (흰-회-흰), 2×4 포즈 그리드
- v7: 체크박스 제거 → 카드 전체 클릭 + 그래디언트 보더
- v8: Runway 스타일 드롭다운 모델 선택, API 키 검증, 로딩 오버레이

**3. 디자인 시스템**
- DESIGN_TOKENS.md 작성 (Runway 분석 기반)
- Noto Sans KR 800 (타이틀) + Inter (UI) + JetBrains Mono (코드)
- 블루 그래디언트 (#4DABF7 → #1A73E8 → #1558B0) 활성 상태
- 검정 버튼 (보조), 블루 그래디언트 (CTA)

### 현재 UI 구조

```
[헤더 — 흰색]
  ✦ Multi-Angle Image Generator (40px/800)
  Turn one image into a full character sheet (18px/300)
                                        [시작가이드 ?]

[중간 — 회색 #F3F3F5]
  API Key    키가 없으신가요?  발급받기
  [인풋 + 👁] [확인]

  소스 이미지          포즈 설정              4개 활성
  [업로드 영역]        [정면][측면]
                      [뒷면][하이앵글]
                      [드론샷][로우앵글]
                      [클로즈업][돌리샷]
                      [+ 커스텀 포즈 추가]

  생성 결과
  [4열 그리드]

[하단 바 — 흰색]
  ✦ Nano Banana 2 ˅  나노바나나 모델을 선택하고 생성하기 버튼을 누르세요!
                      4장 × $0.067 = $0.268    [생성하기 · 4]
```

### 핵심 의사결정

| 결정 | 이유 |
|---|---|
| React (Streamlit X) | 서버 불필요, Vercel 배포 용이 |
| API 키 입력 방식 (OAuth X) | 구현 난이도, 즉시 사용 |
| sessionStorage | 탭 유지 중 키 보존 |
| 라이트 테마 (Runway 참고) | 콘텐츠(이미지) 돋보임 |
| 블루 그래디언트 | Google/Gemini 브랜드 톤 |
| 카드 클릭 (체크박스 X) | 터치 영역 확대, 깔끔한 UI |
| 드롭다운 모델 선택 (탭 X) | 하단 바 공간 절약 |

### 미결 사항
- [ ] Cursor 프로젝트 전환 & 로컬 테스트
- [ ] 실제 API 키 동작 테스트
- [ ] 컴포넌트 분리
- [ ] Vercel 배포
- [ ] 온보딩 팝업 내용 최종 검토
- [ ] 모바일 반응형 대응

---

## 🔗 관련 리소스

- 원본 워크플로우: `01_output_all.json`
- Gemini API: https://ai.google.dev/gemini-api/docs/image-generation
- API 키 발급: https://aistudio.google.com/app/apikey
- Gemini 가격: https://ai.google.dev/gemini-api/docs/pricing
