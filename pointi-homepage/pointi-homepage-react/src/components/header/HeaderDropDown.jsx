import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";
import logo from 'assets/imgs/custom/logo.white.png';
import dummyMenu from 'assets/dummy/dorpDwonMenu.json';
import { Link } from 'react-router-dom';
import Scroll from 'containers/scroll/Scroll';

const Wrapper = styled.div`
    padding: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    height: 78;
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
    min-width: 12vw;
    text-align: left;
    padding: 0 24px 0 24px;
    position: absolute;
    opacity: 0;
    transition: all 0.8s;
    pointer-events: none;
`;
const MenuBarText = styled(Link)`
    display: inline-block;
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


const HeaderDropDown = () => {
    const [ isUrlChange, setIsUrlChange ] = useState('');
    useEffect(() => {
        if(isUrlChange === window.location.href.split('/')[0])
        console.log('같다');
    })
    useEffect(() => {
        Scroll()
    },[isUrlChange])
    return (
        <Wrapper>
            <HeaderMiddleArea>
                <RightLogoArea>
                    <Link to='/' ><RithtLogo src={logo} /></Link>
                </RightLogoArea>
                <MenuBarArea>
                    <MenuBar>
                        { dummyMenu.data.map( (data,index) => (
                            ( data.list.length !== 0 ? (
                                <LinkWrapper key={`menu-bar-text-${index}`}>
                                    <MenuBarText to={data.path}>
                                        {data.title}
                                        <IoIosArrowDown />
                                    </MenuBarText>
                                    <DropDownWrapper>
                                        {data.list.map( (list,index) => (
                                            <DropDownText to={list.path} key={`drop-down-text-${index}`}>{list.text}</DropDownText>
                                        ))}
                                    </DropDownWrapper>
                                </LinkWrapper>
                            )
                            : 
                            <LinkWrapper key={`menu-bar-text-${index}`}>
                                <MenuBarText to={data.path}>{data.title}</MenuBarText>
                            </LinkWrapper>
                        )))}
                    </MenuBar>
                </MenuBarArea>
            </HeaderMiddleArea>
        </Wrapper>
    );
};

export default HeaderDropDown;