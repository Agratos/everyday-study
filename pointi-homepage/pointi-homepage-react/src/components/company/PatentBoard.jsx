import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from 'containers/pagenation/Pagination';

const Wrapper = styled.div`
    margin-top: 30vh;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 24px;
    text-align: center;
`;
const ListWrapper = styled.div`
    font-weight: ${props => props.weight};
`;
const TextWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #E8E8E8;
    padding: 12px;
    &:hover {
        background-color: #cac5c5;
    }
    &{
        border-bottom: ${props => props.position === 'top' && '1px solid black'};
    }
    pointer-events: ${props => props.none && `none`};
`;
const DateWrapper = styled.div`
    width: 10%;
    font-size: 1.1rem;
    border-right: 1px solid black;
`;
const NumberWrapper =styled.div`
    width: 13%;
    font-size: 1.1rem;
    margin-left: 2vw;
`;
const ListTitleWrapper = styled.div`
    width: 75%;
    font-size: 1.1rem;
    margin-left: 32px;
`;

const PatentBoard = ({data}) => {
    const [ limit ] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    return (
        <Wrapper id='patent'>
            <Title>{data.title}</Title>
            <ListWrapper>
                <TextWrapper none={true} position={'top'} weight={`bolder`}>
                    <DateWrapper>등록일자</DateWrapper>
                    <NumberWrapper>특허번호</NumberWrapper>
                    <ListTitleWrapper>특허명</ListTitleWrapper>
                </TextWrapper>
            </ListWrapper>
            {data.list.slice(offset, offset + limit).map(({date, number, name}, index) => (
                <ListWrapper key={`list${index}`} >
                    <TextWrapper>
                        <DateWrapper>{date}</DateWrapper>
                        <NumberWrapper>{number}</NumberWrapper>
                        <ListTitleWrapper>{name}</ListTitleWrapper>
                    </TextWrapper>
                </ListWrapper>
            ))}
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