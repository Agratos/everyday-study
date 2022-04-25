import React from 'react';
import styled from 'styled-components';
import  * as img from 'assets/imgs/solution';
import { BsFillStopFill, BsCheckLg } from 'react-icons/bs';

const Wrapper = styled.div`
    border: 1px solid black;
`;
const Title = styled.div`
    //border: 1px solid black;
    font-size: 40px;
    text-align: center;
    margin: 48px 0;
`;
const SolutionWrapper = styled.div`
    display: flex;
    line-height: 32px;
`;
const ImgWrapper = styled.div`
    //border: 1px solid black;
    //width: auto;
`;
const Img = styled.img``;
const TextWrapper = styled.div`
    padding: 16px;
`;
const TitleWrapper = styled.div`
    display: flex;
    margin-top: 32px;
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

const SolutionDetail = ({data}) => {
    console.log(`img.${data.image}`)
    console.log(img.Test);
    console.log(img.Test2);

    return (
        <Wrapper>
            <Title>{data.title}</Title>
            <SolutionWrapper>
                <ImgWrapper>
                    <Img src={`imgs/${data.image}`} />
                </ImgWrapper>
                <TextWrapper>
                    <TitleWrapper>
                        <IconWrapper><BsFillStopFill /></IconWrapper>
                        <TextTitle>솔루션</TextTitle>
                    </TitleWrapper>
                    {data.solution.map((solution, index) => (
                        <Solution>{solution}</Solution>
                    ))}
                    <TitleWrapper>
                        <IconWrapper><BsFillStopFill /></IconWrapper>
                        <TextTitle>주요 기능</TextTitle>
                    </TitleWrapper>
                    {data.function.map((func) => (
                        <FunctionWrapper>
                            <FunctionIconWrapper><BsCheckLg /></FunctionIconWrapper>
                            <FunctionTitle>{func.title}</FunctionTitle>
                            {func.explan && func.explan.map((ex) => (
                                <FunctionEx>-{ex}</FunctionEx>
                            ))}
                        </FunctionWrapper>
                    ))}
                    <TitleWrapper>
                        <IconWrapper><BsFillStopFill /></IconWrapper>
                        <TextTitle>관련 키워드</TextTitle>
                    </TitleWrapper>
                    <KeywordWrapper> 
                        {data.keyword.map((keyword) => (
                            <Keyword>#{keyword}</Keyword>
                        ))}
                    </KeywordWrapper>
                </TextWrapper>
            </SolutionWrapper>
            {data.link.map((link) => (
                <LinkWrapper>
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

export default SolutionDetail;