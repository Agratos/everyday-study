import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnAround}
    margin: 0 auto;
    width: 100%;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-bottom: 32px;
`;
const Img = styled.img``;

const Organization = ({data}) => {
    return (
        <Wrapper id={`organization`}>
            <Title>{data.title}</Title>
            <Img src={require(`assets/imgs/introduce/${data.image}`)} />
        </Wrapper>
    )
}

export default Organization;