import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

//import companyData from 'assets/dummy/company.json';
import Greeting from './Greeting';
import Organization from './Organization';
import PatentBoard from './PatentBoard';
import Relative from './Relative';
import Location from './Location';
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
            case 'organization' :
                return <Organization data={companyData.organization} device={device} />;
            case 'patent' :
                return <PatentBoard data={companyData.patent} device={device} />;
            case 'relative' :
                return <Relative data={companyData.relative} device={device} />;
            case 'location' :
                return <Location data={companyData.location} device={device} />;
            default :
                return <Greeting data={companyData.greeting} device={device} />;
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