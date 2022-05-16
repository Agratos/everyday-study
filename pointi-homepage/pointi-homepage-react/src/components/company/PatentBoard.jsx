import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from 'containers/pagenation/Pagination';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 24px;
    text-align: center;
`;
const ListWrapper = styled.table`
    width: 100%;
    border-top: 1px solid black;
    border-collapse: collapse;
    font-weight: ${props => props.weight};
`;
const Tbody = styled.tbody``;
const TextWrapper = styled.tr`
    border: 1px solid black;
    &:hover {
        background-color: #cac5c5;
    }
    &{
        border-bottom: ${props => props.position === 'top' && '1px solid black'};
    }
    pointer-events: ${props => props.none && `none`};
`;
const DateWrapper = styled.td`
    border: 1px solid black;
    width: 15%;
    font-size: 1.1rem;
    padding: 8px;
`;
const NumberWrapper =styled.td`
    border: 1px solid black;
    width: 15%;
    font-size: 1.1rem;
    margin-left: 32px;
    padding: 8px;
`;
const ListTitleWrapper = styled.td`
    width: 60%;
    font-size: 1.1rem;
    margin-left: 32px;
    padding: 8px;
`;

const PatentBoard = ({data}) => {
    const [ limit ] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    return (
        <Wrapper id='patent'>
            <Title>{data.title}</Title>
            <ListWrapper>
                <Tbody>
                    <TextWrapper none={true} position={'top'} weight={`bolder`}>
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
                </Tbody>
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

export default PatentBoard;