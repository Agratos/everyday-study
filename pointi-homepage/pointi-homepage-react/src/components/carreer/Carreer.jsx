import React from 'react';
import styled from 'styled-components';
import CarreerContentList from './CarreerContentList';
import CarreerEmployment from './CarreerEmployment';
import dummyCarrerr from 'assets/dummy/carreer.json';
import CarreerEmploymentBoard from './CarreerEmploymentBoard';

const Wrapper = styled.div`
    //border: 1px solid black;
    margin: 10vh 5vw;
`;
const TableWrapper = styled.div``;
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

const Carreer = () => {
    return(
        <Wrapper id='talent'>
            <MainTitle>{dummyCarrerr.title}</MainTitle>
            <ContentWrapper>
                <ContentImge src={require(`assets/imgs/carreer/${dummyCarrerr.philosophy.image}`)} />
                <CarreerContentList list={dummyCarrerr.philosophy} />
            </ContentWrapper>
            <ContentWrapper>
                <CarreerContentList list={dummyCarrerr.talent} margin={'60px'} />
                <ContentImge src={require(`assets/imgs/carreer/${dummyCarrerr.talent.image}`)} />
            </ContentWrapper>
            <ContentWrapper>
                <CarreerEmployment list={dummyCarrerr.employment} />
            </ContentWrapper>
            <CarreerEmploymentBoard list={dummyCarrerr.announcement} />
        </Wrapper>
    )
}

export default Carreer;