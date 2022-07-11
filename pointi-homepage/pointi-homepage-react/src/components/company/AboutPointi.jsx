import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from 'containers/pagenation/Pagination';

import useWindowScrollPosition from 'containers/scroll/useWindowScrollPosition';

const AboutPointi = ({data, device}) => {
    const [ limit ] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    const scrollY = useWindowScrollPosition();

    // 스크롤 한번 하면 자동으로 다음 Component까지 부드럽게 이동하는거 구현중

    return (
        <Wrapper id='patent'>
            <AboutUs id='about-us'>
                <Title>{data['about-us'].title}</Title>
                <TextBoldWrapper>
                    {data['about-us']['text-bold'].map((text, index) => (
                        <TextBold key={`textbold-${index}`}>{text}</TextBold>
                    ))}
                </TextBoldWrapper>
                <TextNomalWrapper>
                    {data['about-us']['text-nomal'].map((text, index) => (
                        <TextNomal key={`textnomal-${index}`}>{text}</TextNomal>
                    ))}
                </TextNomalWrapper>
                <MouseWhellImage></MouseWhellImage>
            </AboutUs>
            <Patent id='patent'>
                <Title>{data.patent.title}</Title>
                <ListWrapper>
                    { device !== 'Mobile' ? 
                        (<Tbody>
                            <TextWrapper none={true} weight={`bolder`}>
                                    <DateWrapper>등록일자</DateWrapper>
                                    <NumberWrapper>특허번호</NumberWrapper>
                                    <ListTitleWrapper>특허명</ListTitleWrapper>
                            </TextWrapper>
                            {data.patent.list.slice(offset, offset + limit).map(({date, number, name}, index) => (
                                <TextWrapper key={`patent-board${index}`}>
                                    <DateWrapper>{date}</DateWrapper>
                                    <NumberWrapper>{number}</NumberWrapper>
                                    <ListTitleWrapper>{name}</ListTitleWrapper>
                                </TextWrapper>
                            ))}
                        </Tbody>) : (
                        <Tbody>
                            <TextWrapper none={true} weight={`bolder`}>
                                    <MobilePatentWrapper>특허</MobilePatentWrapper>
                            </TextWrapper>
                            {data.patent.list.slice(offset, offset + limit).map(({date, number, name}, index) => (
                                <TextWrapper key={`patent-board${index}`}>
                                    <MobilePatentWrapper>
                                        <MobilePatentText>
                                            등록일자: {date}
                                        </MobilePatentText>
                                        <MobilePatentText>
                                            특허번호: {number}
                                        </MobilePatentText> 
                                        <MobilePatentText type={'특허명'}>
                                            <MobilePatentText width={'64px'}>
                                                특허명: 
                                            </MobilePatentText>
                                            <MobilePatentText width={'80%'}>
                                                {name}
                                            </MobilePatentText>
                                        </MobilePatentText>
                                    </MobilePatentWrapper>
                                </TextWrapper>
                            ))}
                        </Tbody>
                    )}
                </ListWrapper>
                <Pagination
                    total={data.patent.list.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </Patent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
`;
const AboutUs = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
`;
const TextBoldWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 40px 0 24px 0;
`;
const TextBold = styled.div`
    ${({theme}) => theme.fontCommon.subtitle}
    font-size: 1.6rem;
`;
const TextNomalWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 24px 0 40px 0;
`;
const TextNomal = styled.div`
    font-size: 1.5rem;
`;
const MouseWhellImage = styled.img``;
const Patent = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin-top: 40vh;
    margin-bottom: 150px;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;
const ListWrapper = styled.table`
    margin-top: 40px;
`;
const Tbody = styled.tbody``;
const TextWrapper = styled.tr`
    &:hover {
        background-color: #cac5c5;
    }
    pointer-events: ${props => props.none && `none`};
`;
const DateWrapper = styled.td`
    border: 1px solid black;
    width: 15%;
    font-size: 1.1rem;
    padding: 8px;
`;
const NumberWrapper =styled(DateWrapper)`
    margin-left: 32px;
`;
const ListTitleWrapper = styled(NumberWrapper)`
    width: 60%;
`;
const MobilePatentWrapper =styled(DateWrapper)`
    border-left: none;
`;
const MobilePatentText = styled.div`
    ${({type, theme}) => type === '특허명' && theme.divCommon.flex}
    width: ${({width}) => width};
`;

export default AboutPointi;