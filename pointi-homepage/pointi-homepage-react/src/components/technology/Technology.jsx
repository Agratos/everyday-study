import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//import technologyData from 'assets/dummy/technology.json';
import MenuKategorie from 'components/menukategorie/MenuKategorie';
import MenuKategorieTable from 'components/menukategorie/MenuKategorieTable';
import MenuKategorieLeft from 'components/menukategorie/MenuKategorieLeft';
import Detail from 'components/detail/Detail';

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
`;
const TechnologyListWrapper = styled.div``;


const Technology = () => {
    const dispatch = useDispatch();
    const technologyData = useSelector(state => state.setDataReducer.technology);
    const device = useSelector(state => state.setDeviceReducer.device);
    const isChange = useSelector(state => state.setChangeReducer.isChange);
    const { click } = useParams();
    const [isClick, setIsClick] = useState(click);

    useEffect(() => {
        const url = window.location.pathname.split('/');
        setIsClick(url[2])
    },[ isChange ])
    useEffect(() => {
        if(window.location.pathname.split('/')[2] !== isClick) {
            window.history.pushState('','technology click시 url 변경',`/technology/${isClick}`);
            dispatch({
                type: 'SET_CHANGE',
                isChange: window.location.pathname,
            })
        } 
    },[isClick])

    return (
        <Wrapper>
            { device !== 'Mobile' ? 
                <MenuKategorie
                    kategorie={technologyData.kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick}
                    title={technologyData.title}
                    page={'technology'}
                /> :  
                <MenuKategorieTable 
                    kategorie={technologyData.kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick}
                    device={device}
                />
            }

            <TechnologyListWrapper >
                <Detail 
                    data={technologyData[isClick]} 
                    type='technology' 
                />
            </TechnologyListWrapper>
        </Wrapper>
    )
}

export default Technology;