import React from 'react';
import styled from 'styled-components';
import picWoman from 'assets/imgs/carreer/pic_woman.jpg';

const Wrapper = styled.div`
    width: 100%;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
    margin: 10vh 5vw 15vh 5vw;
`;
const EmploymentWrapper = styled.div`
    display: flex;
    margin-left:10vw;
`;
const EmploymentImg = styled.img`
    width: 30%;
`;
const TextWrapper = styled.div`
    margin-left: 2vw;
`;
const EmploymentTitle = styled.div`
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 16px;
`;
const EmploymentText = styled.div`
    font-size: 16px;
    margin-bottom: 16px;
`;

const CarreerEmployment = ({list }) => {
    return (
        <Wrapper id="employment" key='employment'>
            <Title>{list.title}</Title>
            <EmploymentWrapper>
                <EmploymentImg src={picWoman} />
                <TextWrapper>
                    <EmploymentTitle>{list.process[0]}</EmploymentTitle>
                    <EmploymentText>{list.process[1]}</EmploymentText>
                    <EmploymentTitle>{list.inquiry[0]}</EmploymentTitle>
                    <EmploymentText>{list.inquiry[1]}</EmploymentText>
                </TextWrapper>
            </EmploymentWrapper>
        </Wrapper>
    )
}

export default CarreerEmployment;