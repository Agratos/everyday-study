import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import ReactPlayer from 'react-player';

import { BsFillStopFill, BsCheckLg } from 'react-icons/bs';
import { MdArrowRight, MdPlayArrow } from 'react-icons/md'

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}

`

const Wrapper = styled.div`
    border: 1px solid black; //#E8E8E8;
    width: ${props => props.device !== 'Mobile' && '900px'};
    overflow: hidden;
    margin: 0 auto;
    //position: relative;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-top: 32px;
`;
const DetailWrapper = styled.div`
    line-height: 32px;
`;
const ImgWrapper = styled.div`
    text-align: center;
`;
const Img = styled.img`
    max-width: ${({device}) => device === 'Mobile' ? '100%' : '900px'};
    width: ${({width}) => width};
    height: ${({width}) => width};
`;
const TextWrapper = styled.div`
    padding: 16px;
    margin-bottom: ${({bottom}) => bottom};
`;
const TitleWrapper = styled(Flex)`
    margin-top: ${({top}) => top || '16px'};
`;
const TitleTextWrapperOut = styled(Flex)`
    margin: 24px 0 16px 0;
`;
const TitleTextWrapperIn = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    width: 160px;
    height: 160px;
    margin: auto;
    border-radius: 50%;
    background-color: #87cfeb30;
    opacity: 0;
    @keyframes rolling {
        0% {
            transform: translate3d(700px,0,0) rotate(0deg);
        }
        100% {
            opacity: 1;
            transform: translateZ(0) rotate(-720deg);
            border-top: none;     
            border-right: 2px solid #87cfeb85;
            border-bottom: 3px solid #87cfeb96;
            border-left: 2px solid #87cfeb85; 
        }
    }
    animation: rolling 1s ease-in;
    animation-delay: ${({wait}) => wait};
    animation-fill-mode: forwards;
`;
const TitleText = styled.div`
    margin: 0 auto;
    //font-size: 1rem;
`;
const IconWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnAround}
    margin-right: 8px;
`;
const TextFont = styled.div`
    font-size: 1.1rem;
`;
const TextTitle = styled(TextFont)`
    font-size: 1.4rem;
    margin: 8px 0;
`;
const FunctionWrapperOut = styled.div`
    overflow: hidden;
`;
const FunctionWrapperIn = styled.div`
    padding: 12px;
    border-radius: 32px;
    width: 550px;
    margin: 16px 80px;
    background-color: #a0a04a3a;
    text-align: center;
    opacity: 0;
    ${({start}) => start === 'true' && css`
        @keyframes moveRight {
            0%{
                transform: translate3d(-700px,0,0);
            }
            100%{
                transform: translateZ(0);
                opacity: 1;
            }
        }
        @keyframes moveLeft {
            0%{
                transform: translate3d(700px,0,0);
            }
            100%{
                transform: translateZ(0);
                opacity: 1;
            }
        }
        animation: moveRight 0.5s cubic-bezier(0.000, 0.975, 0.965, 1.000);
        ${({index}) => index % 2 === 1 && css`
            margin-left: 204px;
            animation: moveLeft 0.5s cubic-bezier(0.000, 0.975, 0.965, 1.000);
        `}
        animation-delay: ${({index}) => index / 2 +'s'}; 
    `}
    animation-fill-mode: forwards;
    /* @keyframes moveRight {
        0%{
            transform: translate3d(-700px,0,0);
        }
        100%{
            transform: translateZ(0);
            opacity: 1;
        }
    }
    @keyframes moveLeft {
        0%{
            transform: translate3d(700px,0,0);
        }
        100%{
            transform: translateZ(0);
            opacity: 1;
        }
    }
    animation: moveRight 0.6s linear;
    ${({index}) => index % 2 === 1 && css`
        margin-left: 204px;
        animation: moveLeft 0.6s linear;
    `}
    animation-delay: ${({index}) => index+'s'};
    animation-fill-mode: forwards; */
`;
const FunctionTitle = styled.div`
    font-size: 1.1rem;
    font-weight: bolder;
`; 
const KeywordWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexWrap}
`;
const Keyword = styled.div`
    font-size: 1.2rem;
    margin: 0;
    margin-right: 24px;
`;
const LinkWrapper = styled.div``;
const LinkButton = styled.div`
    &:hover {
        cursor: pointer;
        color: #5b2fd4;
    }
    word-break: break-all;
`;
const Player = styled(ReactPlayer)`
    margin: 16px auto;
`;

const TestDetail = ({data, type}) => {
    const device = useSelector(state => state.setDeviceReducer.device);
    // 마우스 스크롤 감지 useHook으로 빠질 예정
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ windowHeight, setWindowHeightt ] = useState(window.innerHeight);
    const [ mainFunctionHeight, setMainFunctionHeight ] = useState(10000);
    const [ playerHeight, setPlayerHeight ] = useState(10000);
    const [ start, setStart] = useState([false,false]);
    const mainFunctionRef = useRef();
    const playerRef = useRef();
    const checkSubText = (str) => {
        return (str[0] === '(' && str[str.length-1] === ')')
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true});
        setWindowHeightt(window.innerHeight);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    useEffect(() => {
        if(scrollPosition !== 0){
            const functionStart = windowHeight + scrollPosition > (mainFunctionHeight + 150);
            const playerStart = windowHeight + scrollPosition > (playerHeight + 450);
            setMainFunctionHeight(mainFunctionRef.current.offsetTop);
            setPlayerHeight(playerRef.current.offsetTop);
            setStart([
                (start[0] !== true ? functionStart : true),
                (start[1] !== true ? playerStart : true)
            ]);
        }
    },[scrollPosition])


    const handleScroll = (e) => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    // const test = () => {
    //     console.log(`test: `, wrapper.current.scrollHeight);
    //     console.log(`화면크기: `, window.innerHeight);
    //     console.log(`wrapper 크기: `,wrapper.current.clientHeight);
    //     console.log(`기능 절대 위치: `,mainFunctionRef.current.offsetTop);
    //     console.log(`기능 높이: `,mainFunctionRef.current.clientHeight );
    //     console.log(`기능 상대 top: `,mainFunctionRef.current.getBoundingClientRect().top);
    //     console.log(`기능 상대 bottom: `,mainFunctionRef.current.getBoundingClientRect().bottom);
    //     console.log(`----------`);
    // }
    // wrapper.current.clientHeight - mainFunctionRef.current.offsetTop <= scrollPosition
    // window.innerHeight + scrollPosition >= mainFunctionRef.current.getBoundingClientRect().top

    return (
        <Wrapper device={device}>
            <Title>{data.title}</Title>
            <DetailWrapper>
                { type === 'solution' && (
                    <TextWrapper bottom={'24px'}>
                        <TitleWrapper>
                            <IconWrapper><MdPlayArrow /></IconWrapper>
                            <TextTitle>솔루션</TextTitle>
                        </TitleWrapper>
                        <TitleTextWrapperOut>
                            {data.solution.map(({image, title}, index) => (
                                <TitleTextWrapperIn key={`title-text-wrapper-in${index}`} wait={`${Number(index) * 0.5 }s`}>
                                    <ImgWrapper>
                                        <Img src={require(`assets/imgs/test/${image}`)} width={'80px'}/>
                                    </ImgWrapper>
                                    <TitleText>{title}</TitleText>
                                </TitleTextWrapperIn>
                            ))}
                        </TitleTextWrapperOut>
                    </TextWrapper>
                )}

                <ImgWrapper>
                    <Img src={require(`assets/imgs/${type}/${data.image}`)} device={device}/>
                </ImgWrapper>
                <TextWrapper>
                    <TitleWrapper top={'4px'}>
                        <IconWrapper><MdPlayArrow /></IconWrapper>
                        <TextTitle >주요 기능</TextTitle>
                    </TitleWrapper>
                    <FunctionWrapperOut id={'test'} ref={mainFunctionRef}>
                        { data.function.map(({title, explan},index) => (
                            <FunctionWrapperIn key={`function-wrapper-in${index}`} index={index} start={start[0].toString()}>
                                <FunctionTitle>{title}</FunctionTitle>
                            </FunctionWrapperIn>
                        ))}
                    </FunctionWrapperOut>
                    <TitleWrapper top={'42px'} ref={playerRef}>
                        <IconWrapper><MdPlayArrow /></IconWrapper>
                        <TextTitle >영상소개 및 결과물</TextTitle>
                    </TitleWrapper>
                    <Player 
                        className='react-player'
                        url={require(`assets/imgs/test/Solution_AI_BigData_wildAnimalDetection.mp4`)}
                        playing={start[1]}
                        muted={true}
                        controls={true}
                        light={false}  
                    />
                    { data.keyword !== undefined &&
                        <div>
                            <TitleWrapper top={'64px'}>
                                <IconWrapper><MdPlayArrow /></IconWrapper>
                                <TextTitle>관련 키워드</TextTitle>
                            </TitleWrapper>
                            <KeywordWrapper> 
                                {data.keyword.map((keyword, index) => (
                                    <Keyword key={`datakeyword${index}`}>#{keyword}</Keyword>
                                ))}
                            </KeywordWrapper>
                        </div>
                    }
                    { data.link !== undefined && (
                        <div>
                            <TitleWrapper>
                                <IconWrapper><MdPlayArrow /></IconWrapper>
                                <TextTitle>관련링크</TextTitle>
                            </TitleWrapper>
                            {data.link.map((link,index) => (
                                <LinkWrapper key={`link ${index}`}>
                                    <LinkButton onClick={() => window.open(link)}>{link}</LinkButton>
                                </LinkWrapper>
                            ))}
                        </div>
                    )}
                </TextWrapper>
            </DetailWrapper>
        </Wrapper>
    )
}

export default TestDetail;