import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import dummySolution from 'assets/dummy/solution.json';
import Detail from 'components/detail/Detail';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10vh ;
`;
const SolutionListWrapper = styled.div`
    padding: 0 4vw;
`;

const Solution = ({id}) => {
    const [isClick, setIsClick] = useState('wildAnimalDetection');  
    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])

    return (
        <Wrapper>
            <MenuKategorie kategorie={dummySolution.kategorie} width={'80vw'} setIsClick={setIsClick} isClick={isClick}/>
            <SolutionListWrapper >
                <Detail data={dummySolution[isClick]} type='solution' />
            </SolutionListWrapper>           
        </Wrapper>
    )
}

export default Solution;