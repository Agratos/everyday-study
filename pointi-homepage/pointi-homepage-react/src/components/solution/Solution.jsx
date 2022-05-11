import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import Detail from 'components/detail/Detail';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px auto;
`;
const SolutionListWrapper = styled.div`
    padding: 0 4vw;
`;

const Solution = ({id}) => {
    const [isClick, setIsClick] = useState('wildAnimalDetection');
    const solutrionData = useSelector(state => state.setDataReducer.solution);
    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])

    return (
        <Wrapper>
            <MenuKategorie kategorie={solutrionData.kategorie} width={'80vw'} setIsClick={setIsClick} isClick={isClick}/>
            <SolutionListWrapper >
                <Detail data={solutrionData[isClick]} type='solution' />
            </SolutionListWrapper>           
        </Wrapper>
    )
}

export default Solution;