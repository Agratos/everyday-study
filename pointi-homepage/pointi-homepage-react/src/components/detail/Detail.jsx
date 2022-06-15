import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import ReactPlayer from 'react-player';
import { BsFillStopFill, BsCheckLg } from 'react-icons/bs';
import { MdArrowRight, MdPlayArrow } from 'react-icons/md'
import { VscCircleFilled } from "react-icons/vsc";
import Technology from 'components/technology/Technology';

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
`

const Wrapper = styled.div`
    //border: 1px solid black; //#E8E8E8;
    width: ${props => props.device !== 'Mobile' && '900px'};
    margin: 0 auto;
`;
const SolutionWrapper = styled(Flex)`
    ${({theme, imgWidth}) => imgWidth > 400 && theme.divCommon.flexColumnCenterCenter};
    width: 100%;
    padding: 8px;
    background-color: #e1dede54;
`;
const SolutionTextWrapper = styled.div`
    width: 95%;
    ${({imgWidth}) => imgWidth > 400 ? css`
        margin-top: 8px;
    ` : css`
        margin-left: 16px;
    `}

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
    max-width: ${({type}) => type === 'solution' && '400px'};
    //max-width: 400px;;
`;
const Img = styled.img`
    //max-width: 880px;
    height: fit-content;
    //max-width: inherit;
    /* max-width: ${({device}) => device === 'Mobile' ? '100%' : 'inherit'}; */
    //margin-top: ${({type}) => type === 'technology' && '8px'};
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
    margin-bottom: 16px;
`;
const FunctionWrapperOut = styled.div`
    margin-bottom: 40px;
    background-color: #e1dede54;
    border-bottom: 2px solid black;
    border-top: ${({type}) => type === 'technology' && '2px solid black'};
`;
const FunctionWrapperIn = styled(TextFont)`
    border-bottom: ${({length, index}) => length !== index && '1px solid #cac9c9b5'};
    padding: 10px 0;
`;
const FunctionTitleWrapper = styled(Flex)``;
const FunctionIconWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter}
    font-size: 0.7rem;
    margin: 0 8px 0 12px;
`;
const FunctionTitle = styled(TextFont)`
    font-weight: bold;
    color: #4d4a4ae7;
`;
const FunctionEx = styled.div`
    margin-left: 32px;
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
const AdaptionWrapper = styled(Flex)`
    background-color: ${({index}) => index%2 === 0 ? '#cac9c946' : '#cac9c946'}; // 번갈아 가면서 작동 
    border-bottom: ${({index, length}) => index === length ? '2px solid black' : '1px solid #cac9c9b5'};
    padding: 8px;
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
const PlayerWrapperOut = styled.div`
    margin-bottom: 64px;
`;
const PlayerWrapperIn = styled.div`
    text-align: center;
    align-items: center;
    background-color: #e1dede54;
    border-bottom: 2px solid black;
    padding-left: 130px;
`;
const Player = styled(ReactPlayer)``;

const TechnologyWrapper = styled.div`
    margin-bottom: 30px;
`;
const TechnologyAdaptionWrapper = styled(TechnologyWrapper)``;

const Detail = ({data, type}) => {
    const device = useSelector(state => state.setDeviceReducer.device); 
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ windowHeight, setWindowHeightt ] = useState(window.innerHeight);
    const [ playerHeight, setPlayerHeight ] = useState(10000);
    const [ start, setStart] = useState(false);
    const [ imgWidth, setImgWidth ] = useState(400);
    const playerRef = useRef();
    const imgRef = useRef();

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
    const checkSubText = (str) => {
        return (str[0] === '(' && str[str.length-1] === ')')
    }

    //console.log(imgWidth);

    return (
        <Wrapper device={device} id={'detail'}>
            <Title>{data.title}</Title>
            <DetailWrapper>
                { type === 'solution' && (
                    <SolutionWrapper imgWidth={imgWidth}>
                        <Img src={require(`assets/imgs/${type}/${data.image}`)} device={device} type={type} ref={imgRef} 
                            onLoad={() => setImgWidth(imgRef.current.offsetWidth)}
                        />
                        <SolutionTextWrapper imgWidth={imgWidth}>
                            {data[type].map((solution, index) => (
                                <Solution key={`solution${index}`}>{solution}</Solution>
                            ))}
                        </SolutionTextWrapper>
                    </SolutionWrapper>
                )}
                { type === 'technology' && (
                    <TechnologyWrapper>
                        {/* <TitleWrapper top={'8px'}>
                            <IconWrapper><MdPlayArrow /></IconWrapper>
                            <TextTitle>기능</TextTitle>
                        </TitleWrapper>
                        {data[type].map((solution, index) => (
                            <Solution key={`technology${index}`}>{solution}</Solution>
                        ))} */}
                        <ImgWrapper>
                            <Img src={require(`assets/imgs/${type}/${data.image}`)} device={device} type={type}/>
                        </ImgWrapper>
                    </TechnologyWrapper>
                )}
                <TextWrapper>
                    { type === 'solution' &&
                        <TitleWrapper top={'4px'}>
                            <TextTitle>주요 특징</TextTitle>
                        </TitleWrapper>
                    }
                    <FunctionWrapperOut type={type}>                  
                        {data.function.map(({title, explan}, index) => (
                            <FunctionWrapperIn key={`function${index}`} index={index+1} length={data.function.length}>
                                <FunctionTitleWrapper>
                                    <FunctionIconWrapper><VscCircleFilled /></FunctionIconWrapper>
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
                        <TechnologyAdaptionWrapper>
                            <TitleWrapper>
                                <TextTitle>적용분야</TextTitle>
                            </TitleWrapper>
                                {data.adaptation.map((adapt, index) => (
                                    <AdaptionWrapper key={`adaptation ${index}`} index={index+1} length={data.adaptation.length}>
                                        <FunctionIconWrapper><VscCircleFilled /></FunctionIconWrapper>
                                        <FunctionTitle>{adapt}</FunctionTitle>
                                    </AdaptionWrapper>
                                ))}
                        </TechnologyAdaptionWrapper>
                    }
                </TextWrapper>
            </DetailWrapper>
        </Wrapper>
    )
}

export default Detail;