import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import solutrionData from 'assets/dummy/solution.json';
import solutionTestData from 'assets/dummy/solutionTest.json';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import Detail from 'components/detail/Detail';



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
    padding: 0 4vw;
`;

const Solution = ({}) => {
    //const solutrionData = useSelector(state => state.setDataReducer.solution);
    let { id } = useParams();
    let { click } = useParams();
    const [isClick, setIsClick] = useState(click);
    
    useEffect(() => {
        setIsClick(click)
    },[id])

    const checkUndefined = () => {
        return (solutionTestData[id][isClick] !== undefined ? solutionTestData[id][isClick] : solutionTestData[id][click])
    }


    return (
        <Wrapper>
            <Location>
                {`Home > Solution > ${id} > ${checkUndefined().title}`}
            </Location>
            <MenuKategorie kategorie={solutionTestData[id].kategorie} setIsClick={setIsClick} isClick={isClick}/>
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