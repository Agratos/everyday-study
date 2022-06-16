import { createGlobalStyle } from 'styled-components';

const device = {
    pc: 'min-width: 1200px',
    tablet: 'max-width: 1200px',
    mobile: 'max-width: 900px'
}

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Nanum Gothic', sans-serif;
        //font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    }
    @media screen and (${device.pc}){
        body{
            padding: 0;
            width: 1200px;
            max-width: 2000px;
            max-height: 1600px;
            margin: auto;
            font-size: 16px;
            height: 100%;
            /* border-left: 1px solid black;
            border-right: 1px solid black; */
        };
    }
    @media screen and (${device.tablet}){
        body{
            padding: 0;
            margin: 0;
            font-size: 16px;
            height: 100%;
        };
    }
    @media screen and (${device.mobile}){
        body{
            padding: 0;
            margin: 0;
            font-size: 16px;
            height: 100%;
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