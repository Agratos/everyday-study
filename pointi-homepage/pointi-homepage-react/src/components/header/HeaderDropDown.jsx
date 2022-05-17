import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import dropDownData from 'assets/dummy/dorpDownMenu.json';
import ScrollEvent from 'containers/scroll/ScrollEvent';
import logoWhite from 'assets/imgs/custom/logo.white.png';
import logoBlack from 'assets/imgs/custom/logo.png';

const Wrapper = styled.div`
    display: ${props => props.scrollMenu && 'none'};
    padding: 8px;
    border-bottom: 1px solid #ccbebe;
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
const TopDropDownWrapper = styled.div`
    display: flex;
`;
const MenuBarArea = styled.div``;
const MenuBar = styled.div`
    display: flex;
`;
const DropDownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #cdcbcb;
    text-align: left;
    position: absolute;
    opacity: 0;
    transition: all 0.8s;
    pointer-events: none;
    padding: 8px ;
`;
const MenuBarText = styled(Link)`
    display: flex;
    margin: 8px 32px;
    color: ${props => props.page === 'main' ? 'white' : 'black'};
    font-weight: bolder;
    font-size: 1.1rem;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        border-bottom: 4px solid #5db2ff;
        padding-bottom: 17px;
        margin-bottom: -17px;
    }
`;
const DropDownText = styled(Link)`
    padding: 8px;
    font-weight: normal;
    color: black;
    text-decoration: none;
    &:hover {
        background-color: #5db2ff;
    }
`;
const LinkWrapper = styled.div`
    position: relative;
    z-index: 3;
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
    ${props => props.device === 'Mobile' && 
        css`
            position: absolute;
            right: 0;
            margin: 0 16px;
        `
    }
`;
const LeftLogoArea = styled.div`
    padding: 0 16px 0 16px;
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
    position: absolute;
    flex-direction: column;
    width: 100%;
    top: 60px;
    left: 0;
    border-top: 1px solid #ccbebe;
    background-color: white;
    padding: 0 16px;
    line-height: 32px;
`;
const UnderMenuTextWrapper = styled.div``

const HeaderDropDown = ({page, scrollMenu, device}) => {
    const isScrollDowun = ScrollEvent();
    //const dropDownData = useSelector(state => state.setDataReducer.menu);
    const [ isClick, setIsClick ] = useState(false);

    const CheckClick = () => {
        setIsClick(!isClick);
    }
    useEffect(() => {
        device !== 'Mobile' && setIsClick(false);
    },[device])

    return (
        <Wrapper isScrollDowun={isScrollDowun} scrollMenu={scrollMenu} color={'#0f0e0e'} page={page}>
            <HeaderMiddleArea>
                <TopDropDownWrapper>
                    <LeftLogoArea>
                        <Link to='/' ><LeftLogo src={page==='main'?logoWhite:logoBlack} /></Link>
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
                                <IconWrapper device={device}><IoIosMenu size={40} color={'white'} onClick={CheckClick}/></IconWrapper>
                            </MenuBar>)
                        }
                    </MenuBarArea>
                </TopDropDownWrapper>
                { isClick && // 모바일에서 메뉴 클릭시 하단으로 보여지는 부분 // 수정중
                    (<UnderMenuBar>
                        { dropDownData.data.map( ({list, path, title},index) => (
                            ( list.length !== 0 ? (
                                <UnderMenuTextWrapper>{title}</UnderMenuTextWrapper>
                            )
                            : ( 
                                <div>{'클릭시 바로 이동 ' + title}</div>
                        ))))}
                    </UnderMenuBar>)}
            </HeaderMiddleArea>
        </Wrapper>
    );
};

export default HeaderDropDown;


// { isClick && 
//     (<UnderMenuBar>
//         { dropDownData.data.map( ({list, path, title},index) => (
//             ( list.length !== 0 ? (
//                 <LinkWrapper key={`menu-bar-text-${index}`}>
//                     <MenuBarText to={path} page={page}>
//                         {title}
//                         <IconWrapper><IoIosArrowDown /></IconWrapper>
//                     </MenuBarText>
//                     <DropDownWrapper>
//                         {list.map( ({path, text},index) => (
//                             <DropDownText to={path} key={`drop-down-text-${index}`}>{text}</DropDownText>
//                         ))}
//                     </DropDownWrapper>
//                 </LinkWrapper>
//             )
//             : 
//             <LinkWrapper key={`menu-bar-text-${index}`}>
//                 <MenuBarText to={path} page={page}>{title}</MenuBarText>
//             </LinkWrapper>
//         )))}
//     </UnderMenuBar>)}