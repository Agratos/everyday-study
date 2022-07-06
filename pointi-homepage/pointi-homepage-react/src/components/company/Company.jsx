import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

//import companyData from 'assets/dummy/company.json';
import Greeting from './Greeting';
import Organization from './Organization';
import PatentBoard from './PatentBoard';
import Relative from './Relative';
import History from './History';
import Location from './Location';
import MenuCategory from 'components/menucategory/MenuCategory';
import MenuCategoryTable from 'components/menucategory/MenuCategoryTable';
import MenuCategoryLeft from 'components/menucategory/MenuCategoryLeft';

const Company = () => {
    const dispatch = useDispatch();
    const companyData = useSelector(state => state.setDataReducer.introduce);
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
    })
    console.log(companyData);
    const renderSwich = () => {
        switch(isClick) {
            case 'history' :
                return <History 
                            data={companyData.history.data} 
                            category={companyData.history.category}
                            setSubtitleCategory={setSubtitleCategory}
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
            {/* <PathWrapper>
                {`Home > Company > ${subjectCategory} ${isClick === 'history' ?  `> ${subtitleCategory}`: ''}`}
            </PathWrapper> */}
            { device !== 'Mobile' && (
                // <MenuKategory 
                //     category={companyData.category} 
                //     justify={'flex-end'} 
                //     setIsClick={setIsClick} 
                //     isClick={isClick} 
                //     setSubjectCategory={setSubjectCategory}
                // />
                <MenuCategoryTable 
                    category={companyData.category} 
                    justify={'flex-end'} 
                    setIsClick={setIsClick} 
                    isClick={isClick} 
                    setSubjectCategory={setSubjectCategory}
                />
                // <MenuCategoryLeftWrapper>
                //     <MenuCategoryLeft 
                //         category={companyData.category} 
                //         justify={'flex-end'} 
                //         setIsClick={setIsClick} 
                //         isClick={isClick} 
                //         setSubjectCategorie={setSubjectCategory}
                //     />
                // </MenuCategoryLeftWrapper>
            )}
            <RenderWapper>
                {renderSwich()}
            </RenderWapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 16px auto;
`;
const RenderWapper = styled.div``;
const PathWrapper = styled.div`
    margin-bottom: 16px;
`;
const MenuCategoryLeftWrapper = styled.div`
    ${({theme}) => theme.divCommon.fixedLeftTop}
    height: 100%;
    margin-left: 32px;
`;

export default Company;