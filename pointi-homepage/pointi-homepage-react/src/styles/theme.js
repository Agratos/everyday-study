import styled from 'styled-components';

//const pixelToRem = (size) => (size / 16);

const fontCommon = {
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

const animations = {
    rolling: `
        @keyframes fadeInDown {
            from {
                
            }
            to {
            }
        }
        transition-duration: 0.5s;
        animation: rolling 1s;
    `,
}

const divCommon = {
    default:`
        display: block;
    `,
    fixedLeftTop:`
        position: fixed;
        left: 0;
        top: 0;
    `,
    flex:`
        display: flex;
    `,
    flexAround:`
        display: flex;
        justify-content: space-around;
    `,
    flexCenter:`
        display: flex;
        justify-content: center;
    `,
    flexCenterCenter:`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    flexWrap:`
        display: flex;
        flex-wrap: wrap;
    `,
    flexWrapAround:`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    `,
    flexColumn:`
        display: flex;
        flex-direction: column;
    `,
    felxColumnWrap:`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    `,
    flexColumnAround:`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `,
    flexColumnCenter:`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    flexColumnCenterCenter:`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    flexColumnAroundCenter:`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    `,
    flexSpaceAround:`
        display: flex;
        justify-content: space-around;
    `,
    flexSpaceAroundCenter:`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `,
}

const zIndex = {
    one:`
        position: relative;
        z-index: 1;
    `,
    two:`
        position: relative;
        z-index: 2;
    `,
    three:`
        position: relative;
        z-index: 3;
    `,
    zero:`
        position: relative;
        z-index: -1;
    `,
}

const theme = {
    fontCommon,
    animations,
    divCommon,
    zIndex
};

export default theme;