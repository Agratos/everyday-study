import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//import solutrionData from 'assets/dummy/solutionTest.json';
import MenuCategorie from 'components/menucategorie/MenuCategorie';
import MenuCategorieLeft from 'components/menucategorie/MenuCategorieLeft';
import MenuCategorieTable from 'components/menucategorie/MenuCategorieTable';
import Detail from 'components/detail/Detail';

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    margin: 0 auto;
`;
const SolutionListWrapper = styled.div``;

const Solution = () => {
    const dispatch = useDispatch();
    const solutrionData = useSelector(state => state.setDataReducer.solution);
    const device = useSelector(state => state.setDeviceReducer.device);
    const { id, click } = useParams();
    const [isClick, setIsClick] = useState(click);

    useEffect(() => {
        if(window.location.pathname.split('/')[3] !== isClick) {
            window.history.pushState('','solution click시 url 변경',`/solution/${id}/${isClick}`);
            dispatch({
                type: 'SET_CHANGE',
                isChange: window.location.pathname,
            })
        } 
    },[isClick])

    const checkUndefined = () => {
        return (solutrionData[id][isClick] !== undefined ? solutrionData[id][isClick] : solutrionData[id][click])
    }

    return (
        <Wrapper>
            { device !== 'Mobile' ? 
                <MenuCategorie
                    kategorie={solutrionData[id].kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick}
                    title={solutrionData[id].title}
                    page={'solution'}
                /> :
                <MenuCategorieTable 
                    kategorie={solutrionData[id].kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick}
                    height={id === 'ict' ? '288px' : '160px'}
                />
            }
            <SolutionListWrapper >
                <Detail 
                    data={checkUndefined()} 
                    type='solution' 
                />
            </SolutionListWrapper>           
        </Wrapper>
    )
}

export default Solution;