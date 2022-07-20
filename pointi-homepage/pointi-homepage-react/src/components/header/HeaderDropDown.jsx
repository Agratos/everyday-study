import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IoIosArrowDown, IoIosMenu, IoIosAdd, IoIosRemove} from "react-icons/io";
//import dropDownData from 'assets/dummy/dorpDownMenu.json';
import ScrollEvent from 'containers/scroll/ScrollEvent';
import logo from 'assets/imgs/logo/logo.png';

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
            <TopDropDownWrapper>
                <LeftLogoArea device={device}>
                    <Link to='/' ><LeftLogo src={logo} /></Link>
                </LeftLogoArea>
                <MenuBarArea device={device}>
                    { device !== 'Mobile' ? // PC Tablet 일때 보여지는 메뉴
                        (<MenuBar>
                            { dropDownData.data.map( ({list, path, title},index) => (
                                ( list.length !== 0 ? (
                                    <LinkWrapper key={`menu-bar-text-${index}`} device={device} title={title}>
                                        <MenuBarText to={path} page={page}>
                                            {title}
                                            <IconWrapper><IoIosArrowDown /></IconWrapper>
                                        </MenuBarText>
                                        <DropDownWrapper device={device}>
                                            {list.map( ({path, text},index) => (
                                                <DropDownText to={path} key={`drop-down-text-${index}`} title={title} device={device}>{text}</DropDownText>
                                            ))}
                                        </DropDownWrapper>
                                    </LinkWrapper>
                                )
                                : 
                                <LinkWrapper key={`menu-bar-text-${index}`} device={device}>
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
                (<UnderMenuBar clickMenu={clickMenu} isClick={isClick} device={device}>
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
        </Wrapper>
    );
};

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
`;

const Wrapper = styled.div`
    display: ${props => props.scrollMenu && 'none'};
    height: 40px;
    margin-top: 2px;
    margin-bottom: 2px;
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
const TopDropDownWrapper = styled(Flex)``;
const MenuBarArea = styled.div`
    width: 100%;
    margin: 2px 1px;
    font-weight: 600;
    padding-right: ${({device}) => device !== 'PC' ? '14px' : '1px'};
`;
const MenuBar = styled(Flex)`
    float: right;
`;
const DropDownWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumn}
    background-color: rgb(239, 239, 239);
    align-items: center;
    position: absolute;
    overflow: hidden;
    margin-top: ${({device}) => device === 'PC' ? '8px' : '10px'};
`;
const MenuBarText = styled(Link)`
    ${({theme}) => theme.divCommon.flex}
    color: #3a3939ce;
    font-weight: bolder;
    font-size: 1.1rem;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        padding-bottom: 16px;
        margin-bottom: -16px;
    }
`;
const DropDownText = styled(Link)`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    ${({device}) => device === 'PC' ? css`
        width: ${({title}) => title === 'Company' ? '104px' : title === 'Recruiting' ? '116px' : '88px'}; 
        font-size: 0.9rem;
    `: css`
        width: ${({title}) => title === 'Company' ? '96px' : title === 'Recruiting' ? '88px' : '80px'};
        font-size: 1rem;
    `}
    color: black;
    height: 0px;
    transition-duration: 0.4s;
    overflow: hidden;
    &:hover {
        background-color: rgb(193, 193, 193);
    }
`;
const LinkWrapper = styled.div`
    ${({theme}) => theme.zIndex.three}
    
    margin: 8px 16px 8px 0px;
    margin-left: ${({device}) => device === 'PC' ? '20px' : 'calc(5vw - 8px)'};
    /* margin-right: ${({device, title}) => device === 'PC' ? '44px' : title === 'Recruiting' ? '44px' : '16px'}; */
    ${({device}) => device === 'PC' ? css`
        margin-right: ${({title}) => title === 'Recruiting' ? '44px' : '56px'};
    ` : css`
        margin-right: 16px;
    `}
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
        `
    }
`;
const MenuIconWrapper = styled(IconWrapper)`
    color: ${props=>props.page === 'main' ? 'black' : 'black'};
    margin-top: -4px;
`
const LeftLogoArea = styled.div`
    padding-left: ${({device}) => device === 'PC' && '0px'};
    float: left;
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
    top: 40px;
    left: 0;
    border-top: 1px solid #ccbebe;
    background-color: #e2dddd;
    line-height: 32px;
    height: ${({isClick, clickMenu}) => !isClick ? '0px' 
    : clickMenu === null ? '129px' 
    : clickMenu === 'Company' ? '290px' 
    : clickMenu === 'Solution' ? '193px' : '230px'};
    
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
`;
const UnderMenuUnClickWrapper = styled(Flex)``;
const UnderMenuClickWrapper = styled.div``;
const UnderMenuTitle = styled.div`
    ${({ theme }) => theme.zIndex.two}
    width: 100%;
    padding-left: 24px;
    height: ${({isClick}) => isClick ? '32px' : '0px'};
    transition-duration: 0.5s;
`;

export default HeaderDropDown;