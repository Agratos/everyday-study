import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import AboutPointi from './AboutPointi';
import Patent from './Patent';
import Organization from './Organization';
import Relationships from './Relationships';
import ContactUs from './ContactUs';

import MenuCategoryTable from 'components/menucategory/MenuCategoryTable';

const Company = () => {
    const dispatch = useDispatch();
    const companyData = useSelector(state => state.setDataReducer.company);
    const { click } = useParams();
    const [isClick, setIsClick] = useState(click);
    const device = useSelector(state => state.setDeviceReducer.device);

    useEffect(() => {
        if(window.location.pathname.split('/')[2] !== isClick) {
            window.history.pushState('','company click시 url 변경',`/company/${isClick}`);
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

    const renderSwich = () => {
        switch(isClick) {
            case 'about' :
                return <AboutPointi data={companyData.about} device={device} />;
            case 'patent' :
                return <Patent data={companyData.patent} device={device} />;
            case 'organization' :
                return <Organization data={companyData.organization} device={device} />;
            case 'relationships' :
                return <Relationships data={companyData.relationships} device={device} />;
            default :
                return <ContactUs data={companyData.contact} device={device} />;
        }
    }

    return (
        <Wrapper>
            <MenuCategoryTable 
                category={companyData.category} 
                justify={'flex-end'} 
                setIsClick={setIsClick} 
                isClick={isClick} 
                page={'company'}
            />
            {renderSwich()}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    flex: 1;
`;

export default Company;