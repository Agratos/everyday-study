import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import SolutionListCard from './SolutionListCard';
import dummySolution from 'assets/dummy/solution.json';
import SolutionDetail from './SolutionDetail';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10vh ;;
`;
const SolutionListWrapper = styled.div`
    padding: 0 4vw;
`;

const SolutionSubject = () => {
    const [isClick, setIsClick] = useState('야생동물 감지시스템');
    
    useEffect(() => {    
    },[isClick])

    
    return (
        <Wrapper>
            <MenuKategorie kategorie={dummySolution.kategorie} width={'58vw'} setIsClick={setIsClick} isClick={isClick}/>
            <SolutionListWrapper >
                <SolutionDetail data={dummySolution[isClick]} />
            </SolutionListWrapper>           
        </Wrapper>
    )
}

export default SolutionSubject;