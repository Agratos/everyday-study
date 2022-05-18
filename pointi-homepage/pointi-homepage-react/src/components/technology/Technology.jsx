import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import technologyData from 'assets/dummy/technology.json';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import MenuKategorieTable from 'containers/menukategorie/MenuKategorieTable';
import MenuKategorieLeft from 'containers/menukategorie/MenuKategorieLeft';
import Detail from 'components/detail/Detail';

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
`

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    margin: 16px auto;
`;
const Location = styled.div`
    width: 100%;
    margin-bottom: 32px;
`;
const MenuKategorieLeftWrapper = styled(Flex)`
    ${({theme}) => theme.divCommon.fixedLeftTop}
    height: 100%;
    margin-left: 32px;
`;
const TechnologyListWrapper = styled(Flex)`
    width: 80%;
    padding: 0 4vw;
`;

const Technology = () => {
    const technologyData = useSelector(state => state.setDataReducer.technology);
    let { id } = useParams();
    const [isClick, setIsClick] = useState('multi-media-process');
    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])
    useEffect(() => {
        window.history.pushState('','technology click시 url 변경',`/technology/${isClick}`);
    },[isClick])

    return (
        <Wrapper>
            <Location>{`Home > Technology > ${technologyData[isClick].title}`}</Location>
            {/* <MenuKategorieTable 
                kategorie={technologyData.kategorie} 
                setIsClick={setIsClick} 
                isClick={isClick} 
                /> */}
            <MenuKategorieLeftWrapper id={'test'} >
                <MenuKategorieLeft 
                    kategorie={technologyData.kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick} 
                    />
            </MenuKategorieLeftWrapper>
            <TechnologyListWrapper >
                {/* <MenuKategorieLeft 
                    kategorie={technologyData.kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick} 
                    /> */}
                <Detail data={technologyData[isClick]} type='technology' />
            </TechnologyListWrapper>
        </Wrapper>
    )
}

export default Technology;