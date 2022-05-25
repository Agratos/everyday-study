import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import solutrionData from 'assets/dummy/solutionTest.json';
import MenuKategorie from 'components/menukategorie/MenuKategorie';
import MenuKategorieTable from 'components/menukategorie/MenuKategorieTable';

import TestDetail from 'components/detail/TestDetail';

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    margin: 16px auto;
`;
const Location = styled.div``;
const SolutionListWrapper = styled.div`
    margin-top: 32px;
`;

const Test = () => {
    const device = useSelector(state => state.setDeviceReducer.device);
    const { id } = useParams();
    const { click } = useParams();
    const [isClick, setIsClick] = useState(click);

    useEffect(() => {
        setIsClick(click)
    },[id])
    const checkUndefined = () => {
        return (solutrionData[id][isClick] !== undefined ? solutrionData[id][isClick] : solutrionData[id][click])
    }

    return (
        <Wrapper>
            <Location>
                {`Home > Solution > ${id} > ${checkUndefined().title}`}
            </Location>
            { device !== 'Mobile' ? 
                <MenuKategorie 
                    kategorie={solutrionData[id].kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick}
                    title={solutrionData[id].title}
                    page={'solution'}
                /> :
                <MenuKategorieTable 
                    kategorie={solutrionData[id].kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick}
                    height={id === 'ict' ? '288px' : '160px'}
                />
            }
            
            <SolutionListWrapper >
                <TestDetail 
                    data={checkUndefined()} 
                    type='solution' 
                />
            </SolutionListWrapper>           
        </Wrapper>
    )
}

export default Test;