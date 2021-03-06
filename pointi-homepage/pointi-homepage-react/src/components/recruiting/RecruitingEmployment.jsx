import React from 'react';
import styled from 'styled-components';

const RecruitingEmployment = ({list}) => {
    return (
        <Wrapper id="employment" key='employment'>
            <Title>{list.title}</Title>
            <EmploymentWrapper>

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

const Wrapper = styled.div`
    width: 100%;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-bottom: 32px;
`;
const EmploymentWrapper = styled.div`
    ${({theme}) => theme.divCommon.flex}
    margin-left:10vw;
`;
const EmploymentImg = styled.img`
    width: 30%;
`;
const TextWrapper = styled.div`
    margin-left: 2vw;
`;
const EmploymentTitle = styled.div`
    ${({theme}) => theme.fontCommon.subtitle}
    margin-bottom: 16px;
`;
const EmploymentText = styled.div`
    margin-bottom: 16px;
`;
const EmploymentTextMail = styled.a`
    text-decoration-line: none;
    color: black;
`;

export default RecruitingEmployment;