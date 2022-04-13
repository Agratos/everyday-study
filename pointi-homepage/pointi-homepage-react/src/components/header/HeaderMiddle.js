import React from 'react';
import styled from 'styled-components';
import logo from 'assets/imgs/custom/logo.white.png';

const Wrapper = styled.div`
    padding: 16px;
`;
const HeaderMiddleArea = styled.div`
    display: flex;
    margin: 0 64px 0 64px;
`;
const RightLogoArea = styled.div`
    padding: 0 16px 0 16px;
    width: 25%;
`;
const RithtLogo = styled.img`
    width: 113px;
    height: 40px;
`;
const MenuBarArea = styled.div`
    width: 50%;
    
`;
const MenuBar = styled.div`
    text-align: center;
    margin: 4px;
`
const MenuBarText = styled.p`
    display: inline-block;
    color: white;
    font-weight: bolder;
    font-size: 16px;
    margin: 8px 12px 8px 8px;
`

const HeaderMiddle = () => {
    return (
        <Wrapper>
            <HeaderMiddleArea>
                <RightLogoArea>
                    <RithtLogo src={logo} />
                </RightLogoArea>
                <MenuBarArea>
                    <MenuBar>
                        <MenuBarText>Home</MenuBarText>
                        <MenuBarText>회사소개 </MenuBarText>
                        <MenuBarText>솔루션</MenuBarText>
                        <MenuBarText>Carrers</MenuBarText>
                    </MenuBar>
                </MenuBarArea>
            </HeaderMiddleArea>
        </Wrapper>
    );
};

export default HeaderMiddle;