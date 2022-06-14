import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IoIosArrowDown, IoIosMenu, IoIosAdd, IoIosRemove} from "react-icons/io";
//import dropDownData from 'assets/dummy/dorpDownMenu.json';
import ScrollEvent from 'containers/scroll/ScrollEvent';
import logoWhite from 'assets/imgs/custom/logo.white.png';
import logoBlack from 'assets/imgs/custom/logo.png';

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
`

const Wrapper = styled.div`
    display: ${props => props.scrollMenu && 'none'};
    padding: 8px 8px 4px 8px;
    //border-bottom: 1px solid #ccbebe;
    //border: 1px solid #ccbebe;
    //border-top: none;
    ${(props) => props.isScrollDowun && props.scrollMenu &&
        css`
            display: block;
            position: fixed;
            top: 0;
            z-index: 999;
            background-color: #0f0e0e;
        ` 
    }
`;
const HeaderMiddleArea = styled.div``;
const TopDropDownWrapper = styled(Flex)``;
const MenuBarArea = styled.div`
    font-weight: 400;
`;
const MenuBar = styled(Flex)`
    margin-left: -16px;
`;
const DropDownWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumn}
    background-color: rgb(239, 239, 239);
    align-items: center;
    position: absolute;
    margin-top: 8px;
    overflow: hidden;
   
`;
const MenuBarText = styled(Link)`
    ${({theme}) => theme.divCommon.flex}
    /* color: ${props => props.page === 'main' ? 'white' : 'black'}; */
    color: #3a3939ce;
    font-weight: bolder;
    font-size: 1.1rem;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        //border-bottom: 4px solid #5db2ff;
        padding-bottom: 16px;
        margin-bottom: -16px;
    }
`;
const DropDownText = styled(Link)`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    font-size: 0.9rem;
    color: black;
    width: 88px;
    height: 0px;
    transition-duration: 0.4s;
    overflow: hidden;
    &:hover {
        background-color: rgb(193, 193, 193);
    }
`;
const LinkWrapper = styled.div`
    ${({theme}) => theme.zIndex.three}
    margin: 8px 32px;
    &:hover ${DropDownText}{
        height: 32px;
        padding: 4px 16px;
    }
`;
const IconWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnAround}
    padding-top: 4px;
    margin-left: 2px;
    ${props => props.device === 'Mobile' && 
        css`
            position: absolute;
            right: 0;
            margin: 0 16px;
        `
    }
`;
const MenuIconWrapper = styled(IconWrapper)`
    color: ${props=>props.page === 'main' ? 'white' : 'black'};
`
const LeftLogoArea = styled.div`
    padding-left: ${({device}) => device === 'PC' && '140px'};
    width: 25%;
`;
const LeftLogo = styled.img`
    width: 113px;
    height: 40px;
    &:hover{
        cursor: pointer;
    }
`;
const UnderMenuBar = styled.div`
    ${({theme}) => theme.zIndex.one}
    position: absolute;
    flex-direction: column;
    width: 100%;
    top: 57px;
    left: 0;
    border-top: 1px solid #ccbebe;
    background-color: #e2dddd;
    line-height: 32px;
    height: ${({isClick, clickMenu}) => !isClick ? '0px' : clickMenu === null ? '129px' : clickMenu === 'Company' ? '322px' : '193px'};
    ${({isClick}) => isClick ? css`
        opacity: 1;
    `:css`
        opacity: 0;
        pointer-events:none;
    `}
    transition-duration: 0.3s;
`;
const UnderMenuTextWrapper = styled.div`
   font-size: 1.1rem;
`;
const CheckDrop = styled.div`
    position: absolute;
    right: 0;
    margin-right: 24px;
    font-size: 1.2rem;
    font-weight: bolder;
`;
const UnderMenuTextLink = styled(({clickMenu, ...rest}) => <Link {...rest} />)`
    color: black;
    text-decoration: none;
    padding-left: 24px;
    height: 0px;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    ${({title}) => title === 'Technology' && css`
        opacity: 1;
        pointer-events: all;
        height: 32px;
    `}
    ${({clickMenu}) => clickMenu !== null && css`
        @keyframes clickMenuIn {
            100%{
                height: 32px;
                opacity: 1;
            }
        }
        pointer-events: all;
        animation: clickMenuIn;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    `}
`;
const UnderMenuTextLinkWrapper = styled.div`
    ${({ theme }) => theme.divCommon.flexColumn}
    padding-left: 32px;
    position: relative;
    transition-duration: 0.5s;
`
const UnderMenuUnClickWrapper = styled(Flex)``;
const UnderMenuClickWrapper = styled.div``;
const UnderMenuTitle = styled.div`
    ${({ theme }) => theme.zIndex.two}
    width: 100%;
    padding-left: 24px;
    height: ${({isClick}) => isClick ? '32px' : '0px'};
    transition-duration: 0.5s;
`

const HeaderDropDown = ({page, scrollMenu, device}) => {
    const isScrollDowun = ScrollEvent();
    const dropDownData = useSelector(state => state.setDataReducer.menu);
    const [ isClick, setIsClick ] = useState(false); // 메뉴버튼을 눌렀는지 확인
    const [ clickMenu, setClickMenu ] = useState(null); // 어떤 메뉴를 눌렀는지 확인

    useEffect(() => {
        (() => device !== 'Mobile')(
            setIsClick(false),
            setClickMenu(null)
        )
    },[device])
    const CheckClickThreeDot = () => {
        setIsClick(!isClick);
    }
    const CheckClickMenu = (e) => {
        clickMenu !== e.target.id ? setClickMenu(e.target.id) : setClickMenu(null);
    }
    const MoveToLink = () => {
        setIsClick(false);
        setClickMenu(null)
    }

    return (
        <Wrapper isScrollDowun={isScrollDowun} scrollMenu={scrollMenu} color={'#0f0e0e'} page={page}>
            <HeaderMiddleArea>
                <TopDropDownWrapper>
                    <LeftLogoArea device={device}>
                        <Link to='/' ><LeftLogo src={logoBlack} /></Link>
                    </LeftLogoArea>
                    <MenuBarArea>
                        { device !== 'Mobile' ? // PC Tablet 일때 보여지는 메뉴
                            (<MenuBar>
                                { dropDownData.data.map( ({list, path, title},index) => (
                                    ( list.length !== 0 ? (
                                        <LinkWrapper key={`menu-bar-text-${index}`}>
                                            <MenuBarText to={path} page={page}>
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
                                        <MenuBarText to={path} page={page}>{title}</MenuBarText>
                                    </LinkWrapper>
                                )))}
                            </MenuBar>) : 
                            ( <MenuBar>
                                <MenuIconWrapper device={device} page={page}><IoIosMenu size={40}  onClick={CheckClickThreeDot}/></MenuIconWrapper>
                            </MenuBar>)
                        }
                    </MenuBarArea>
                </TopDropDownWrapper>
                { device === 'Mobile' && // 모바일에서 메뉴 클릭시 하단으로 보여지는 부분
                    (<UnderMenuBar clickMenu={clickMenu} isClick={isClick}>
                        { dropDownData.data.map( ({list, path, title},index) => (
                            ( list.length !== 0 ? (
                                <UnderMenuTextWrapper key={`underMenuTextWrapper${index}`}>
                                    {clickMenu !== title ? (
                                        <UnderMenuUnClickWrapper >
                                            <UnderMenuTitle id={title} onClick={CheckClickMenu} isClick={isClick}>{title}</UnderMenuTitle>
                                            <CheckDrop>
                                                <IoIosAdd />
                                            </CheckDrop>
                                        </UnderMenuUnClickWrapper>
                                    ) : (
                                        <UnderMenuClickWrapper >
                                            <UnderMenuUnClickWrapper>
                                                <UnderMenuTitle id={title} onClick={CheckClickMenu} isClick={isClick}>{title}</UnderMenuTitle>
                                                <CheckDrop>
                                                    <IoIosRemove />
                                                </CheckDrop>
                                            </UnderMenuUnClickWrapper>
                                            <UnderMenuTextLinkWrapper>
                                                {list.map( ({path, text},index) => (
                                                        <UnderMenuTextLink to={path} key={`drop-down-text-${index}`} onClick={MoveToLink} clickMenu={clickMenu}>{text}</UnderMenuTextLink>
                                                    ))}
                                            </UnderMenuTextLinkWrapper>
                                        </UnderMenuClickWrapper>
                                    )}
                                </UnderMenuTextWrapper>
                            )
                            : ( 
                                <UnderMenuTextWrapper key={`underMenuTextWrapper${index}`}>
                                    <UnderMenuTextLink to={path} onClick={MoveToLink} title={title}>{title}</UnderMenuTextLink>
                                </UnderMenuTextWrapper>   
                        ))))}
                    </UnderMenuBar>)}
            </HeaderMiddleArea>
        </Wrapper>
    );
};

export default HeaderDropDown;