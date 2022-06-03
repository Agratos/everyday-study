# styled-component

### 다른 컴포넌트에서 event시 컴포넌트 변경 
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

### 컴포넌트로 props 전달
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

### react-icons 스타일 변경
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

### GlobalStyle 적용
```
// /styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body{
   ~~~~~~~~
 }
`
```
 - index에 따로 적용 시켜줄 필요가 없다 자동으로 적용
 - media를 사용해서 PC, Tablet, Mobile 등 적용 가능
```
import { createGlobalStyle } from 'styled-components';

const device = {
    pc: 'min-width: 1200px',
    tablet: 'max-width: 1199px',
    mobile: 'max-width: 799px'
}

const GlobalStyle = createGlobalStyle`
    @media screen and (${device.pc}){
        body{
            ...
        };
    }
    @media screen and (${device.tablet}){
        body{
            ...
        };
    }
    @media screen and (${device.mobile}){
        body{
            ...
        };
    }
    button{
        ...
    };
`;

export default GlobalStyle;
```
### theme 적용
 - theme.js 작성 (src/styles/theme.js)
```
// styles.theme.js
const font={
  title: `
        font-size: 40px;
        font-weight: bolder;
        text-align: center;
    `,
    subtitle: `
        font-size: 24px;
        font-weight: bolder;
    `,
}
const theme = {
    fontCommon
};

export default theme;
```
 - index.js 에다가 적용 (src/index.js)
```
// src/index.js
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

ReactDOM.createRoot(rootNode).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
```
 - 사용 하는 법
```
import styled from 'styled-components';
const Wrapper = styled.div`
    ${({ theme }) => theme.fontCommon.title}
    ${({ theme }) => theme.fontCommon.subtitle}
`;
```
 - css 부분이 아니라 component자체를 상속 받고 싶다면
 - 단 theme.js 에서 css 가 아닌 component를 만들어서 export 해줘야 한다.
```
import styled from 'styled-components';
import theme from 'styles/theme';

const Wrapper = styled(theme.컴포넌트이름)`
   ...
`;
```

### React does not recognize the computedMatch prop on a DOM element 오류 일때
```
const ResizableSC = styled(({ someProp, ...rest }) => <Resizable {...rest} />)`
    flex: 0 0 ${(props) => props.someProp}px;
`;
```
 - 다른 component 상속 안 받을 때
```
const StyledLink = styled(({ isCurrent, ...rest }) => <Link {...rest} />)(
  ({ isCurrent }) => ({
    borderBottomColor: isCurrent ? 'green' : 'transparent',
  }),
)
```
 - 다른 component 상속 받을 때