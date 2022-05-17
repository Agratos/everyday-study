import { createGlobalStyle } from 'styled-components';

const device = {
    pc: 'min-width: 1200px',
    tablet: 'max-width: 1199px',
    mobile: 'max-width: 799px'
}

const GlobalStyle = createGlobalStyle`
    @media screen and (${device.pc}){
        body{
            padding: 0 15vw 0 15vw;
            margin: 0;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 16px;
            height: 100vh;
        };
    }
    @media screen and (${device.tablet}){
        body{
            padding: 0;
            margin: 0;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 16px;
            height: 100vh;
        };
    }
    @media screen and (${device.mobile}){
        body{
            padding: 0;
            margin: 0;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 16px;
            height: 100vh;
        };
    }
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
`;

export default GlobalStyle;