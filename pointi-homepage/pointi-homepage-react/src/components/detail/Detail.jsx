import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import ReactPlayer from 'react-player';
import { BsFillStopFill, BsCheckLg } from 'react-icons/bs';
import { MdArrowRight, MdPlayArrow } from 'react-icons/md'

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
`

const Wrapper = styled.div`
    //border: 1px solid black; //#E8E8E8;
    width: ${props => props.device !== 'Mobile' && '900px'};
    margin: 0 auto;
`;
const SolutionWrapper = styled(Flex)`
    padding: 8px;
    background-color: #cac9c988;
`;
const SolutionTextWrapper = styled.div`
    padding: 0px 32px;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    text-align: left;
    margin-top: 32px;
    margin-bottom: 16px;
    //margin-bottom: 32px ;
`;
const DetailWrapper = styled.div`
    line-height: 24px;
`;
const ImgWrapper = styled(Flex)`
    max-width: 400px;
`;
const Img = styled.img`
    max-width: inherit;
    /* max-width: ${({device}) => device === 'Mobile' ? '100%' : 'inherit'}; */
    margin-top: ${({type}) => type === 'technology' && '32px'};
`;
const TextWrapper = styled.div`
    margin-top: 32px; 
    margin-bottom: ${({bottom}) => bottom};
`;
const TitleWrapper = styled(Flex)`
    margin-top: ${({top}) => top || '16px'};
    border-bottom: 2px solid black;
`;
const IconWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnAround}
    margin-right: 8px;
`;
const TextFont = styled.div`
    font-size: 1rem;
`;
const TextTitle = styled(TextFont)`
    ${({theme}) => theme.fontCommon.title}
    margin: 8px 0;
`;
const Solution = styled(TextFont)`
    margin-bottom: 32px;
`;
const FunctionWrapperOut = styled.div`
    margin-bottom: 40px;
    background-color: #cac9c988;
    border-bottom: 2px solid black;
`;
const FunctionWrapperIn = styled(TextFont)`
    border-bottom: ${({length, index}) => length !== index && '1px solid black'};
    padding: 10px 8px;
`;
const FunctionTitleWrapper = styled(Flex)``;
const FunctionIconWrapper = styled.div`
    margin: 0 8px 0 24px;
`;
const FunctionTitle = styled(TextFont)`
    font-weight: bold;
    color: #4d4a4ae7;
`;
const FunctionEx = styled.div`
    margin-left: 40px;
    font-size: 0.9rem;
    color: #4d4a4af3;
`;
const FunctionExSub = styled.div`
    margin-top: -8px;
    margin-left: 48px;
`;
const KeywordWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexWrap}
`;
const AdaptionWrapper = styled(Flex)``;
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
const PlayerWrapperOut = styled.div`
    margin-bottom: 64px;
`;
const PlayerWrapperIn = styled.div`
    text-align: center;
    align-items: center;
    background-color: #cac9c988;
    border-bottom: 2px solid black;
    padding-left: 130px;
`;
const Player = styled(ReactPlayer)``;

const Detail = ({data, type}) => {
    const device = useSelector(state => state.setDeviceReducer.device);
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ windowHeight, setWindowHeightt ] = useState(window.innerHeight);
    const [ playerHeight, setPlayerHeight ] = useState(10000);
    const [ start, setStart] = useState(false);
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
        if(scrollPosition !== 0 && data.video !== undefined){
            const playerStart = windowHeight + scrollPosition > (playerHeight + 450);
            setPlayerHeight(playerRef.current.offsetTop);
            setStart(playerStart);
        }
    },[scrollPosition])

    const handleScroll = (e) => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    return (
        <Wrapper device={device}>
            <Title>{data.title}</Title>
            <DetailWrapper>
                { type === 'solution' && (
                    <SolutionWrapper>
                        <ImgWrapper>
                            <Img src={require(`assets/imgs/${type}/${data.image}`)} device={device} type={type}/>
                        </ImgWrapper>
                        <SolutionTextWrapper>
                            {data[type].map((solution, index) => (
                                <Solution key={`solution${index}`}>{solution}</Solution>
                            ))}
                        </SolutionTextWrapper>
                    </SolutionWrapper>
                )}

                <TextWrapper>
                    { type === 'technology' && (
                        <div>
                            <TitleWrapper top={'8px'}>
                                <IconWrapper><MdPlayArrow /></IconWrapper>
                                <TextTitle>기능</TextTitle>
                            </TitleWrapper>
                            {data[type].map((solution, index) => (
                                <Solution key={`technology${index}`}>{solution}</Solution>
                            ))}
                        </div>
                    )}
                    <TitleWrapper top={'4px'}>
                        <TextTitle>주요 특징</TextTitle>
                    </TitleWrapper>
                    <FunctionWrapperOut>
                        {data.function.map(({title, explan}, index) => (
                            <FunctionWrapperIn key={`function${index}`} index={index+1} length={data.function.length}>
                                <FunctionTitleWrapper>
                                    <FunctionIconWrapper>◉</FunctionIconWrapper>
                                    <FunctionTitle>{title}</FunctionTitle>
                                </FunctionTitleWrapper>
                                {explan.map((ex, index) => (
                                    checkSubText(ex) ? <FunctionExSub key={`explan${index}`}>{ex}</FunctionExSub>
                                    : <FunctionEx key={`explan${index}`}>- {ex}</FunctionEx>
                                ))}
                            </FunctionWrapperIn>
                        ))}
                    </FunctionWrapperOut>
                    {data.video !== undefined && data.video !== null &&
                        <PlayerWrapperOut>
                            <TitleWrapper top={'32px'} ref={playerRef}>
                                <TextTitle>관련 영상</TextTitle>
                            </TitleWrapper>
                            <PlayerWrapperIn>
                                <Player 
                                    className='react-player'
                                    url={require(`assets/videos/${data.video}`)}
                                    playing={start}
                                    muted={true}
                                    controls={true}
                                    light={false}
                                    //width='60%'
                                    //height='100%'
                                />
                            </PlayerWrapperIn>
                        </PlayerWrapperOut>
                    }
                    {/* { data.link !== undefined && (
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
                    { data.keyword !== undefined &&
                        <div>
                            <TitleWrapper top={'32px'}>
                                <IconWrapper><MdPlayArrow /></IconWrapper>
                                <TextTitle>관련 키워드</TextTitle>
                            </TitleWrapper>
                            <KeywordWrapper> 
                                {data.keyword.map((keyword, index) => (
                                    <Keyword key={`datakeyword${index}`}>#{keyword}</Keyword>
                                ))}
                            </KeywordWrapper>
                        </div>
                    } */}
                    { data.adaptation !== undefined &&
                        <div>
                            <TitleWrapper>
                                <IconWrapper><MdPlayArrow /></IconWrapper>
                                <TextTitle>적용분야</TextTitle>
                            </TitleWrapper>
                            {data.adaptation.map((adapt, index) => (
                                <AdaptionWrapper key={`adaptation ${index}`}>
                                    <FunctionIconWrapper><BsCheckLg size={10} /></FunctionIconWrapper>
                                    <FunctionTitle>{adapt}</FunctionTitle>
                                </AdaptionWrapper>
                            ))}
                        </div>
                    }
                </TextWrapper>
            </DetailWrapper>
        </Wrapper>
    )
}

export default Detail;