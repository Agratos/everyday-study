import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 32px;
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
const EmploymentTextMail = styled.a`
    text-decoration-line: none;
    color: black;
`;

const RecruitingEmployment = ({list}) => {
    return (
        <Wrapper id="employment" key='employment'>
            <Title>{list.title}</Title>
            <EmploymentWrapper>
                <EmploymentImg src={require(`assets/imgs/carreer/${list.image}`)} />
                <TextWrapper>
                    <EmploymentTitle>{list.process[0]}</EmploymentTitle>
                    <EmploymentText>{list.process[1]}</EmploymentText>
                    <EmploymentTitle>{list.inquiry[0]}</EmploymentTitle>
                    <EmploymentTextMail href={`mailto:${list.inquiry[1]}`}>{list.inquiry[1]}</EmploymentTextMail>
                </TextWrapper>
            </EmploymentWrapper>
        </Wrapper>
    )
}

export default RecruitingEmployment;