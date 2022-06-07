import { createGlobalStyle } from 'styled-components';

const device = {
    pc: 'min-width: 1200px',
    tablet: 'max-width: 1200px',
    mobile: 'max-width: 900px'
}

const GlobalStyle = createGlobalStyle`
    @media screen and (${device.pc}){
        body{
            padding: 0 15vw 0 15vw;
            margin: 0;
            font-family: 'Noto Sans KR';
            font-size: 14px;
            height: 100vh;
        };
    }
    @media screen and (${device.tablet}){
        body{
            padding: 0;
            margin: 0;
            font-family: 'Noto Sans KR';
            font-size: 14px;
            height: 100vh;
        };
    }
    @media screen and (${device.mobile}){
        body{
            padding: 0;
            margin: 0;
            font-family: 'Noto Sans KR';
            font-size: 14px;
            height: 100vh;
        };
    }
    table{
        width: 100%;
        border-collapse: collapse;
    }
    :link{
        text-decoration: none;
        font-weight: normal;
    }
`;

export default GlobalStyle;