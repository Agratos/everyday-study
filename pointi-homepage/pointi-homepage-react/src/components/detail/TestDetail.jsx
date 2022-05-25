import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsFillStopFill, BsCheckLg } from 'react-icons/bs';
import { MdArrowRight, MdPlayArrow } from 'react-icons/md'

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
    overflow: hidden;
`

const Wrapper = styled.div`
    border: 1px solid black; //#E8E8E8;
    width: ${props => props.device !== 'Mobile' && '900px'};
    margin: 0 auto;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-bottom: 32px ;
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
    margin-top: ${({top}) => top || '32px'};
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
    background-color: #87cfeb24;
    opacity: 0;
    @keyframes rolling {
        0% {
            transform: translate3d(700px,0,0) rotate(0deg);
        }
        100% {
            opacity: 1;
            transform: translateZ(0) rotate(-720deg);
        }
    }
    animation: rolling 1s ease-out;
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
const Solution = styled(TextFont)``;
const FunctionWrapper = styled(TextFont)``;
const FunctionTitleWrapper = styled(Flex)``;
const FunctionIconWrapper = styled.div`
    margin: 0 8px 0 24px;
`;
const FunctionTitle = styled(TextFont)``;
const FunctionEx = styled.div`
    margin-left: 40px;
`;
const FunctionExSub = styled.div`
    margin-top: -8px;
    margin-left: 48px;
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



const TestDetail = ({data, type}) => {
    const device = useSelector(state => state.setDeviceReducer.device);
    const checkSubText = (str) => {
        return (str[0] === '(' && str[str.length-1] === ')')
    }

    console.log(data.solution);

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
                        <TextTitle>주요 기능</TextTitle>
                    </TitleWrapper>
                    { data.keyword !== undefined &&
                        <div>
                            <TitleWrapper>
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