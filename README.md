# 원티드 프리온보딩 12차 - 3주차 과제

## 과제 소개

> 검색창 클론 + 검색어 추천 기능 + 로컬 캐싱

## 결과 미리보기

[**배포 링크**](https://soft-biscuit-866fba.netlify.app/)

<!-- 이미지 위치 -->

## 시작 가이드

### 설치

```
$ git clone git@github.com:hyesuhong/wanted-pre-onboarding-week-3.git
$ cd wanted-pre-onboarding-week-3
```

### 로컬 서버 구동

```
$ npm install
$ npm run start
```

## 주요 기능

### 검색어 추천

- 사용자가 입력한 값을 받아 API를 호출합니다. 전달 받은 데이터를 적절한 개수로 잘라 화면에
  보여줍니다.

### 로컬 캐싱

- 추천 검색어는 변화가 많은 데이터가 아니기 때문에 로컬 캐싱을 구현해 http 요청을 줄이고자 했습니다.
- 이미 받은 기록이 있는 데이터인 경우 서버에 요청하지 않도록 했습니다.

### 키보드로 추천 검색어 선택

- 추천 검색어 리스트가 있을 때, 위/아래 방향키로 리스트를 선택할 수 있어 사용자의 편의성을
  높였습니다.

## 개발 중점 사항

1. `API 호출 최소화 전략`

   - **로컬 캐싱**: API를 호출하기 전, 로컬 저장소에 있는 케시 데이터를 먼저 살펴본 뒤 없을 때만
     API에 데이터를 요청합니다.
   - **Debounce**: 입력할 때마다 데이터를 요청할 경우 서버 연결이 빈번하게 발생합니다. 딜레이 시간을
     설정해, 일정 시간동안 쌓인 입력값으로 데이터를 요청하도록 Custom hook을 추가했습니다.
   - **한글 특성 이용**: 한글은 자·모음으로 조합되는 언어이기 때문에, 자음 혹은 모음만 있는 경우는
     단어가 완성되지 않았다고 판단했습니다. 완성되지 않은 단어는 API 요청을 해도 결과가 없으므로,
     요청을 하지 않았습니다.

2. `로컬 캐싱`

   - Cache API: 웹에서 기본으로 제공하는 Cache API를 이용했습니다.
   - 선택 이유
     - local/sessionStorage: 5MB 정도의 용량 제한이 있기 때문에, 데이터가 얼마나 저장될 지 알 수
       예측할 수 없는 상황에서 선택하기에는 리스크가 크다고 판단했습니다.
     - Cache API: Response 데이터를 저장할 수 있으며, 제한 용량도 사용자의 디바이스 용량에 따라
       정해지기 때문에 5MB보다는 여유가 있을 것이라고 생각했습니다.
   - 구현
     1. API 호출
     2. 응답 받은 값을 Cache 저장하는 Class로 전달
     3. 저장하기 전, 데이터가 만료되었는지를 판단하기 위해 headers에 생성시간을 추가.
     4. 저장소에 데이터를 저장
     5. 같은 url이 호출되면, API 호출 전 저장소를 먼저 살펴봄
        - 캐시 데이터가 있다면, 현재 시간과 비교해 데이터가 만료되었는지 확인
        - 만료되지 않는 캐시 데이터가 있다면 해당 데이터 리턴
        - 캐시 데이터가 있는데 만료되었거나, 데이터가 없다면 API 호출

3. `모듈화`

   - **Cache**
     - 캐시 저장소를 사용하는 곳에서는 어떻게 동작하는지 모르게 하기 위해 Class로 모듈화했습니다.
     - 추후에 다른 저장소로 수정의 가능성도 있다고 생각해 Class로 모듈화하는 것이 변경에 용이하다고
       생각했습니다.
     - 사용가능한 메서드만 노출해서 사용자가 불필요하게 동작할 가능성을 배제할 수 있다는 장점이
       있습니다.
   - **API 호출**
     - fetch API를 이용하는 부분을 Class로 모듈화했습니다.
     - Cache 저장소의 데이터 여부를 판단하고, 데이터를 요청하는 역할을 맡습니다.
     - App 단에서 base url과 캐시 저장소를 넘겨 선언하고, Context API로 데이터 요청하는 메서드를
       값으로 저장해 useContext로 가져와 사용할 수 있도록 했습니다.

## 프로젝트 구성

### 디렉토리

```
src
 ┣ assets
 ┣ components
 ┣ constants
 ┣ context
 ┣ hooks
 ┣ pages
 ┣ service
 ┣ store
 ┣ styles
 ┗ types
```

## 기술 스택

### Development

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white)
![styled components](https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)

### Linter & Formatter

![eslint](https://img.shields.io/badge/eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)
