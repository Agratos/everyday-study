import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, dispatch, useDispatch } from 'react-redux';
import styled from 'styled-components';

//import recruitingData from 'assets/dummy/recruiting.json';
import MenuCategoryTable from 'components/menucategory/MenuCategoryTable';
import RecruitingContentList from './RecruitingContentList';
import RecruitingEmployment from './RecruitingEmployment';
import RecruitingTalentBenefit from './RecruitingTalentBenefit';
import RecruitingEmploymentBoard from './RecruitingEmploymentBoard';

const Recruiting = () => {
    const dispatch = useDispatch();
    const recruitingData = useSelector(state => state.setDataReducer.recruiting);
    const device = useSelector(state => state.setDeviceReducer.device);
    const { click } = useParams();
    const [isClick, setIsClick] = useState(click);

    useEffect(() => {
        if(window.location.pathname.split('/')[2] !== isClick) {
            window.history.pushState('','recruiting click시 url 변경',`/recruiting/${isClick}`);
            dispatch({
                type: 'SET_CHANGE',
                isChange: window.location.pathname,
            })
        } 
    },[isClick])
    useEffect(() => {
        if(window.location.pathname.split('/')[2] !== isClick){
            setIsClick(window.location.pathname.split('/')[2]);
        }
    },[click])
    
    const renderSwitch = () => {
        switch(isClick) {
            case 'recruiting' :
                return (
                    <RednderSwitchWrapper>
                        <RecruitingEmploymentBoard list={recruitingData[isClick].announcement} />
                    </RednderSwitchWrapper>
                );
            default :
                return (
                    <RednderSwitchWrapper>
                        <RecruitingTalentBenefit data={recruitingData[isClick]}></RecruitingTalentBenefit>
                    </RednderSwitchWrapper>
                )
        }
    }

    return(
        <Wrapper id='talent'> 
            <MenuCategoryTable 
                category={recruitingData.category} 
                justify={'flex-end'} 
                setIsClick={setIsClick} 
                isClick={isClick}
                page={'recruiting'}
            />
            {renderSwitch()}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
`;
const RednderSwitchWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    height: 90%;
`


export default Recruiting;