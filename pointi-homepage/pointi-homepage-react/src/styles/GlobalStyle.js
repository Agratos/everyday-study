import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0 10vw 0 10vw;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
`;

export default GlobalStyle;