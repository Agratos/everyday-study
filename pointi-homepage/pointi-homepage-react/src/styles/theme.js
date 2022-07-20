//const pixelToRem = (size) => (size / 16);

const fontCommon = {
    title: `
        font-size: 2rem;
        font-weight: bolder;
        text-align: center;
    `,
    subtitle: `
        font-size: 1.5rem;
        font-weight: bolder;
    `,
    companyTitle: `
        font-size: 3rem;
        font-weight: 900;
        margin-top: 16px;
        margin-bottom: 16px;
        border-bottom: 4px solid black;
        width: fit-content;
        padding: 8px;
    `,
    companySubTitle: `
        font-size: 2rem;
        font-weight: 900;
        margin-top: 16px;
        margin-bottom: 16px;
        width: fit-content;
    `
};

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
};

const divCommon = {
    default:`
        display: block;
    `,
    footerWrapper:`
        display: flex;
        height: 920px;
        flex-direction: column;
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
};

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
};

const theme = {
    fontCommon,
    animations,
    divCommon,
    zIndex
};

export default theme;