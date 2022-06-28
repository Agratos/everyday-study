import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

//import companyData from 'assets/dummy/company.json';
import MenuCategorie from 'components/menucategorie/MenuCategorie';
import Greeting from './Greeting';
import Organization from './Organization';
import PatentBoard from './PatentBoard';
import Relative from './Relative';
import History from './History';
import Location from './Location';

import MenuCategorieTable from 'components/menucategorie/MenuCategorieTable';
import MenuCategorieLeft from 'components/menucategorie/MenuCategorieLeft';


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
    const companyData = useSelector(state => state.setDataReducer.introduce);
    const { click } = useParams();
    const [isClick, setIsClick] = useState(click);
    const [subjectKategorie , setSubjectKategorie] = useState(companyData.kategorie[0].title);
    const [subtitleKategorie, setSubtitleKategorie] = useState('All');
    const device = useSelector(state => state.setDeviceReducer.device);

    useEffect(() => {
        if(window.location.pathname.split('/')[2] !== isClick) {
            window.history.pushState('','company click시 url 변경',`/company/${isClick}`);
        }
    },[isClick])
    useEffect(() => {
        if(window.location.pathname.split('/')[2] !== isClick){
            setIsClick(window.location.pathname.split('/')[2]);
        }
    })

    const renderSwich = () => {
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
                <MenuCategorieTable 
                    kategorie={companyData.kategorie} 
                    justify={'flex-end'} 
                    setIsClick={setIsClick} 
                    isClick={isClick} 
                    setSubjectKategorie={setSubjectKategorie}
                />
                // <MenuCategorieLeftWrapper>
                //     <MenuCategorieLeft 
                //         kategorie={companyData.kategorie} 
                //         justify={'flex-end'} 
                //         setIsClick={setIsClick} 
                //         isClick={isClick} 
                //         setSubjectCategorie={setSubjectKategorie}
                //     />
                // </MenuCategorieLeftWrapper>
            )}
            <RenderWapper>
                {renderSwich()}
            </RenderWapper>
        </Wrapper>
    )
}

export default Company;