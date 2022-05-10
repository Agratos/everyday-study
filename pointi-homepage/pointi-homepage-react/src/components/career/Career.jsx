import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CareerContentList from './CareerContentList';
import CareerEmployment from './CareerEmployment';
import CareerEmploymentBoard from './CareerEmploymentBoard';

const Wrapper = styled.div`
    margin: 32px 5vw;
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

const Career = () => {
    const careerData = useSelector(state => state.setDataReducer.career);
    return(
        <Wrapper id='talent'>
            <MainTitle>{careerData.title}</MainTitle>
            <ContentWrapper>
                <ContentImge src={require(`assets/imgs/carreer/${careerData.philosophy.image}`)} />
                <CareerContentList list={careerData.philosophy} />
            </ContentWrapper>
            <ContentWrapper>
                <CareerContentList list={careerData.talent} margin={'60px'} />
                <ContentImge src={require(`assets/imgs/carreer/${careerData.talent.image}`)} />
            </ContentWrapper>
            <ContentWrapper>
                <CareerEmployment list={careerData.employment} />
            </ContentWrapper>
            <CareerEmploymentBoard list={careerData.announcement} />
        </Wrapper>
    )
}

export default Career;