import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import companyData from 'assets/dummy/company.json';
import MenuKategorie from 'containers/menukategorie/MenuKategorie';
import Greeting from './Greeting';
import Organization from './Organization';
import PatentBoard from './PatentBoard';
import Relative from './Relative';
import History from './History';
import Location from './Location';

const Wrapper = styled.div`
    margin: 16px auto;
`;
const RenderWapper = styled.div`
    display: flex;
`;

const Company = ({id}) => {
    const introduceData = useSelector(state => state.setDataReducer.introduce);
    const [isClick, setIsClick] = useState('greeting');

    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])

    const renderSwicht = () => {
        window.history.pushState('','Company IsClick To Move',`/company/${isClick}`);
        switch(isClick) {
            case 'history' :
                return <History data={companyData.history.data} kategorie={companyData.history.kategorie}/>;
            case 'organization' :
                return <Organization data={companyData.organization} />;
            case 'patent' :
                return <PatentBoard data={companyData.patent} />;
            case 'relative' :
                return <Relative data={companyData.relative} />;
            case 'location' :
                return <Location data={companyData.location} />;
            default :
                return <Greeting data={companyData.ceo} />;
        }
    }

    return (
        <Wrapper id={`company`}>
            {/* <LocationText>{`Home > Company > ${isClick}`}</LocationText> */}
            <MenuKategorie kategorie={companyData.kategorie} justify={'flex-end'} setIsClick={setIsClick} isClick={isClick} />
            <RenderWapper>
                {renderSwicht()}
            </RenderWapper>
        </Wrapper>
    )
}

export default Company;