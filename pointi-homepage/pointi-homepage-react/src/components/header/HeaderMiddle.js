import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";
import logo from 'assets/imgs/custom/logo.white.png';

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
    //display: none; // transition 적용x
    opacity: 0;
    transition: all 0.8s;
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
    //transition: all 1s;
`;

const HeaderMiddle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onHover = () => setIsOpen(!isOpen);
    //const offHover = () => setIsOpen(false);  
    //const offHover = () => {};


    return (
        <Wrapper>
            <HeaderMiddleArea>
                <RightLogoArea>
                    <RithtLogo src={logo} />
                </RightLogoArea>
                <MenuBarArea>
                    <MenuBar>
                        <MenuBarText id='home'>Home</MenuBarText>
                        <MenuBarText id='introduce'>
                            회사소개<IoIosArrowDown className='dowm-mark' />
                            <DropDownWrapper>
                                <DropDownText>CEO 인사말</DropDownText>
                                <DropDownText>회사 연역</DropDownText>
                                <DropDownText>조직 구성</DropDownText>
                                <DropDownText>특허 현황</DropDownText>
                                <DropDownText>관계사</DropDownText>
                                <DropDownText>오시는 길</DropDownText>
                            </DropDownWrapper> 
                        </MenuBarText>
                        <MenuBarText id='solution'>솔루션</MenuBarText>
                        <MenuBarText id='carrer'>
                            Carrers<IoIosArrowDown />
                            <DropDownWrapper>
                                <DropDownText>인재관리철학&amp;인재상</DropDownText>
                                <DropDownText>입사지원&amp;채용공고</DropDownText>
                            </DropDownWrapper>
                        </MenuBarText>          
                    </MenuBar>
                </MenuBarArea>
            </HeaderMiddleArea>
        </Wrapper>
    );
};

export default HeaderMiddle;