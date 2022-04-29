import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
`;
const ListWrapper = styled.div`

`;
const HistoryWrapper = styled.div`

`;
const HistroyYear = styled.div`
    font-size: 32px;
`;
const HistroyListWrapper = styled.div`
    
`;
const HistoryList = styled.div`
    font-size: 16px;
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
            <MenuKategorie isClick={isClick} setIsClick={setIsClick} kategorie={kategorie} width={'80vw'}/>
            <ListWrapper>
                {
                    selected.map(({date, list}, index) => (
                        <HistoryWrapper key={`history${index}`}>
                            <HistroyYear>{date}년</HistroyYear>
                            <HistroyListWrapper>
                                {list.map((list, index) => (
                                    <HistoryList key={`historylist${index}`}>{list}</HistoryList>
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

