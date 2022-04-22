import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import SeparationOfSelect from 'containers/select/SeparationOfSelect.jsx';
import SolutionListCard from './SolutionListCard';
import dummySolution from 'assets/dummy/solution.json';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 10vh ;;
`;

const SolutionSubject = () => {
    const [isClick, setIsClick] = useState('All');
    const separationList = SeparationOfSelect(dummySolution.list, isClick);
    
    useEffect(() => {    
    },[isClick])

    
    return (
        <Wrapper>
            <MenuKategorie kategorie={dummySolution.kategorie} width={'58vw'} setIsClick={setIsClick} isClick={isClick}/>
            <SolutionListCard list={separationList} />
        </Wrapper>
    )
}

export default SolutionSubject;