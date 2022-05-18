import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsRecordCircleFill } from 'react-icons/bs';

import MenuKategorieLeft from 'containers/menukategorie/MenuKategorieLeft';
import MenuKategorieTable from 'containers/menukategorie/MenuKategorieTable';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import SeparationOfSelect from 'containers/select/SeparationOfSelect';

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    margin: 0 auto;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-bottom: 24px;
`;
const MenuKategorieWrapper = styled.div`
    ${({theme}) => theme.divCommon.flex}
    ${({theme}) => theme.divCommon.fixedLeftTop}
    height: 100%;
    margin-left: 24px;
    width: 11%;
`;
const ListWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexWrapAround}
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
    font-size: 2rem;
`;
const HistroyListWrapper = styled.div``;
const HistoryList = styled.div`
    ${({theme}) => theme.divCommon.flex}
    font-size: 0.9rem;
`;

const History = ({data, kategorie, setSubtitleKategorie}) => {
    const [isClick, setIsClick] = useState('All');  
    const [selected, setSelected] = useState(data);

    useEffect(() => {
        setSelected(SeparationOfSelect(data,isClick)); 
    },[isClick])
    
    return (
        <Wrapper id={`history`}>
            <Title>회사 연혁</Title>
            <MenuKategorieWrapper>
                <MenuKategorieLeft 
                    isClick={isClick} 
                    setIsClick={setIsClick} 
                    kategorie={kategorie} 
                    setSubtitleKategorie={setSubtitleKategorie}
                    subtitle={true} 
                    isWrap={'nowrap'}
                    />
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

