import React, { useState , useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { BsMouse } from 'react-icons/bs';

import useWindowScrollPosition from 'containers/scroll/useWindowScrollPosition';

const AboutPointi = ({data, device}) => {
    const scrollPoistion = useWindowScrollPosition();
    const scrollPageRef = useRef([]);
    const beforPage = useRef();
    const [ scrollPage, setScrollPage ] = useState(0);
    const [ reset, setReset ] = useState(false);
    const [ touchYPosition, setTouchYPosition ] = useState(0);

    useEffect(() => {
        blockEvent(false);
        setTimeout(() => {
            blockEvent(true);
            if(scrollPage === 0){
                document.body.style.cssText = `
                    position: block;
                    pointer-events: auto;
                `;
            }
        },1100)
    },[scrollPage])

    const scrollAction = (e) => {
        if(reset){
            if(e.deltaY < 0 && scrollPoistion + e.deltaY === e.deltaY){
                if(scrollPage - 1 < 0 ) return
                else {
                    stopMove();
                    beforPage.current = scrollPage;
                    setScrollPage(scrollPage - 1);
                    
                }
            }else if(e.deltaY > 0 && parseInt(window.innerHeight + scrollPoistion) >= document.body.scrollHeight){
                if(scrollPage + 1 >= scrollPageRef.current.length) return
                else{
                    stopMove();
                    beforPage.current = scrollPage;
                    setScrollPage(scrollPage + 1);
                }
            }
        }
    }
    const stopMove = () =>{
        if(device === 'PC'){
            return document.body.style.cssText = `
                position: fixed; 
                top: calc(50%);
                left: calc(50%);
                transform: translate(-50%, -50%);
                overflow-y: scroll;
                pointer-events: none;
            `;
        }else if(device === 'Tablet'){
            return document.body.style.cssText = `
                position: fixed;
                width: 100%;
                overflow-y: scroll;
                pointer-events: none;
            `;
        }else{
            return document.body.style.cssText = `
                position: fixed;
                width: calc(100% -24px);  
                overflow-y: scroll;
                pointer-events: none;
                overscroll-behavior-y: none;
            `;
        }

    } 
    const blockEvent = (state) => {
        setReset(state);
        if(state){
            document.body.style.cssText = `
                position: block;
                pointer-events: auto;
                overscroll-behavior-y: none;
            `;
        }
    }
    const changeTextColor = (text) => {
        const str = text.split("\"");
        return (
            <TextBold>
                {str.map((list, index) => (
                    index === 1 ? <Span color={'#2f6975'} key={`span-${index}`}>"{list}"</Span> 
                    : list
                ))}
            </TextBold>
        )
    }

    const onTouchScreenEnd = (e) => {
        if(reset){
            if(touchYPosition > e.changedTouches[0].pageY){ // 움직임 위든 아래든
                //page down
                if(scrollPage + 1 >= scrollPageRef.current.length) return
                else{
                    setScrollPage(scrollPage + 1);
                }
            } else{
                //page up
                if(scrollPage - 1 < 0 ) return
                else {
                    setScrollPage(scrollPage - 1);
                }
            }
        }
    }

    return (
        <Wrapper 
            onWheel={(e) => {scrollAction(e)}}
            onTouchStart={(e) => setTouchYPosition(e.changedTouches[0].pageY)}
            onTouchEnd={onTouchScreenEnd}
            onAnimationStart={stopMove}
        >
            {data.list.map((list, index) => (
                <AboutUs 
                    key={`about-us-${index}`}
                    scrollPage={scrollPage}
                    index={index}
                    ref={element => (scrollPageRef.current[index] = element)} 
                >   
                    {list.title !== '' &&
                        <Title>{list.title}</Title>
                    }
                    {list['text-bold'].map((text,index) => (
                        <TextBoldWrapper key={`text-bold-wrapper-${index}`} index={index}>
                            {changeTextColor(text)}
                        </TextBoldWrapper>
                    ))}
                    <ImageWrapper>
                        <Image src={require(`assets/imgs/company/about/${list.image}`)} />
                    </ImageWrapper>
                    {data.list.length !== index + 1 &&
                        <MouseIconWrapper>
                            <BsMouse size={24}/>
                        </MouseIconWrapper>
                    }
                </AboutUs>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    margin-bottom: 32px;
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

    &{
        ${({scrollPage,index}) => scrollPage === index ? css`
            display: !none;
            animation: changeAbout 1s ease forwards;
        `: css`
            display: none;
        `}
    }
`;
const TextBoldWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: ${({index}) => index === 0 ? '40px 0 16px 0' : '0 0 24px 0'};
    max-width: 750px;
`;
const TextBold = styled.div`
    ${({theme}) => theme.fontCommon.subtitle}
    text-align: center;
    word-break: keep-all;
    color: ${({color}) => color};
    font-size: 1.6rem;
`;
const Span = styled.span`
    color: ${({color}) => color};
`
const ImageWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
`;
const Image = styled.img`
    width: 100%;

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
    margin-bottom: -8px;
`;


export default AboutPointi;