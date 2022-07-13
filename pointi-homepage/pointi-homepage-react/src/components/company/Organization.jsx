import React from 'react';
import styled from 'styled-components';

const Organization = ({data}) => {
    return (
        <Wrapper id={`organization`}>
            {/* <Title>{data.title}</Title> */}
            <ImgWrapper>
                <Img src={require(`assets/imgs/company/${data.image}`)} />
            </ImgWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 0 auto;
    width: 100%;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;
const ImgWrapper = styled.div`
    width: inherit;
    //margin: -16px 0;
`;
const Img = styled.img`
    width: 100%;
`;

export default Organization;