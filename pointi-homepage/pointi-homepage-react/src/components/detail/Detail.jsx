import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsFillStopFill, BsCheckLg } from 'react-icons/bs';
import { MdArrowRight, MdPlayArrow } from 'react-icons/md'

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
`

const Wrapper = styled.div`
    border: 1px solid black; //#E8E8E8;
    width: ${props => props.device !== 'Mobile' && '900px'};
    margin: 0 auto;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-top: 32px;
    //margin-bottom: 32px ;
`;
const DetailWrapper = styled.div`
    line-height: 32px;
    
`;
const ImgWrapper = styled.div`
    text-align: center;
`;
const Img = styled.img`
    width: 800px;
    max-width: ${({device}) => device === 'Mobile' ? '100%' : '900px'};
    margin-top: ${({type}) => type === 'technology' && '32px'};
`;
const TextWrapper = styled.div`
    padding: 16px;
    margin-bottom: ${({bottom}) => bottom};
`;
const TitleWrapper = styled(Flex)`
    margin-top: ${({top}) => top || '16px'};
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

const Detail = ({data, type}) => {
    const device = useSelector(state => state.setDeviceReducer.device);
    const checkSubText = (str) => {
        return (str[0] === '(' && str[str.length-1] === ')')
    }

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
                        {data[type].map((solution, index) => (
                            <Solution key={`solution${index}`}>{solution}</Solution>
                        ))}
                    </TextWrapper>
                )}

                <ImgWrapper>
                    <Img src={require(`assets/imgs/${type}/${data.image}`)} device={device} type={type}/>
                </ImgWrapper>

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
                        <IconWrapper><MdPlayArrow /></IconWrapper>
                        <TextTitle>주요 기능</TextTitle>
                    </TitleWrapper>
                    {data.function.map(({title, explan}, index) => (
                        <FunctionWrapper key={`function${index}`}>
                            <FunctionTitleWrapper>
                                <FunctionIconWrapper><BsCheckLg size={10}/></FunctionIconWrapper>
                                <FunctionTitle>{title}</FunctionTitle>
                            </FunctionTitleWrapper>
                            {explan.map((ex, index) => (
                                checkSubText(ex) ? <FunctionExSub key={`explan${index}`}>{ex}</FunctionExSub>
                                : <FunctionEx key={`explan${index}`}>-{ex}</FunctionEx>
                            ))}
                        </FunctionWrapper>
                    ))}
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
                    }
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

export default Detail;