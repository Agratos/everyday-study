import React from 'react';
import styled from 'styled-components';

const Copyright = () => {
    return (
        <Wrapper>
            <CopyrightText>
                {/* Copyright &copy; All rights reserved | This template is made with &#x2764; by&nbsp;<Colorlib>Colorlib</Colorlib> */}
                copyright ⓒ 2022 POINT-I, All right reserved
            </CopyrightText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    //border-top: 1px solid #eee7e7;
    //color: #ffffff82;
`;
const CopyrightText = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    margin-top: 8px;
    font-size: 0.8rem;
`;
const Colorlib = styled.div`
    //color: #5DB2FF;
    &:hover {
        cursor: pointer;
    }
`;

export default Copyright;