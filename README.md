# fastlane 프론트엔드 과제

#### _FE sunkyung_

## Installation

- `package.json`이 위치한 폴더에서 `npm install && npm start` 명령을 하면 http://localhost:3000/ 에 리액트 페이지가 실행됩니다.

## File Structure

전체 파일 구조는 다음과 같습니다.

공용컴포넌트 및 페이지 관련 컴포넌트를 분리하고,
theme, type 관련 값들을 각각 나누어 관리하였습니다.

```
├── public
├── src/
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── theme
│   └── types
├── App.tsx
└── Routes.tsx
```

## Stack

- React
- React Router DOM v6
- typescripts : 정적 언어인 typescripts를 사용하여, js의 언어적 단점을 보완하였습니다.
- styled-components
- react-query : react-query를 사용하여 server state의 비동기를 처리하였습니다.
- axios

## Feature

### /fastlane/list

('http://localhost:3000/'에서 'http://localhost:3000/fastlane/list'로 리다이렉트됩니다.)

- inifinite scroll 기능으로 구현되어있습니다.
- 이전에 받아왔던 데이터들이 캐시처리하여 성능 최적화와 ux를 고려하였습니다.
- 포스트 정보를 불러오는 동안 skeleton loading 효과가 나타납니다.
- issue의 title 클릭 시, 해당 이슈 페이지로 이동합니다.
- label에 hover시, 해당 라벨의 상세 내용을 확인할 수 있습니다.
