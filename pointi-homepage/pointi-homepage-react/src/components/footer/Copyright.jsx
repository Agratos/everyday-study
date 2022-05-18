import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-top: 1px solid #eee7e7;
    color: #919191;
`;
const CopyrightText = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    margin: 32px 0;
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
                Copyright &copy; All rights reserved | This template is made with &#x2764; by&nbsp;<Colorlib>Colorlib</Colorlib>
            </CopyrightText>
        </Wrapper>
    );
};

export default Copyright;