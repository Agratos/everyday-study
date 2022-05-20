import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
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
    ${({theme}) => theme.divCommon.fixedLeftTop}
    top: 137px;
    height: 100%;
    width: 15%;
`;
const ListWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexAround}
    padding: 4px;
`;
const HistoryWrapper = styled.div`
    margin-bottom: 32px;
    ${({device}) => device === 'Mobile' && css`
        width: 100%;
        padding: 0 16px;
    `}
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
    height: fit-content;
`;
const Left = styled.div`
    width: 45%;
`;
const Right = styled(Left)``;

const History = ({data, kategorie, setSubtitleKategorie, device}) => {
    const [isClick, setIsClick] = useState('All');  
    const [selected, setSelected] = useState(data);

    useEffect(() => {
        setSelected(SeparationOfSelect(data,isClick)); 
    },[isClick])
    return (
        <Wrapper id={`history`}>
            <Title>회사 연혁</Title>
                { device !== 'Mobile' && 
                    <MenuKategorieWrapper>
                        <MenuKategorieLeft 
                            isClick={isClick} 
                            setIsClick={setIsClick} 
                            kategorie={kategorie} 
                            setSubtitleKategorie={setSubtitleKategorie}
                            subtitle={true} 
                            isWrap={'nowrap'} />
                    </MenuKategorieWrapper>
                }
            <ListWrapper>
                <Left id='left'>
                    {selected.map(({date, list}, index) => (
                        index % 2 === 0 && 
                        <HistoryWrapper key={`history${index}`} device={device}>
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
                    ))}
                </Left>
                <Right id='right'>
                    {selected.map(({date, list}, index) => (
                        index % 2 === 1 && 
                        <HistoryWrapper key={`history${index}`} device={device}>
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
                    ))}
                </Right>
            </ListWrapper>
        </Wrapper>
    )
}

export default History;

{/* <HistoryWrapper key={`history${index}`} device={device}>
    <HistroyYear>{date}년</HistroyYear>
    <HistroyListWrapper>
        {list.map((list, index) => (
            <HistoryList key={`historylist${index}`}>
                <IconWRapper><BsRecordCircleFill color={'red'} size={'0.6rem'}/></IconWRapper>
                {list}
            </HistoryList>
        ))}
    </HistroyListWrapper>
</HistoryWrapper> */}