import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "containers/pagenation/Pagination";

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const Title = styled.div`
    font-size: 32px;
    margin-bottom: 24px;
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
    width: 15%;
    font-size: 1.1rem;
`;
const ListTitleWrapper = styled.div`
    width: 80%;
    font-size: 1.1rem;
    margin-left: 32px;
    &:hover {
        cursor: pointer;
    }
`;
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const Img = styled.img`
`;


const CarreerEmploymentBoard = ( {list} ) => {
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [ isClick, setIsClcik ] = useState();
    
    const IsClickHandlle = (e) => {   
        e.target.id === isClick ? setIsClcik() : setIsClcik(e.target.id);
    }
    
    return (
        <Wrapper>
            <Title>채용 공고</Title>
            <ListWrapper>
                <TextWrapper none={true} position={'top'} weight={`bolder`}>
                    <DateWrapper>날자</DateWrapper>
                    <ListTitleWrapper>제목</ListTitleWrapper>
                </TextWrapper>
            </ListWrapper>
            {list.slice(offset, offset + limit).map(({date, title, image}, index) => (
                <ListWrapper key={`list${index}`} >
                    <TextWrapper>
                        <DateWrapper>{date}</DateWrapper>
                        <ListTitleWrapper id={offset + index} onClick={(e) => IsClickHandlle(e)}>{title}</ListTitleWrapper>
                    </TextWrapper>
                    {
                        isClick == (index + offset) && (
                            <ImgWrapper>
                                <Img src={`imgs/carreer/${image}`} />
                            </ImgWrapper>
                        )
                    }
                </ListWrapper>
            ))}
            <Pagination
                total={list.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </Wrapper>
    );
}


export default CarreerEmploymentBoard;