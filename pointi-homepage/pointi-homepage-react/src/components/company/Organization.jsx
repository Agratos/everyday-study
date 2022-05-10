import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 32px;
    text-align: center;
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