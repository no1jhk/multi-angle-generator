# Character Sheet — Design Guide & Tokens
## Based on Runway ML UI Analysis

> **Status: v1.0** — Runway 앱 스크린샷 분석 기반
> 이 문서는 앱 전체의 시각 일관성을 위한 디자인 원칙과 토큰 정의입니다.

---

## 1. 디자인 철학

### Runway의 핵심 원칙 (스크린샷 분석)

**"콘텐츠가 주인공, UI는 투명해야 한다"**

Runway 앱에서 관찰된 특징:
- **라이트 테마 기반** — 흰색/밝은 회색이 주 배경, 콘텐츠(이미지/비디오)가 돋보임
- **극도의 절제** — UI 요소가 거의 보이지 않을 정도로 미니멀
- **단일 액센트 컬러** — 보라/바이올렛 하나만 사용 (CTA, 활성 상태)
- **얇은 보더** — 영역 구분을 색상이 아닌 가벼운 라인으로 처리
- **넉넉한 여백** — 요소 간 충분한 공간, 압박감 없음
- **작고 가벼운 텍스트** — 라벨/버튼이 작고 담백함

### 우리 앱에 적용할 원칙

1. **Light-first** — 다크 테마에서 라이트 테마로 전환
2. **콘텐츠 > 크롬** — 업로드/생성 이미지가 시각적 주인공
3. **One Accent** — 바이올렛 하나로 모든 인터랙션 표현
4. **Quiet UI** — 라벨, 보더, 아이콘 모두 눈에 띄지 않게
5. **Generous Space** — 요소 간 여유로운 간격

---

## 2. Color Tokens

### 2.1 Background (배경)

| Token | Hex/Value | 용도 | Runway 참고 |
|---|---|---|---|
| `bg.page` | `#FFFFFF` | 전체 페이지 배경 | 메인 영역 배경 |
| `bg.panel` | `#FAFAFA` | 사이드바, 카드 배경 | 좌측 패널 |
| `bg.elevated` | `#F5F5F5` | 호버, 드롭존 배경 | 업로드 영역 |
| `bg.input` | `#FFFFFF` | 인풋, 텍스트에리어 | 프롬프트 입력 |
| `bg.overlay` | `rgba(0,0,0,0.4)` | 모달 오버레이 | — |

### 2.2 Border (보더)

| Token | Hex/Value | 용도 | Runway 참고 |
|---|---|---|---|
| `border.default` | `#E5E5E5` | 카드, 인풋 기본 | 업로드 영역 보더 |
| `border.hover` | `#D0D0D0` | 호버 상태 | — |
| `border.focus` | `#7C6BF0` | 포커스 링 | 바이올렛 |
| `border.subtle` | `#F0F0F0` | 구분선 | 매우 연한 선 |

### 2.3 Text (텍스트)

| Token | Hex/Value | 용도 | Runway 참고 |
|---|---|---|---|
| `text.primary` | `#1A1A1A` | 제목, 핵심 텍스트 | 메인 타이틀 |
| `text.secondary` | `#666666` | 부제목, 설명 | 라벨 텍스트 |
| `text.muted` | `#999999` | 힌트, placeholder | "Start Frame (optional)" |
| `text.ghost` | `#BFBFBF` | 비활성, 메타 정보 | 하단 세팅 |
| `text.inverse` | `#FFFFFF` | 버튼 위 텍스트 | CTA 버튼 |

### 2.4 Accent (액센트)

| Token | Hex/Value | 용도 | Runway 참고 |
|---|---|---|---|
| `accent.primary` | `#7C6BF0` | CTA 버튼, 활성 탭 | Runway 보라색 |
| `accent.hover` | `#6B5CE0` | 버튼 호버 | 약간 진하게 |
| `accent.subtle` | `rgba(124,107,240,0.08)` | 선택된 카드 배경 | 보라 틴트 |
| `accent.border` | `rgba(124,107,240,0.2)` | 활성 보더 | — |

### 2.5 Semantic (기능 컬러)

| Token | Hex/Value | 용도 |
|---|---|---|
| `success` | `#22C55E` | 활성 상태, 완료 |
| `error` | `#EF4444` | 에러 메시지 |
| `error.bg` | `rgba(239,68,68,0.06)` | 에러 배경 |
| `warning` | `#F59E0B` | 경고 (예약) |

---

## 3. Typography Tokens

### 3.1 Font Family

| Token | Value | 용도 | 비고 |
|---|---|---|---|
| `font.sans` | `'Inter', -apple-system, sans-serif` | 모든 UI 텍스트 | Runway와 유사한 깔끔한 산세리프 |
| `font.mono` | `'JetBrains Mono', monospace` | API 키, 수치 | 기존 유지 |

> **변경 사항:** Outfit → Inter
> Inter는 Runway 등 프로덕트 UI에서 가장 널리 쓰이는 서체.
> 작은 사이즈에서 가독성이 뛰어나고, "디자인하지 않은 듯한" 자연스러움이 있음.

### 3.2 Font Size

| Token | Value | Line Height | 용도 |
|---|---|---|---|
| `text.xs` | `11px` | `16px` | 메타 정보, 뱃지 |
| `text.sm` | `13px` | `20px` | 라벨, 힌트, 카드 내 텍스트 |
| `text.md` | `14px` | `22px` | 인풋, 본문 |
| `text.lg` | `15px` | `24px` | 버튼 텍스트 |
| `text.xl` | `16px` | `24px` | 섹션 제목 |
| `text.2xl` | `22px` | `30px` | 페이지 제목 |

### 3.3 Font Weight

| Token | Value | 용도 |
|---|---|---|
| `weight.regular` | `400` | 본문, 힌트 |
| `weight.medium` | `500` | 라벨, 버튼 |
| `weight.semibold` | `600` | 섹션 제목 |

> **핵심:** Runway는 bold(700)를 거의 안 씀. semibold(600)가 최대.
> 이것이 "차분한" 느낌의 핵심 요인 중 하나.

---

## 4. Spacing Tokens

| Token | Value | 용도 |
|---|---|---|
| `space.1` | `4px` | 인라인 간격 |
| `space.2` | `8px` | 아이콘-텍스트 간격 |
| `space.3` | `12px` | 카드 내부 패딩 |
| `space.4` | `16px` | 인풋 패딩, 요소 간 |
| `space.5` | `20px` | 섹션 내부 |
| `space.6` | `24px` | 섹션 간 |
| `space.8` | `32px` | 주요 영역 간 |
| `space.10` | `40px` | 페이지 패딩 |

---

## 5. Border Radius Tokens

| Token | Value | 용도 | Runway 참고 |
|---|---|---|---|
| `radius.sm` | `6px` | 작은 버튼, 뱃지 | 탭 버튼 |
| `radius.md` | `8px` | 인풋, 카드 | 업로드 영역 |
| `radius.lg` | `10px` | 큰 카드, 결과 이미지 | — |
| `radius.xl` | `12px` | CTA 버튼, 모달 | — |

> **관찰:** Runway의 radius는 전반적으로 작음 (6~10px).
> 과하게 둥근 모서리를 피하는 것이 프로페셔널한 인상의 핵심.

---

## 6. Shadow & Elevation

| Token | Value | 용도 |
|---|---|---|
| `shadow.sm` | `0 1px 2px rgba(0,0,0,0.04)` | 카드, 인풋 |
| `shadow.md` | `0 2px 8px rgba(0,0,0,0.06)` | 드롭다운, 팝오버 |
| `shadow.lg` | `0 8px 30px rgba(0,0,0,0.1)` | 모달, 온보딩 |

> **핵심:** Runway는 shadow를 매우 절제함. 보더로 영역을 구분하고,
> shadow는 떠있는 요소(모달, 드롭다운)에만 사용.

---

## 7. Animation Tokens

| Token | Value | 용도 |
|---|---|---|
| `duration.fast` | `150ms` | 호버, 토글 |
| `duration.normal` | `200ms` | 패널 전환 |
| `duration.slow` | `400ms` | 결과 이미지 등장 |
| `easing.default` | `ease-out` | 기본 |
| `easing.smooth` | `cubic-bezier(0.25,0.1,0.25,1)` | 부드러운 전환 |

> **핵심:** Runway는 화려한 애니메이션이 없음. 전환이 빠르고 자연스러움.

---

## 8. Component Guidelines

### 8.1 Button

```
Primary (CTA):
  bg: accent.primary (#7C6BF0)
  text: text.inverse (#FFFFFF)
  radius: radius.xl (12px)
  padding: 10px 20px
  font: text.md, weight.medium
  shadow: none
  hover: accent.hover

Secondary:
  bg: transparent
  text: text.primary
  border: border.default
  radius: radius.md (8px)
  hover: bg.elevated

Ghost:
  bg: transparent
  text: text.secondary
  border: none
  hover: bg.elevated
```

### 8.2 Input

```
Default:
  bg: bg.input (#FFFFFF)
  border: border.default (#E5E5E5)
  radius: radius.md (8px)
  padding: 12px 14px
  font: text.md, weight.regular
  placeholder: text.muted (#999999)
  
Focus:
  border: border.focus (#7C6BF0)
  shadow: 0 0 0 3px rgba(124,107,240,0.1)
```

### 8.3 Card (포즈 카드)

```
Default:
  bg: bg.page (#FFFFFF)
  border: border.default (#E5E5E5)
  radius: radius.md (8px)
  padding: space.3 (12px)
  
Active (선택된 포즈):
  border: accent.border
  bg: accent.subtle

Inactive:
  opacity: 0.5
```

### 8.4 Drop Zone (이미지 업로드)

```
Empty:
  bg: bg.panel (#FAFAFA)
  border: 1.5px dashed #D0D0D0
  radius: radius.md (8px)
  
Hover:
  border: 1.5px dashed accent.primary
  bg: accent.subtle

With Image:
  border: border.default (solid)
  bg: bg.page
```

### 8.5 Tab / Chip (모델 선택)

```
Default:
  bg: transparent
  border: border.default
  text: text.secondary
  radius: radius.sm (6px)
  padding: 6px 14px
  font: text.sm, weight.medium

Active:
  bg: #1A1A1A
  text: text.inverse
  border: transparent
```

> **Runway 패턴:** 활성 탭은 "검정 배경 + 흰 텍스트"로 처리.
> 보라색을 CTA에만 쓰고, 탭은 무채색으로 처리하는 게 차분함의 비결.

---

## 9. Layout Guidelines

### 9.1 전체 구조

```
Header: 높이 52px, 하단 border.subtle로 구분
Main: max-width 1200px, 좌우 padding space.10 (40px)
Footer: 최소화 (높이 40px, text.ghost)
```

### 9.2 2-Column

```
Left (업로드): minmax(280px, 1fr)
Right (포즈): 2fr
Gap: space.6 (24px)
```

### 9.3 Result Grid

```
Columns: repeat(auto-fill, minmax(240px, 1fr))
Gap: space.4 (16px)
이미지: radius.lg (10px), border.subtle
```

---

## 10. Dark vs Light 비교

| 요소 | 현재 (Dark) | 변경 후 (Light/Runway) |
|---|---|---|
| 배경 | `#0a0a14` (거의 검정) | `#FFFFFF` (순백) |
| 카드 배경 | `rgba(255,255,255,0.03)` | `#FFFFFF` + border |
| 텍스트 | `#e8e6f0` (밝은 라벤더) | `#1A1A1A` (거의 검정) |
| 액센트 | `#7c3aed` (진한 보라) | `#7C6BF0` (밝은 바이올렛) |
| 보더 | `rgba(255,255,255,0.06)` | `#E5E5E5` (밝은 회색) |
| 느낌 | 게임/사이버 느낌 | 프로덕트/도구 느낌 |

---

## 11. Anti-Patterns (하지 말 것)

- ❌ 그래디언트 배경 버튼 (→ 솔리드 컬러로)
- ❌ 글로우/네온 효과 (→ 제거)
- ❌ 이모지를 라벨 아이콘으로 사용 (→ 텍스트 또는 최소한의 SVG)
- ❌ 과도한 border-radius (20px+) (→ 8~12px 최대)
- ❌ font-weight 700+ (→ 600 최대)
- ❌ 복잡한 shimmer/pulse 애니메이션 (→ 단순 opacity 전환)
- ❌ 배경색으로 영역 구분 (→ border로 구분)

---

## 12. 적용 우선순위

1. **색상 전환** (Dark → Light) — 가장 큰 시각적 변화
2. **폰트 변경** (Outfit → Inter) — 톤 전환
3. **weight 조절** (700 → 600 최대) — 차분함
4. **보더/radius 통일** — 일관성
5. **이모지 → 텍스트 라벨** — 프로덕트 느낌
6. **그래디언트/글로우 제거** — 깔끔함
7. **여백 확대** — 숨 쉴 공간

---

*이 가이드는 Runway ML 앱 (2026-03 기준) 스크린샷 분석을 기반으로 작성되었습니다.*
*앱 적용 후 실제 테스트를 통해 세부 값을 조정할 수 있습니다.*
