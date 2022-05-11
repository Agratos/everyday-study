import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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
    const careerData = useSelector(state => state.setDataReducer.career);
    let { id } = useParams();
    return(
        <Wrapper id='talent'>      
            { id === 'talent' ? (
                <div>
                    <Location>
                        {`Home > Recruiting > ${careerData.title}`}
                    </Location>
                    <MainTitle>{careerData.title}</MainTitle>
                    <ContentWrapper>
                        <ContentImge src={require(`assets/imgs/carreer/${careerData.philosophy.image}`)} />
                        <RecruitingContentList list={careerData.philosophy} />
                    </ContentWrapper>
                    <ContentWrapper>
                        <RecruitingContentList list={careerData.talent} margin={'60px'} />
                        <ContentImge src={require(`assets/imgs/carreer/${careerData.talent.image}`)} />
                    </ContentWrapper>
                </div>
            ) : (
                <div>
                    <Location>
                        {`Home > Recruiting > ${careerData.employment.title}`}
                    </Location>
                    <RecruitingEmployment list={careerData.employment} />
                    <RecruitingEmploymentBoard list={careerData.announcement} />
                </div>
            )}        
        </Wrapper>
    )
}

export default Recruiting;