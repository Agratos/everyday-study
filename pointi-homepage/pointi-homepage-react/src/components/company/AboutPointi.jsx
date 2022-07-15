import React, { useState , useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { BsMouse } from 'react-icons/bs';

import useWindowScrollPosition from 'containers/scroll/useWindowScrollPosition';

const AboutPointi = ({data, device}) => {
    const scrollPoistion = useWindowScrollPosition();
    const scrollPageRef = useRef([]);
    const [ scrollPage, setScrollPage ] = useState(0);
    const [ reset, setReset ] = useState(false);

    const scrollAction = (e) => {
        if(reset){
            if(e.deltaY > 0){
                if(scrollPage + 1 >= scrollPageRef.current.length) return
                else {
                    setScrollPage(scrollPage + 1);
                    document.body.style.cssText = `
                        position: fixed; 
                        top: calc(50%);
                        left: calc(50%);
                        transform: translate(-50%, -50%);
                        overflow-y: scroll;
                        pointer-events: none;
                    `;
                }
            }else if(e.deltaY < 0 && scrollPoistion === 0){
                if(scrollPage - 1 < 0 ) return
                else {
                    setScrollPage(scrollPage - 1); 
                }
            }
        }
    }

    const blockEvent = (state) => {
        setReset(state);
        if(state){
            document.body.style.cssText = `
                position: block;
                pointer-events: auto;
            `;
        }
    }

    return (
        <Wrapper 
            id='patent' 
            ref={element => (scrollPageRef.current[0] = element)} 
            onWheel={(e) => {scrollAction(e)}}
            onAnimationEnd={(e) => {blockEvent(true)}}
        >
            <AboutUs id='about-us' scrollPage={scrollPage}>
                <Title>{data['about-us'].title}</Title>
                <TextBoldWrapper>
                    {data['about-us']['text-bold'].map((text, index) => (
                        <TextBold key={`textbold-${index}`}>{text}</TextBold>
                    ))}
                </TextBoldWrapper>
                <TextNomalWrapper>
                    {data['about-us']['text-nomal'].map((text, index) => (
                        <TextNomal key={`textnomal-${index}`}>{text}</TextNomal>
                    ))}
                </TextNomalWrapper>
                <MouseIconWrapper>
                    <BsMouse size={24}/>
                </MouseIconWrapper>
            </AboutUs>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const AboutUs = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}

    @keyframes changeAbout {
        from{
            transform: translateY(100%);
            visibility: visible;
        }
        to{
            transform: translateY(0);
        }
    }

    ${({scrollPage}) => scrollPage === 0 ? css`
        //margin-bottom: 22vh;
        display: !none;
        animation: changeAbout 1s ease forwards;
    ` : css`
        display: none;
    `}
`;
const TextBoldWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 40px 0 24px 0;
`;
const TextBold = styled.div`
    ${({theme}) => theme.fontCommon.subtitle}
    font-size: 1.6rem;
`;
const TextNomalWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 24px 0 40px 0;
`;
const TextNomal = styled.div`
    font-size: 1.5rem;
`;
const MouseIconWrapper = styled.div`
    @keyframes mouseMove {
        0%{
            transform: translateY(-10px);
        }
        50%{
            transform: translateY(10px);
        }
        100%{
            transform: translateY(-10px);
        }
    }
    animation-direction: reverse;
    animation: mouseMove 1.5s ease-in-out infinite alternate;
    margin: 16px;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;


export default AboutPointi;