import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: smaller;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;

export default GlobalStyle;