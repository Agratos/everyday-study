import { useState } from "react";
import styled from "styled-components";
import Pagination from "containers/pagenation/Pagination";

const RecruitingEmploymentBoard = ( {list} ) => {
    const [ limit ] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [ isClick, setIsClcik ] = useState();
    
    const IsClickHandlle = (e) => {   
        Number(e.target.id) === isClick ? (
            setIsClcik()
            ) : (
                setIsClcik(Number(e.target.id))
            )
        document.getElementById('board-top').scrollIntoView({behavior:'smooth'})
    }
    
    return (
        <Wrapper id='board-top'>
            <Title>채용 공고</Title>

            <Pagination
                total={list.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 80%;
    margin: 32px auto;
`;
const Title = styled.div`
    font-size: 2rem;
    margin-bottom: 24px;
`;
const ListWrapper = styled.div`
    font-weight: ${props => props.weight};
`;
const TextWrapper = styled.div`
    ${({theme}) => theme.divCommon.flex}
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
    width: 20%;
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
const ImgWrapper = styled.div``;
const Img = styled.img``;

export default RecruitingEmploymentBoard;