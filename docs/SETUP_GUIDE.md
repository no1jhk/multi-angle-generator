# Character Sheet — Cursor 프로젝트 세팅 가이드

## 1단계: 폴더 생성 & 프로젝트 초기화

터미널에서 실행:

```bash
cd ~/Documents
mkdir CharacterSheet
cd CharacterSheet
npm create vite@latest . -- --template react
npm install
```

## 2단계: 파일 배치

Claude에서 다운로드한 파일들을 아래처럼 배치:

```
~/Documents/CharacterSheet/
├── src/
│   └── App.jsx              ← character-sheet-app.jsx 내용을 여기에 복사
├── docs/
│   ├── PROJECT_HISTORY.md
│   └── DESIGN_TOKENS.md
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 3단계: App.jsx 설정

`src/App.jsx`에 character-sheet-app.jsx 내용을 그대로 붙여넣기.

`src/main.jsx`는 기본 Vite 템플릿 그대로 유지:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

`src/index.css`가 있으면 내용을 비우거나 삭제 (스타일은 App.jsx 인라인에 다 있음).

## 4단계: 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 열기 → 앱 확인.

## 5단계: API 테스트

1. API 키 입력 → 확인 버튼
2. 이미지 업로드
3. 포즈 선택
4. 생성하기 클릭
5. 결과 확인 & 다운로드 테스트

## 이후 단계

- 기능 테스트 완료 후 → 컴포넌트 분리
- Vercel 배포: `npm i -g vercel && vercel`
