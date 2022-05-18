import styled from 'styled-components';

const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
    title: pixelToRem(40),
    subtitle: pixelToRem(32),
    nomal: pixelToRem(16)
}

const animations = {
    fadeInOut: `
        @keyframes fadeInDown {
            from {
                opacity: 0;
                height: 0;
            }
            to {
                opacity: 1;
            }
        }
        transition-duration: 0.5s;
        animation: fadeInDown 1s;
    `
}

const theme = {
    fontSizes,
    animations
};

export default theme;