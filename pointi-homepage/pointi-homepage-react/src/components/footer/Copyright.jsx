import React from 'react';
import styled from 'styled-components';

const Copyright = () => {
    return (
        <Wrapper>
            <CopyrightText>
                copyright ⓒ 2022 POINT-I, All right reserved
            </CopyrightText>
        </Wrapper>
    )
}

const Wrapper = styled.div``;
const CopyrightText = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    margin-top: 8px;
    font-size: 0.8rem;
`;

export default Copyright;