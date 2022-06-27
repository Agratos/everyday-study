# React-icon
## 설치
```
npm i react-icons --save
yarn add react-icons
```
## 사용 방법
1. react-icons 사이트에서 원하는 아이콘을 복사
2. 원하는 아이콘의 카테고리 어디인지 확인(import 할 때 카테고리마다 조금씩 달라짐)
3. import { 아이콘이름 } from '아이콘 카테고리'
4. 컴포넌트처럼 사용
## style 변경
- 기본적으로 색깔 사이즈를 props로 넘겨주면 바뀐다.
```
  <아이콘이름 color={yellow} size={56} />
```
- hover 다른 효과들을 주고싶을때는 다른 component로 감싸주면 작동한다.
```
import styled from `styled-component`;
const IconWrapper = styled.div`
&:hover {
  color: 'yellow';
  size: 16px; 
}

<IconWrapper>
  <아이콘이름 color={red} size={24} />
</IconWrapper>
`;
```