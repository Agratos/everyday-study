import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    border-top: 1px solid #eee7e7;
    color: #919191;
`;
const CopyrightText = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
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