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
    margin: 10vh 0;
`;
const EmploymentWrapper = styled.div`
    display: flex;
`;
const EmploymentImg = styled.img`
    width: 40%;
`;
const TextWrapper = styled.div`
`;
const EmploymentTitle = styled.div`
    font-size: 24px;
    font-weight: bolder;
    margin: 16px 0;
`;
const EmploymentText = styled.div`
    font-size: 16px;
`;

const CarreerEmployment = ({list }) => {
    return (
        <Wrapper id="employment">
            <Title>{list.title}</Title>
            <EmploymentWrapper>
                <EmploymentImg src={picWoman} />
                <TextWrapper>
                    <EmploymentTitle>{list.process[0]}</EmploymentTitle>
                    <EmploymentText>{list.process[1]}</EmploymentText>
                    <EmploymentTitle>{list.inquiry[0]}</EmploymentTitle>
                    <EmploymentText>{list.inquiry[0]}</EmploymentText>
                </TextWrapper>
            </EmploymentWrapper>
        </Wrapper>
    )
}

export default CarreerEmployment;