import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    //border-top: 1px solid #eee7e7;
    color: #919191;
`;
const CopyrightText = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    margin-top: 10px;
    font-size: 0.9rem;
`;
const Colorlib = styled.div`
    color: #5DB2FF;
    &:hover {
        cursor: pointer;
    }
`;

const Copyright = () => {
    return (
        <Wrapper>
            <CopyrightText>
                {/* Copyright &copy; All rights reserved | This template is made with &#x2764; by&nbsp;<Colorlib>Colorlib</Colorlib> */}
                copyright ⓒ 2022 POINT-I, All right reserved
            </CopyrightText>
        </Wrapper>
    );
};

export default Copyright;