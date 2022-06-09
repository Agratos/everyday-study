import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import solutrionData from 'assets/dummy/solutionTest.json';
import MenuKategorie from 'components/menukategorie/MenuKategorie';
import MenuKategorieLeft from 'components/menukategorie/MenuKategorieLeft';
import MenuKategorieTable from 'components/menukategorie/MenuKategorieTable';
import Detail from 'components/detail/Detail';

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    margin: 16px auto;
`;
const Location = styled.div`
    margin-left: 32px;
`;
const SolutionListWrapper = styled.div`
    margin-top: 32px;
`;
const MenuKategorieLeftWrapper = styled.div`
    ${({theme}) => theme.divCommon.fixedLeftTop}
    /* top: 95px;
    height: 100%;
    margin-left: 28px;
    width: 16%; */
    top: 95px;
    //left: calc(5% - 0px);
    height: 100%;
    width: 15%;
`;

const Solution = () => {
    const solutrionData = useSelector(state => state.setDataReducer.solution);
    const device = useSelector(state => state.setDeviceReducer.device);
    const { id, click } = useParams();
    const [isClick, setIsClick] = useState(click);

    useEffect(() => {
        if(window.location.pathname.split('/')[3] !== isClick) {
            window.history.pushState('','solution click시 url 변경',`/solution/${id}/${isClick}`);
        } 
    },[isClick])

    const checkUndefined = () => {
        return (solutrionData[id][isClick] !== undefined ? solutrionData[id][isClick] : solutrionData[id][click])
    }

    return (
        <Wrapper>
            <Location>
                {`Home > Solution > ${id} > ${checkUndefined().title}`}
            </Location>
            { device !== 'Mobile' ? 
                // <MenuKategorieLeftWrapper>
                //     <MenuKategorieLeft 
                //         kategorie={solutrionData[id].kategorie} 
                //         setIsClick={setIsClick} 
                //         isClick={isClick}
                //     />
                // </MenuKategorieLeftWrapper> :
                // <div>
                //     <Location>
                //         {`Home > Solution > ${id} > ${checkUndefined().title}`}
                //     </Location>
                //     <MenuKategorie 
                //         kategorie={solutrionData[id].kategorie} 
                //         setIsClick={setIsClick} 
                //         isClick={isClick}
                //         title={solutrionData[id].title}
                //         page={'solution'}
                //     /> 
                // </div>:
                // <div>
                //     <Location>
                //         {`Home > Solution > ${id}`}
                //     </Location>
                //     <MenuKategorieTable 
                //         kategorie={solutrionData[id].kategorie} 
                //         setIsClick={setIsClick} 
                //         isClick={isClick}
                //         height={id === 'ict' ? '288px' : '160px'}
                //     />
                // </div>
                <MenuKategorie 
                    kategorie={solutrionData[id].kategorie} 
                    setIsClick={setIsClick} 
                    isClick={isClick}
                    title={solutrionData[id].title}
                    page={'solution'}
                /> :
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