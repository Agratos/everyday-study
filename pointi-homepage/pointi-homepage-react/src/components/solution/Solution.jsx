import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import solutrionData from 'assets/dummy/solutionTest.json';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import MenuKategorieLeft from 'containers/menukategorie/MenuKategorieLeft';
import MenuKategorieTable from 'containers/menukategorie/MenuKategorieTable';
import Detail from 'components/detail/Detail';

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
`

const Wrapper = styled.div`
    margin: 16px auto;
`;
const Location = styled.div``;
const SolutionListWrapper = styled.div`
    padding: 0 4vw;
    margin-top: 32px;
`;
const MenuKategorieLeftWrapper = styled(Flex)`
    ${({theme}) => theme.divCommon.fixedLeftTop}
    height: 100%;
    margin-left: 32px;
`;

const Solution = () => {
    const solutrionData = useSelector(state => state.setDataReducer.solution);
    const device = useSelector(state => state.setDeviceReducer.device);
    const { id } = useParams();
    const { click } = useParams();
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
            {/* <MenuKategorie 
                kategorie={solutrionData[id].kategorie} 
                setIsClick={setIsClick} 
                isClick={isClick}
            /> */}
            { device === 'PC' ? 
                <MenuKategorieLeftWrapper>
                    <MenuKategorieLeft 
                        kategorie={solutrionData[id].kategorie} 
                        setIsClick={setIsClick} 
                        isClick={isClick}
                    />
                </MenuKategorieLeftWrapper> :
                <MenuKategorieTable 
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