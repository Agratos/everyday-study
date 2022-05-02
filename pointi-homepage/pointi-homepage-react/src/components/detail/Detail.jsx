import React from 'react';
import styled from 'styled-components';
import { BsFillStopFill, BsCheckLg } from 'react-icons/bs';

const Wrapper = styled.div`
    border-top: 1px solid #E8E8E8;
`;
const Title = styled.div`
    font-size: 40px;
    text-align: center;
    margin: 48px 0;
`;
const DetailWrapper = styled.div`
    display: flex;
    line-height: 32px;
`;
const ImgWrapper = styled.div``;
const Img = styled.img``;
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
    font-size: 1.2rem;
`;
const TextTitle = styled(TextFont)`
    font-size: 1.5rem;
    margin: 1vh 0;
`;
const Solution = styled(TextFont)`
    margin: 0;
`;
const FunctionWrapper = styled(TextFont)`
    display: flex;
`;
const FunctionIconWrapper = styled.div`
    margin: 0 16px 0 32px;
`;
const FunctionTitle = styled(TextFont)``;
const FunctionEx = styled(TextFont)``;
const KeywordWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Keyword = styled(TextTitle)`
    margin: 0;
    margin-right: 24px;
`;
const LinkWrapper = styled.div`
    margin: 16px;
`;
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
                            <FunctionIconWrapper><BsCheckLg /></FunctionIconWrapper>
                            <FunctionTitle>{title}</FunctionTitle>
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
                                <FunctionWrapper key={`adaptation ${index}`}>
                                    <FunctionIconWrapper><BsCheckLg /></FunctionIconWrapper>
                                    <FunctionTitle>{adapt}</FunctionTitle>
                                </FunctionWrapper>
                            ))}
                        </div>
                    }
                </TextWrapper>
            </DetailWrapper>
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
        </Wrapper>
    )
}

export default Detail;