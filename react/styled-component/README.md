# styled-component

## 다른 컴포넌트에서 event시 컴포넌트 변경 
```
const Target = styled.div`
    color: red;
`;

const ChangeColor = styled.div`
    &:hover ${Target} {
        color: yellow;
    }
`;
```

## 컴포넌트로 props 전달
```
const Color = styled.div`
    color: ${props => props.color || 'white'}
`;

<Color color='yellow'>
```
color를 다른 변수로 사용 가능
```
const Color = styled.div`
    color: ${props => props.test || 'white'}
`;

<Color test='yellow'>
```
위의 코드와 같다.

## react-icons 스타일 변경
```
import { IoIosArrowDown } from "react-icons/io";
import styled from 'styled-components';

const Wrappter = styled.div`
    .dowm-mark {
        color: yellow;
        margin: 8px;
    }
`;

<IoIosArrowDown className='dowm-mark' />
```