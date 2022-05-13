import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import technologyData from 'assets/dummy/technology.json';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import MenuKategorieLeft from 'containers/menukategorie/MenuKategorieLeft';
import Detail from 'components/detail/Detail';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px auto;
`;
const Location = styled.div`
    width: 100%;
    margin-bottom: 32px;
`;
const MenuKategorieLeftWrapper = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    margin-left: 32px;
`;
const TechnologyListWrapper = styled.div`
    width: 80%;
    padding: 0 4vw;
`;

const Technology = ({id}) => {
    //const technologyData = useSelector(state => state.setDataReducer.technology);
    const [isClick, setIsClick] = useState('multi-media-process');
    const [subjectKategorie , setSubjectKategorie] = useState(technologyData.kategorie[0].title);
    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])
    useEffect(() => {
        window.history.pushState('','technology click시 url 변경',`/technology/${isClick}`);
    })


    return (
        <Wrapper>
            <Location>{`Home > Technology > ${subjectKategorie}`}</Location>
            <MenuKategorieLeftWrapper id={'test'} >
                <MenuKategorieLeft 
                    kategorie={technologyData.kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick} 
                    setSubjectKategorie={setSubjectKategorie}
                    />
            </MenuKategorieLeftWrapper>
            {/* <MenuKategorie 
                kategorie={technologyData.kategorie} 
                setIsClick={setIsClick} 
                isClick={isClick} 
                setSubjectKategorie={setSubjectKategorie}
                /> */}
            <TechnologyListWrapper >
                <Detail data={technologyData[isClick]} type='technology' />
            </TechnologyListWrapper>
        </Wrapper>
    )
}

export default Technology;