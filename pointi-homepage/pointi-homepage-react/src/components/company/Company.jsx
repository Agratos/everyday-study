import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

//import companyData from 'assets/dummy/company.json';
import MenuKategorie from 'components/menukategorie/MenuKategorie';
import Greeting from './Greeting';
import Organization from './Organization';
import PatentBoard from './PatentBoard';
import Relative from './Relative';
import History from './History';
import Location from './Location';

import MenuKategorieTable from 'components/menukategorie/MenuKategorieTable';
import MenuKategorieLeft from 'components/menukategorie/MenuKategorieLeft';


const Wrapper = styled.div`
    margin: 16px auto;
`;
const RenderWapper = styled.div``;
const PathWrapper = styled.div`
    margin-bottom: 16px;
`;
const MenuKategorieLeftWrapper = styled.div`
    ${({theme}) => theme.divCommon.fixedLeftTop}
    height: 100%;
    margin-left: 32px;
`;

const Company = () => {
    let { click } = useParams();
    const companyData = useSelector(state => state.setDataReducer.introduce);
    const [isClick, setIsClick] = useState(window.location.pathname.split('/')[2]);
    const [subjectKategorie , setSubjectKategorie] = useState(companyData.kategorie[0].title);
    const [subtitleKategorie, setSubtitleKategorie] = useState('All');
    const device = useSelector(state => state.setDeviceReducer.device);

    useEffect(() => {
        click !== undefined && setIsClick(click)
    },[click])
    useEffect(() => {
        if(window.location.pathname.split('/')[2] !== isClick) {
            window.history.pushState('','company click시 url 변경',`/company/${isClick}`);
        }
    },[isClick])

    const renderSwicht = () => {
        switch(isClick) {
            case 'history' :
                return <History 
                            data={companyData.history.data} 
                            kategorie={companyData.history.kategorie}
                            setSubtitleKategorie={setSubtitleKategorie}
                            device={device}
                        />;
            case 'organization' :
                return <Organization data={companyData.organization} device={device} />;
            case 'patent' :
                return <PatentBoard data={companyData.patent} device={device} />;
            case 'relative' :
                return <Relative data={companyData.relative} device={device} />;
            case 'location' :
                return <Location data={companyData.location} device={device} />;
            default :
                return <Greeting data={companyData.ceo} device={device} />;
        }
    }

    return (
        <Wrapper id={`company`}>
            <PathWrapper>
                {`Home > Company > ${subjectKategorie} ${isClick === 'history' ?  `> ${subtitleKategorie}`: ''}`}
            </PathWrapper>
            { device !== 'Mobile' && (
                // <MenuKategorie 
                //     kategorie={companyData.kategorie} 
                //     justify={'flex-end'} 
                //     setIsClick={setIsClick} 
                //     isClick={isClick} 
                //     setSubjectKategorie={setSubjectKategorie}
                // />
                <MenuKategorieTable 
                    kategorie={companyData.kategorie} 
                    justify={'flex-end'} 
                    setIsClick={setIsClick} 
                    isClick={isClick} 
                    setSubjectKategorie={setSubjectKategorie}
                />
                // <MenuKategorieLeftWrapper>
                //     <MenuKategorieLeft 
                //         kategorie={companyData.kategorie} 
                //         justify={'flex-end'} 
                //         setIsClick={setIsClick} 
                //         isClick={isClick} 
                //         setSubjectKategorie={setSubjectKategorie}
                //     />
                // </MenuKategorieLeftWrapper>
            )}
            <RenderWapper>
                {renderSwicht()}
            </RenderWapper>
        </Wrapper>
    )
}

export default Company;