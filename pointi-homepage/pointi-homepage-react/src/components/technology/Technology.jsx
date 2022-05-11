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
const MenuKategorieWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const TechnologyListWrapper = styled.div`
    padding: 0 4vw;
`;

const Technology = ({id}) => {
    const [isClick, setIsClick] = useState('multiMediaProcess');
    const technologyData = useSelector(state => state.setDataReducer.technology);
    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])
    
    return (
        <Wrapper>
            <MenuKategorie kategorie={technologyData.kategorie} width={'70vw'} setIsClick={setIsClick} isClick={isClick} />
            <TechnologyListWrapper >
                <Detail data={technologyData[isClick]} type='technology' />
            </TechnologyListWrapper>
        </Wrapper>
    )
}

export default Technology;