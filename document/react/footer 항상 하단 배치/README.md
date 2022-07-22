# footer를 항상 하단에 배치할 때
 - 내용이 없을 때 footer가 올라와서 이상하게 보일 때
### 1. html, body에 height: 100%, display: flex, flex-flow: column 속성을 넣는다.
### 2. content 영역에 flex: 1을 주면 끝
```
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Nanum Gothic', sans-serif;
        padding: 0;
        margin: 0;
        height: 100%;
    }
`;
```
```
const CompanyPage = () => {
    return (
        <Wrapper id='introduce-page-wrapper'>
            <Header page={'company'} />
            <Company />
            <Footer />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.footerWrapper};
`;
```
```
const Company = () => {
    return (
        <Wrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    flex: 1;
`;
```