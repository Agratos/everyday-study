import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import solutrionData from 'assets/dummy/solutionTest.json';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import Detail from 'components/detail/Detail';

import MenuKategorieLeft from 'containers/menukategorie/MenuKategorieLeft';
import MenuKategorieTable from 'containers/menukategorie/MenuKategorieTable';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px auto;
`;
const Location = styled.div`
    width: 100%;
`;
const SolutionListWrapper = styled.div`
    display: flex;
    padding: 0 4vw;
    margin-top: 32px;
`;
const MenuKategorieLeftWrapper = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    margin-left: 32px;
`;

const Solution = () => {
    const solutrionData = useSelector(state => state.setDataReducer.solution);
    let { id } = useParams();
    let { click } = useParams();
    const [isClick, setIsClick] = useState(click);
    useEffect(() => {
        setIsClick(click)
    },[id])
    useEffect(() => {
        window.history.pushState('','solution click시 url 변경',`/solution/${id}/${isClick}`);
    })

    const checkUndefined = () => {
        return (solutrionData[id][isClick] !== undefined ? solutrionData[id][isClick] : solutrionData[id][click])
    }

    return (
        <Wrapper>
            <Location>
                {`Home > Solution > ${id} > ${checkUndefined().title}`}
            </Location>
            {/* <MenuKategorie kategorie={solutrionData[id].kategorie} setIsClick={setIsClick} isClick={isClick}/> */}
            <MenuKategorieLeftWrapper>
                <MenuKategorieLeft kategorie={solutrionData[id].kategorie} setIsClick={setIsClick} isClick={isClick}/>
            </MenuKategorieLeftWrapper>
            <SolutionListWrapper >
                {/* <MenuKategorieLeft kategorie={solutrionData[id].kategorie} setIsClick={setIsClick} isClick={isClick}/> */}
                <Detail 
                    data={checkUndefined()} 
                    type='solution' 
                />
            </SolutionListWrapper>           
        </Wrapper>
    )
}

export default Solution;