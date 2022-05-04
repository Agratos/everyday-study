import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import { IoIosArrowDown } from "react-icons/io";
import ScrollEvent from 'containers/scroll/ScrollEvent';
import logo from 'assets/imgs/custom/logo.white.png';

const Wrapper = styled.div`
    padding: 16px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    display: ${props => props.scrollMenu && 'none'};
    ${(props) => props.isScrollDowun && props.scrollMenu &&
        css`
            display: block;
            background-color: #0f0e0e;
            position: fixed;
            top: 0;
            width: 100vw;
            z-index: 999;
        ` 
    }
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
    &:hover{
        cursor: pointer;
    }
`;
const MenuBarArea = styled.div`
    width: 50%; 
`;
const MenuBar = styled.div`
    display: flex;
    justify-content: center;
`;
const DropDownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    //min-width: 10vw;
    text-align: left;
    padding: 0 24px 0 24px;
    position: absolute;
    opacity: 0;
    transition: all 0.8s;
    pointer-events: none;
    padding: 8px ;
`;
const MenuBarText = styled(Link)`
    display: flex;
    color: white;
    font-weight: bolder;
    font-size: 16px;
    margin: 8px 12px 8px 8px;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        border-bottom: 4px solid #5db2ff;
        padding-bottom: 24px;
        margin-bottom: -24px;
    }
`;
const DropDownText = styled(Link)`
    padding: 8px;
    margin: 0 10px 0 10px;
    font-weight: normal;
    color: black;
    text-decoration: none;
    &:hover {
        background-color: #5db2ff;
    }
`;
const LinkWrapper = styled.div`
    &:hover ${DropDownWrapper}{
            opacity: 1;
            pointer-events: auto;
        }
`;
const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 4px;
    margin-left: 2px;
`;

const HeaderDropDown = ({scrollMenu}) => {
    const isScrollDowun = ScrollEvent();
    const dropDownData = useSelector(state => state.setDataReducer.menu);
    

    return (
        <Wrapper isScrollDowun={isScrollDowun} scrollMenu={scrollMenu} color={'#0f0e0e'}>
            <HeaderMiddleArea>
                <RightLogoArea>
                    <Link to='/' ><RithtLogo src={logo} /></Link>
                </RightLogoArea>
                <MenuBarArea>
                    <MenuBar>
                        { dropDownData.data.map( ({list, path, title},index) => (
                            ( list.length !== 0 ? (
                                <LinkWrapper key={`menu-bar-text-${index}`}>
                                    <MenuBarText to={path}>
                                        {title}
                                        <IconWrapper><IoIosArrowDown /></IconWrapper>
                                    </MenuBarText>
                                    <DropDownWrapper>
                                        {list.map( ({path, text},index) => (
                                            <DropDownText to={path} key={`drop-down-text-${index}`}>{text}</DropDownText>
                                        ))}
                                    </DropDownWrapper>
                                </LinkWrapper>
                            )
                            : 
                            <LinkWrapper key={`menu-bar-text-${index}`}>
                                <MenuBarText to={path}>{title}</MenuBarText>
                            </LinkWrapper>
                        )))}
                    </MenuBar>
                </MenuBarArea>
            </HeaderMiddleArea>
        </Wrapper>
    );
};

export default HeaderDropDown;