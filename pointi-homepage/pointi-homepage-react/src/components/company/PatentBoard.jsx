import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from 'containers/pagenation/Pagination';

const PatentBoard = ({data, device}) => {
    const [ limit ] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    return (
        <Wrapper id='patent'>
            <Title>{data.title}</Title>
            <ListWrapper>
                { device !== 'Mobile' ? 
                    (<Tbody>
                        <TextWrapper none={true} weight={`bolder`}>
                                <DateWrapper>등록일자</DateWrapper>
                                <NumberWrapper>특허번호</NumberWrapper>
                                <ListTitleWrapper>특허명</ListTitleWrapper>
                        </TextWrapper>
                        {data.list.slice(offset, offset + limit).map(({date, number, name}, index) => (
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
                        {data.list.slice(offset, offset + limit).map(({date, number, name}, index) => (
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
                total={data.list.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-bottom: 24px;
`;
const ListWrapper = styled.table``;
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

export default PatentBoard;