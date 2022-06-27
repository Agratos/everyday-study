# react-responsive 설치
 - npm i react-responsive
 - yarn add react-responsive

# useMdediaQuery
```
const isPc = useMediaQuery({ query: '(min-width: 1200px)' })
const isTablet = useMediaQuery({ query: '(min-width:900px) and (max-width: 1200px)'})
const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
```
 - 화면의 px 크기에 따라 결과를 boolean으로 반환
 - 해당 조건에 맞는 css 를 작성 해주면 된다

# 내가 사용한 방법
 - redux에 해당 결과를 저장하여 필요한 부분에 불러서 사용
 - styled-component에 props 로 넘겨줘서 필요 부분을 수정
 ### 문제점...
   - 모든 styled-component가 responsive를 필요하다면 모든 component에 props로 넘겨줘야 함....

### 참고한 사이트들
 - https://intrepidgeeks.com/tutorial/reaction-network-reaction-response#5
 - https://velog.io/@pyo-sh/React-Responsive
 - https://www.nextree.co.kr/p8622/