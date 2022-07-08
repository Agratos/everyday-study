import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import ReactPlayer from 'react-player';
import { VscCircleFilled } from "react-icons/vsc";

const Detail = ({data, type}) => {
    const device = useSelector(state => state.setDeviceReducer.device); 
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ windowHeight, setWindowHeightt ] = useState(window.innerHeight);
    const [ playerHeight, setPlayerHeight ] = useState(10000);
    const [ start, setStart] = useState(false);
    const [ imgWidth, setImgWidth ] = useState(0);
    const playerRef = useRef();
    const imgRef = useRef();
    const wrapperRef = useRef();

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
        return (str[0] === '(' && str[str.length-1] === ')') || (str[0] === '*')
    }
    const checkNaturalWidth = (id) => {
        setImgWidth(document.getElementById(id).naturalWidth);
    }

    return (
        <Wrapper device={device} id={'detail'} ref={wrapperRef}>    
            <DetailWrapper>
                <Title>{data.title}</Title>
                { type === 'solution' && (
                    <SolutionWrapper imgWidth={imgWidth} device={device}>
                        <Img id={'solution-img'} src={require(`assets/imgs/${type}/${device === 'Mobile' ? 'Mobile_' + data.image : data.image}`)} device={device} type={type} ref={imgRef} 
                            onLoad={(e) => checkNaturalWidth(e.target.id)} imgWidth={imgWidth}
                        />
                        <SolutionTextWrapper imgWidth={imgWidth} device={device}>
                            {data[type].map((solution, index) => (
                                <Solution key={`solution${index}`} index={index} imgWidth={imgWidth} device={device}>
                                    <SolutionIconWrapper><VscCircleFilled /></SolutionIconWrapper>
                                    {solution}
                                </Solution>
                            ))}
                        </SolutionTextWrapper>
                    </SolutionWrapper>
                )}

                <TextWrapper>
                    { type === 'solution' &&
                        <TitleWrapper top={'4px'}>
                            <Title>주요 특징</Title>
                        </TitleWrapper>
                    }
                    <FunctionWrapperOut type={type}>
                        { type === 'technology' && (
                            <TechnologyWrapper>
                                <ImgWrapper>
                                    <Img src={require(`assets/imgs/${type}/${device === 'Mobile' ? 'Mobile_' + data.image : data.image}`)} device={device} type={type}/>
                                </ImgWrapper>
                            </TechnologyWrapper>
                        )}
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
                                <Title>관련 영상</Title>
                            </TitleWrapper>
                            <PlayerWrapperIn>
                                <Player 
                                    className='react-player'
                                    url={require(`assets/videos/${data.video}`)}
                                    playing={start}
                                    muted={true}
                                    controls={true}
                                    light={false}
                                />
                            </PlayerWrapperIn>
                        </PlayerWrapperOut>
                    }
                    { data.adaptation !== undefined &&
                        <TechnologyAdaptionWrapper>
                            <TitleWrapper>
                                <Title>적용 분야</Title>
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

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
`

const Wrapper = styled.div`
    width: ${props => props.device !== 'Mobile' && 'inherit'};
    margin-top: 16px;
`;
const SolutionWrapper = styled(Flex)`
    ${({theme, imgWidth, device}) => (imgWidth > 600 || device === 'Mobile') && theme.divCommon.flexColumnCenterCenter};
    ${({imgWidth, device}) => (imgWidth > 600 || device === 'Mobile') ? css`
    
    ` : css`
        //padding-left: 16px;
        //padding-bottom: 16px;
    `}
    //background-color: rgba(225, 222, 222, 0.2);
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding-top: 16px;
    margin-top: 8px;
    margin-bottom: 32px;
`;
const SolutionTextWrapper = styled.div`
    width: 100%;
    background-color: rgba(225, 222, 222, 0.2);
    ${({imgWidth, device}) => (imgWidth > 600 || device === 'Mobile') ? css`
        margin-top: 16px;
    ` : css`
        border-left: 1px solid #cac9c9b5;
        margin-top: -16px;
        //margin-left: 16px;
    `}
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.subtitle}
    text-align: left;
    word-break: keep-all;
    padding-left: 16px;
`;
const DetailWrapper = styled.div`
    line-height: 24px;
`;
const ImgWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter};
`;
const Img = styled.img`
    max-width: 900px;
    ${({imgWidth}) => imgWidth < 600 && css`
        padding-top: 8px;
        margin-top: -16px;
        max-width: 550px;
    ` };
    ${({device}) => device === 'Mobile' && css`
        max-width: calc(100% - 16px);
    `}
    ${({device}) => device === 'Tablet' && css`
        width: ${({imgWidth}) => imgWidth < 600 ? '50%' : '100%'};
    `}
`;
const TextWrapper = styled.div`
    margin-top: 8px; 
    margin-bottom: ${({bottom}) => bottom};
`;
const TitleWrapper = styled(Flex)`
    margin-top: ${({top}) => top || '16px'};
    padding-bottom: 8px;
    border-bottom: 2px solid black;
`;
const TextFont = styled.div`
    font-size: 1rem;
`;
const Solution = styled(TextFont)`
    ${({theme}) => theme.divCommon.flex}
    ${({imgWidth, index, device}) => (imgWidth > 600 || device === 'Mobile') && index === 0 ? css`
        border-top: 1px solid #cac9c9b5;
    ` : css`
        
    `}
    padding: 8px;
`;
const SolutionIconWrapper = styled.div`
    font-size: 0.6rem;
    margin-right: 4px;
`;
const FunctionWrapperOut = styled.div`
    margin-bottom: 32px;
    background-color: rgba(225, 222, 222, 0.2);
    border-bottom: 2px solid black;
    border-top: ${({type}) => type === 'technology' && '2px solid black'};
`;
const FunctionWrapperIn = styled(TextFont)`
    border-top: 1px solid #cac9c9b5;
    //border-bottom: ${({length, index}) => length !== index && '1px solid #cac9c9b5'};
    padding: 10px 0;
`;
const FunctionTitleWrapper = styled(Flex)``;
const FunctionIconWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter}
    font-size: 0.6rem;
    height: 24px;
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
    font-size: 0.85rem;
    color: #4d4a4af3;
    margin-top: -4px;
    margin-left: 48px;
`;
const AdaptionWrapper = styled(Flex)`
    background-color: ${({index}) => index%2 === 0 ? 'rgba(225, 222, 222, 0.2)' : 'rgba(225, 222, 222, 0.2)'}; // 번갈아 가면서 작동 
    border-bottom: ${({index, length}) => index === length ? '2px solid black' : '1px solid #cac9c9b5'};
    padding: 10px 0;
`;
const PlayerWrapperOut = styled.div`
    margin-bottom: 32px;
`;
const PlayerWrapperIn = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter}
    background-color: rgba(225, 222, 222, 0.2);
    border-bottom: 2px solid black;
`;
const Player = styled(ReactPlayer)`
    width: auto;
`;

const TechnologyWrapper = styled.div`
    padding: 8px 0;
    background-color: white;
`;
const TechnologyAdaptionWrapper = styled(TechnologyWrapper)`
    margin-bottom: 32px;
`;

export default Detail;