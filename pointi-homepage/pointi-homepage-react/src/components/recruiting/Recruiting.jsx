import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import recruitingData from 'assets/dummy/recruiting.json';
import MenuKategorieTable from 'containers/menukategorie/MenuKategorieTable';
import RecruitingContentList from './RecruitingContentList';
import RecruitingEmployment from './RecruitingEmployment';
import RecruitingEmploymentBoard from './RecruitingEmploymentBoard';

const Wrapper = styled.div`
    //margin: 32px 5vw;
    width: 100%;
`;
const Location = styled.div`
    margin: 16px auto;
`;
const MainTitle = styled.div`
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
`;
const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 32px 0;
    border-top: 1px dotted #eee;
`;
const ContentImge = styled.img`
    width: 40%;
    margin: 0 16px;
`;

const Recruiting = () => {
    let { id } = useParams();
    //const careerData = useSelector(state => state.setDataReducer.career);
    const [isClick, setIsClick] = useState('philosophy-talent');

    useEffect(() => {
        id !== undefined && setIsClick(id)
    },[id])

    const renderSwicht = () => {
        window.history.pushState('','Recruiting IsClick To Move',`/recruiting/${isClick}`);
        switch(isClick) {
            case 'philosophy-talent' :
                return (
                    <div>
                        <MainTitle>{recruitingData[isClick].title}</MainTitle>
                        <ContentWrapper>
                            <ContentImge src={require(`assets/imgs/carreer/${recruitingData[isClick].philosophy.image}`)} />
                            <RecruitingContentList list={recruitingData[isClick].philosophy} />
                        </ContentWrapper>
                        <ContentWrapper>
                            <RecruitingContentList list={recruitingData[isClick].talent} margin={'60px'} />
                            <ContentImge src={require(`assets/imgs/carreer/${recruitingData[isClick].talent.image}`)} />
                        </ContentWrapper>
                    </div>
                )
                default :
                    return (
                        <div>
                            <RecruitingEmployment list={recruitingData[isClick].employment} />
                            <RecruitingEmploymentBoard list={recruitingData[isClick].announcement} />
                        </div>
                    );
        }
    }


    return(
        <Wrapper id='talent'> 
            <Location>
                {`Home > Recruiting > ${recruitingData[isClick].title}`}
            </Location>
            <MenuKategorieTable 
                kategorie={recruitingData.kategorie} 
                justify={'flex-end'} 
                setIsClick={setIsClick} 
                isClick={isClick} 
            />
            {renderSwicht()}
        </Wrapper>
    )
}

export default Recruiting;