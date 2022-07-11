import React from 'react';
import styled from 'styled-components';

const Organization = ({data}) => {
    return (
        <Wrapper id={`organization`}>
            <Title>{data.title}</Title>
            {/* <Img src={require(`assets/imgs/company/${data.image}`)} /> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnAround}
    margin: 0 auto;
    width: 100%;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;
const Img = styled.img``;

export default Organization;