import React from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import logo from 'assets/imgs/banner/banner.png';
//#0181f5
const Wrapper = styled.div`
    max-height: 750px;
    background-image: url(${logo});
    background-size: cover;
    opacity: 0.9;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    height: 80vh;
`;

const Header = () => {
    return (
        <Wrapper>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />            
        </Wrapper>
    )
}

export default Header;