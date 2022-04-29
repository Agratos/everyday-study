import React from 'react';
import styled from 'styled-components';

import CareerContentList from './CareerContentList';
import CareerEmployment from './CareerEmployment';
import dummyCarrerr from 'assets/dummy/carreer.json';
import CareerEmploymentBoard from './CareerEmploymentBoard';

const Wrapper = styled.div`
    //border: 1px solid black;
    margin: 10vh 5vw;
`;
const MainTitle = styled.div`
    //border: 1px solid black;
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
    margin: 10vh 0;
`;
const ContentWrapper = styled.div`
    //border: 1px solid black;
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    border-top: 1px dotted #eee;
`;
const ContentImge = styled.img`
    //border: 1px solid black;
    width: 40%;
    margin: 0 16px;
`;

const Career = () => {
    return(
        <Wrapper id='talent'>
            <MainTitle>{dummyCarrerr.title}</MainTitle>
            <ContentWrapper>
                <ContentImge src={require(`assets/imgs/carreer/${dummyCarrerr.philosophy.image}`)} />
                <CareerContentList list={dummyCarrerr.philosophy} />
            </ContentWrapper>
            <ContentWrapper>
                <CareerContentList list={dummyCarrerr.talent} margin={'60px'} />
                <ContentImge src={require(`assets/imgs/carreer/${dummyCarrerr.talent.image}`)} />
            </ContentWrapper>
            <ContentWrapper>
                <CareerEmployment list={dummyCarrerr.employment} />
            </ContentWrapper>
            <CareerEmploymentBoard list={dummyCarrerr.announcement} />
        </Wrapper>
    )
}

export default Career;