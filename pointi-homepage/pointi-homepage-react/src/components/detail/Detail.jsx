import React from 'react';
import styled from 'styled-components';
import { BsFillStopFill, BsCheckLg } from 'react-icons/bs';

const Wrapper = styled.div`
    border: 1px solid black; //#E8E8E8;
    width: 100%;
    padding: 8px;
`;
const Title = styled.div`
    text-align: center;
    margin-bottom: 32px ;
    font-size: 40px;
`;
const DetailWrapper = styled.div`
    //display: flex;
    line-height: 32px;
`;
const ImgWrapper = styled.div``;
const Img = styled.img`
    width: 100%;
`;
const TextWrapper = styled.div`
    padding: 16px;
`;
const TitleWrapper = styled.div`
    display: flex;
`;
const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 8px;
`;
const TextFont = styled.div`
    font-size: 1.1rem;
`;
const TextTitle = styled(TextFont)`
    font-size: 1.4rem;
    margin: 1vh 0;
`;
const Solution = styled(TextFont)`
    margin: 0;
`;
const FunctionWrapper = styled(TextFont)`
    //display: flex;
`;
const FunctionTitleWrapper = styled(TitleWrapper)``;
const FunctionIconWrapper = styled.div`
    margin: 0 8px 0 24px;
`;
const FunctionTitle = styled(TextFont)``;
const FunctionEx = styled.div`
    margin-left: 40px;
`;
const KeywordWrapper = styled(TitleWrapper)`
    flex-wrap: wrap;
`;
const AdaptionWrapper = styled(TitleWrapper)``;
const Keyword = styled(TextTitle)`
    margin: 0;
    margin-right: 24px;
`;
const LinkWrapper = styled.div``;
const LinkButton = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const Detail = ({data, type}) => {
    return (
        <Wrapper>
            <Title>{data.title}</Title>
            <DetailWrapper>
                <ImgWrapper>
                    <Img src={require(`assets/imgs/${type}/${data.image}`)} />
                </ImgWrapper>
                <TextWrapper>
                    <TitleWrapper>
                        <IconWrapper><BsFillStopFill /></IconWrapper>
                        { type === 'solution' ? <TextTitle>솔루션</TextTitle> : <TextTitle>기능</TextTitle>}
                    </TitleWrapper>
                    {data[type].map((solution, index) => (
                        <Solution key={`${type}${index}`}>{solution}</Solution>
                    ))}
                    <TitleWrapper>
                        <IconWrapper><BsFillStopFill /></IconWrapper>
                        <TextTitle>주요 기능</TextTitle>
                    </TitleWrapper>
                    {data.function.map(({title, explan}, index) => (
                        <FunctionWrapper key={`function${index}`}>
                            <FunctionTitleWrapper>
                                <FunctionIconWrapper><BsCheckLg size={14}/></FunctionIconWrapper>
                                <FunctionTitle>{title}</FunctionTitle>
                            </FunctionTitleWrapper>
                            {explan && explan.map((ex, index) => (
                                <FunctionEx key={`explan${index}`}>-{ex}</FunctionEx>
                            ))}
                        </FunctionWrapper>
                    ))}
                    { data.keyword !== undefined &&
                        <div>
                            <TitleWrapper>
                                <IconWrapper><BsFillStopFill /></IconWrapper>
                                <TextTitle>관련 키워드</TextTitle>
                            </TitleWrapper>
                            <KeywordWrapper> 
                                {data.keyword.map((keyword, index) => (
                                    <Keyword key={`datakeyword ${index}`}>#{keyword}</Keyword>
                                ))}
                            </KeywordWrapper>
                        </div>
                    }
                    { data.adaptation !== undefined &&
                        <div>
                            <TitleWrapper>
                                <IconWrapper><BsFillStopFill /></IconWrapper>
                                <TextTitle>적용분야</TextTitle>
                            </TitleWrapper>
                            {data.adaptation.map((adapt, index) => (
                                <AdaptionWrapper key={`adaptation ${index}`}>
                                    <FunctionIconWrapper><BsCheckLg size={14} /></FunctionIconWrapper>
                                    <FunctionTitle>{adapt}</FunctionTitle>
                                </AdaptionWrapper>
                            ))}
                        </div>
                    }
                    { data.link !== undefined &&
                        data.link.map((link,index) => (
                            <LinkWrapper key={`link ${index}`}>
                                <TitleWrapper>
                                    <IconWrapper><BsFillStopFill /></IconWrapper>
                                    <TextTitle>관련링크</TextTitle>
                                </TitleWrapper>
                                <LinkButton onClick={() => window.open(link)}>{link}</LinkButton>
                            </LinkWrapper>
                        ))}
                </TextWrapper>
            </DetailWrapper>
        </Wrapper>
    )
}

export default Detail;