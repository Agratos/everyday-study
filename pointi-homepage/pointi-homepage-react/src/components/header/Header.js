import React from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import logo from 'assets/imgs/banner/banner.png';
//#0181f5
const Wrapper = styled.div`
    //background-color: #0181f5;
    background-image: url(${logo});
    background-size: cover;
    opacity: 0.7;
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