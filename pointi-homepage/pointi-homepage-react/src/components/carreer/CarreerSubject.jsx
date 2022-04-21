import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CarreerContentList from './CarreerContentList';
import CarreerEmployment from './CarreerEmployment';
import dummyCarrerr from 'assets/dummy/carreer.json';
import rightPeople1 from 'assets/imgs/carreer/right_people1.png';
import rightPeople2 from 'assets/imgs/carreer/right_people2.png';
import useLinkToId from 'containers/hooks/useLinkToId';

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

const CarreerSubject = () => {
    useLinkToId();

    return(
        <Wrapper>
            <MainTitle>{dummyCarrerr.title}</MainTitle>
            <ContentWrapper id='talent' key='talent'>
                <ContentImge src={rightPeople1} />
                <CarreerContentList list={dummyCarrerr.philosophy} />
            </ContentWrapper>
            <ContentWrapper>
                <CarreerContentList list={dummyCarrerr.talent} margin={'60px'} />
                <ContentImge src={rightPeople2} />
            </ContentWrapper>
            <ContentWrapper>
                <CarreerEmployment list={dummyCarrerr.employment} />
            </ContentWrapper>
        </Wrapper>
    )
}

export default CarreerSubject;