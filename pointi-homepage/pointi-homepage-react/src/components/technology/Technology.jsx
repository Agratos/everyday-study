import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import technologyData from 'assets/dummy/technology.json';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import MenuKategorieTable from 'containers/menukategorie/MenuKategorieTable';
import MenuKategorieLeft from 'containers/menukategorie/MenuKategorieLeft';
import Detail from 'components/detail/Detail';

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    margin: 16px auto;
`;
const Location = styled.div``;
const TechnologyListWrapper = styled.div`
    margin-top: 32px;
`;
const MenuKategorieLeftWrapper = styled.div`
    ${({theme}) => theme.divCommon.fixedLeftTop}
    top: 95px;
    //left: calc(5% - 0px);
    height: 100%;
    width: 15%;
`;


const Technology = () => {
    const technologyData = useSelector(state => state.setDataReducer.technology);
    const device = useSelector(state => state.setDeviceReducer.device);
    const [isClick, setIsClick] = useState('multi-media-process');
    let { id } = useParams();
    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])
    useEffect(() => {
        window.history.pushState('','technology click시 url 변경',`/technology/${isClick}`);
    },[isClick])

    return (
        <Wrapper>
            <Location>
                {`Home > Technology > ${technologyData[isClick].title}`}
            </Location>
            
            {/* { device === 'PC' ? 
                <MenuKategorieLeftWrapper >
                    <MenuKategorieLeft 
                        kategorie={technologyData.kategorie} 
                        setIsClick={setIsClick} 
                        isClick={isClick} 
                    />
                </MenuKategorieLeftWrapper> :   
                <MenuKategorieTable 
                    kategorie={technologyData.kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick}
                    device={device}
                />
            } */}
            <MenuKategorie 
                kategorie={technologyData.kategorie} 
                setIsClick={setIsClick} 
                isClick={isClick}
                title={technologyData.title}
                page={'technology'}
            />
            <TechnologyListWrapper >
                {/* <MenuKategorieLeft 
                    kategorie={technologyData.kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick} 
                /> */}
                <Detail 
                    data={technologyData[isClick]} 
                    type='technology' 
                />
            </TechnologyListWrapper>
        </Wrapper>
    )
}

export default Technology;