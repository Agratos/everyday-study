import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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

const Company = () => {
    let { id } = useParams();
    const introduceData = useSelector(state => state.setDataReducer.introduce);
    const [isClick, setIsClick] = useState('greeting');
    const [subjectKategorie , setSubjectKategorie] = useState(companyData.kategorie[0].title);
    const [subtitleKategorie, setSubtitleKategorie] = useState('All')

    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])

    const renderSwicht = () => {
        window.history.pushState('','Company IsClick To Move',`/company/${isClick}`);
        switch(isClick) {
            case 'history' :
                return <History 
                            data={companyData.history.data} 
                            kategorie={companyData.history.kategorie}
                            setSubtitleKategorie={setSubtitleKategorie}
                        />;
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
            {`Home > Company > ${subjectKategorie} ${isClick === 'history' ?  `> ${subtitleKategorie}`: ''}`}
            <MenuKategorie 
                kategorie={companyData.kategorie} 
                justify={'flex-end'} 
                setIsClick={setIsClick} 
                isClick={isClick} 
                setSubjectKategorie={setSubjectKategorie}
            />
            <RenderWapper>
                {renderSwicht()}
            </RenderWapper>
        </Wrapper>
    )
}

export default Company;