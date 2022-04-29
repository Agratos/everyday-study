import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import dummyTechnology from 'assets/dummy/technology.json';
import Detail from 'components/detail/Detail';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10vh ;;
`;
const TechnologyListWrapper = styled.div`
    padding: 0 4vw;
`;

const Technology = ({id}) => {
    const [isClick, setIsClick] = useState('multiMediaProcess');  
    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])
    
    return (
        <Wrapper>
            <MenuKategorie kategorie={dummyTechnology.kategorie} width={'70vw'} setIsClick={setIsClick} isClick={isClick} />
            <TechnologyListWrapper >
                <Detail data={dummyTechnology[isClick]} type='technology' />
            </TechnologyListWrapper>
        </Wrapper>
    )
}

export default Technology;