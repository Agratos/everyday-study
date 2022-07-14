import { createGlobalStyle, css } from 'styled-components';

const device = {
    pc: 'min-width: 1120px',
    tablet: 'max-width: 1120px',
    mobile: 'max-width: 670px'
}

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Nanum Gothic', sans-serif;
        overflow-y: scroll;
        max-width: 2000px;
        max-height: 1200px;
    }
    @media screen and (${device.pc}){
        body{
            padding: 0;
            width: 1100px;
            height: 100%;
            margin: auto;
        }
        html{
            font-size: 16px;
        }
    }
    @media screen and (${device.tablet}){
        body{
            padding: 0;
            margin: 0;
            height: 100%;
        }
        html{
            font-size: 14px;
        }
    }
    @media screen and (${device.mobile}){
        body{
            padding: 0;
            margin: 0 12px;
            height: 100%;
        }
        html{
            font-size: 12px;
        }
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