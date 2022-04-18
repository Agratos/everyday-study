import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";
import logo from 'assets/imgs/custom/logo.white.png';
import dummyMenu from 'assets/dummy/dorpDwonMenu.json';

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
    text-align: center;
    margin: 4px;
`;
const DropDownWrapper = styled.div`
    background-color: white;
    min-width: 12vw;
    text-align: left;
    padding: 0 24px 0 24px;
    position: absolute;
    opacity: 0;
    transition: all 0.8s;
    pointer-events: none;
`;
const MenuBarText = styled.div`
    display: inline-block;
    color: white;
    font-weight: bolder;
    font-size: 16px;
    margin: 8px 12px 8px 8px;
    &:hover {
        cursor: pointer;
        border-bottom: 4px solid #5db2ff;
        padding-bottom: 24px;
        margin-bottom: -24px;
    }
    &:hover ${DropDownWrapper}{
        opacity: 1;
        pointer-events: auto;
    }
`;
const DropDownText = styled.div`
    padding: 8px;
    margin: 0 10px 0 10px;
    font-weight: normal;
    color: black;
    &:hover {
        background-color: #5db2ff;
    }
`;

const HeaderDropDown = () => {
    return (
        <Wrapper>
            <HeaderMiddleArea>
                <RightLogoArea>
                    <RithtLogo src={logo} />
                </RightLogoArea>
                <MenuBarArea>
                    <MenuBar>
                        { dummyMenu.data.map( (data,index) => (
                            ( data.list.length !== 0 ? (
                                <MenuBarText key={`menu-bar-text-${index}`}>
                                    {data.title}
                                    <IoIosArrowDown />
                                    <DropDownWrapper>
                                        {data.list.map( (list,index) => (
                                            <DropDownText key={`drop-down-text-${index}`}>{list}</DropDownText>
                                        ))}
                                    </DropDownWrapper>
                                </MenuBarText>
                            ) :<MenuBarText key={`menu-bar-text-${index}`}>{data.title}</MenuBarText>)
                        ))}
                    </MenuBar>
                </MenuBarArea>
            </HeaderMiddleArea>
        </Wrapper>
    );
};

export default HeaderDropDown;