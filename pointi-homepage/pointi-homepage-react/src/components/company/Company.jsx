import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

//import companyData from 'assets/dummy/company.json';
import AboutPointi from './AboutPointi';
import Organization from './Organization';
import Relationships from './Relationships';
import CeoMessage from './CeoMessage';
import ContactUs from './ContactUs';

import MenuCategory from 'components/menucategory/MenuCategory';
import MenuCategoryTable from 'components/menucategory/MenuCategoryTable';
import MenuCategoryLeft from 'components/menucategory/MenuCategoryLeft';

const Company = () => {
    const dispatch = useDispatch();
    const companyData = useSelector(state => state.setDataReducer.company);
    const { click } = useParams();
    const [isClick, setIsClick] = useState(click);
    const [subjectCategory , setSubjectCategory] = useState(companyData.category[0].title);
    const [subtitleCategory, setSubtitleCategory] = useState('All');
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
            case 'organization' :
                return <Organization data={companyData.organization} device={device} />;
            case 'relationships' :
                return <Relationships data={companyData.relationships} device={device} />;
            case 'ceo' :
                return <CeoMessage data={companyData.ceo} device={device} />;
            default :
                return <ContactUs data={companyData.contact} device={device} />;
        }
    }

    return (
        <Wrapper>
            { device !== 'Mobile' && (
                <MenuCategoryTable 
                    category={companyData.category} 
                    justify={'flex-end'} 
                    setIsClick={setIsClick} 
                    isClick={isClick} 
                    setSubjectCategory={setSubjectCategory}
                />
            )}
            {renderSwich()}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`;

export default Company;