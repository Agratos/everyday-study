import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, dispatch, useDispatch } from 'react-redux';
import styled from 'styled-components';

//import recruitingData from 'assets/dummy/recruiting.json';
import MenuCategoryTable from 'components/menucategory/MenuCategoryTable';
import RecruitingContentList from './RecruitingContentList';
import RecruitingEmployment from './RecruitingEmployment';
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
            case 'philosophy-talent' :
                return (
                    <RednderSwitchWrapper>
                        <MainTitle>{recruitingData[isClick].title}</MainTitle>
                        <ContentWrapper device={device}>
                            <ContentImge 
                                src={require(`assets/imgs/carreer/${recruitingData[isClick].philosophy.image}`)} 
                                device={device}
                            />
                            <RecruitingContentList 
                                list={recruitingData[isClick].philosophy}
                                margin={device !== 'Mobile' && '24px'}
                            />
                        </ContentWrapper>
                        <ContentWrapper device={device}>
                            <RecruitingContentList 
                                list={recruitingData[isClick].talent} 
                                //margin={device === 'PC' && '60px'}
                            />
                            <ContentImge 
                                src={require(`assets/imgs/carreer/${recruitingData[isClick].talent.image}`)} 
                                device={device}
                            />
                        </ContentWrapper> 
                    </RednderSwitchWrapper>
                )
                default :
                    return (
                        <RednderSwitchWrapper>
                            <RecruitingEmployment list={recruitingData[isClick].employment} />
                            <RecruitingEmploymentBoard list={recruitingData[isClick].announcement} />
                        </RednderSwitchWrapper>
                    );
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
`;
const RednderSwitchWrapper = styled.div``
const MainTitle = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-top: 16px;
`;
const ContentWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexAround}
    ${({device, theme}) => device === 'Mobile' && theme.divCommon.flexColumnCenter}
    width: 90%;
    margin: 0 auto;
    padding: 32px 0;
    border-top: 1px dotted #eee;
`;
const ContentImge = styled.img`
    width: ${({device}) => device === 'Mobile' ? '100%' : '50%'};
`;

export default Recruiting;