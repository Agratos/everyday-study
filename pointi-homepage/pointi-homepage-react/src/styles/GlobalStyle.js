import { createGlobalStyle } from 'styled-components';

const device = {
    pc: 'min-width: 1200px',
    tablet: 'max-width: 1200px',
    mobile: 'max-width: 500px'
}

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Nanum Gothic', sans-serif;
    }
    @media screen and (${device.pc}){
        body{
            padding: 0;
            width: 900px;
            max-width: 2000px;
            max-height: 1600px;
            margin: auto;
            height: 100%;
            /* border-left: 1px solid black;
            border-right: 1px solid black; */
        };html{
            font-size: 16px;
        }
    }
    @media screen and (${device.tablet}){
        body{
            padding: 0;
            margin: 0;
            height: 100%;
        };html{
            font-size: 16px;
        }
    }
    @media screen and (${device.mobile}){
        body{
            padding: 0;
            margin: 0 12px;
            height: 100%;
        };
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