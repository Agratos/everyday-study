import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import useSeparationOfSelect from 'containers/select/useSeparationOfSelect';
import dummySolution from 'assets/dummy/solution.json';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 10vh ;;
`;

const SolutionSubject = () => {
    const [isClick, setIsClick] = useState('All');
    const test = useSeparationOfSelect(dummySolution.list, isClick);
    useEffect(() => {    
    },[isClick])

    console.log(test);
    
    return (
        <Wrapper>
            <MenuKategorie kategorie={dummySolution.kategorie} width={'58vw'} setIsClick={setIsClick} isClick={isClick}/>
        </Wrapper>
    )
}

export default SolutionSubject;