import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsRecordCircleFill } from 'react-icons/bs';

import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import SeparationOfSelect from 'containers/select/SeparationOfSelect';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30vh;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 32px;
    text-align: center;
    margin-bottom: 7vh;
`;
const MenuKategorieWrapper = styled.div`
    margin: 0 auto;
`;
const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: -5vh;
`;
const HistoryWrapper = styled.div`
    margin-top: 5vh;
    width: 30%;
    position: relative;
`;
const IconWRapper = styled.div`
    margin-right: 8px;
`;
const HistroyYear = styled.div`
    font-size: 32px;
`;
const HistroyListWrapper = styled.div`
`;
const HistoryList = styled.div`
    display: flex;
    font-size: 0.9rem;
`;

const History = ({data, kategorie}) => {
    const [isClick, setIsClick] = useState('All');  
    const [selected, setSelected] = useState(data);

    useEffect(() => {
        setSelected(SeparationOfSelect(data,isClick)); 
    },[isClick])

    return (
        <Wrapper id={`history`}>
            <Title>회사 연혁</Title>
            <MenuKategorieWrapper>
                <MenuKategorie isClick={isClick} setIsClick={setIsClick} kategorie={kategorie} width={'80vw'} isWrap={'nowrap'}/>
            </MenuKategorieWrapper>
            <ListWrapper>
                {
                    selected.map(({date, list}, index) => (
                        <HistoryWrapper key={`history${index}`}>
                            <HistroyYear>{date}년</HistroyYear>
                            <HistroyListWrapper>
                                {list.map((list, index) => (
                                    <HistoryList key={`historylist${index}`}>
                                        <IconWRapper><BsRecordCircleFill color={'red'} size={'0.6rem'}/></IconWRapper>
                                        {list}
                                    </HistoryList>
                                ))}
                            </HistroyListWrapper>
                        </HistoryWrapper>
                    ))
                }
            </ListWrapper>
        </Wrapper>
    )
}

export default History;
