import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

const MenuCategoryTable = ({ category, justify, subtitle, setIsClick, isClick, isWrap, height, page}) => {
    const [ isMenuClick, setIsMenuClick ] = useState(false);
    const device = useSelector(state => state.setDeviceReducer.device);
    const onClick = (e) => {
        setIsClick(e.target.id);
        setIsMenuClick(false);
    }
    const CheckClickTriangle = () => {
        setIsMenuClick(!isMenuClick);
    }
    return(
        <Wrapper>
            { (device === 'PC' || page === 'recruiting') ? 
                <CategoryWrapper justify={justify} subtitle={subtitle} wrap={isWrap}>
                    { category.map(({title,id}, index) => (
                        <Tbody key={`menuCategroyLeftTable${index}`} >
                            <Tr>
                                <Category 
                                    id={id}  
                                    onClick={(e) => onClick(e)}
                                    isClick={isClick}
                                >
                                    {title}
                                </Category>
                            </Tr>
                        </Tbody>
                    ))}
                </CategoryWrapper>
                :<MobileWrapper>
                    { !isMenuClick ? <AiFillCaretDown size={32} onClick={CheckClickTriangle}/> 
                        :  <AiFillCaretUp size={32} onClick={CheckClickTriangle}/>}
                    {/* <IoIosMenu size={32} onClick={CheckClickTriangle}/>  */}
                </MobileWrapper>
            }
            { (device === 'Mobile' && page !== 'recruiting') && (
                <UnderMenuBar height={height} isMenuClick={isMenuClick}>
                    { category.map(({title,id}, index) => (
                                <MenuText 
                                    id={id}  
                                    onClick={(e) => onClick(e)}
                                    isClick={isClick}
                                    key={`UnderMenuBar${index}`}
                                    isMenuClick={isMenuClick}
                                >
                                    {title}
                                </MenuText>
                    ))}
                </UnderMenuBar>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`;
const MobileWrapper = styled(Wrapper)`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin-top: 4px;
    margin-bottom: -12px;
`;
const CategoryWrapper = styled.table`
    display: flex;
    justify-content: ${props => props.justify};
    flex-wrap: ${props => props.isWrap || 'wrap'};
    margin: 32px 0;
    border-bottom: 2px solid #3d74a7;
    line-height: 16px;
    ${props => props.subtitle && 
        css`
            border-bottom: 1px solid black;
        `
    }
`;
const Tbody = styled.tbody`
    border: 1px solid black;
`;
const Tr = styled.tr``;
const Category = styled.td` 
    padding: 12px 24px;
    font-size: 1.2rem;
    &{
        ${ props => props.id === props.isClick && `
            color: #5DB2FF;
            padding: 12px 24px;
        `}
    }
    &:hover {
        cursor: pointer;
    }
`;
const UnderMenuBar = styled.div`
    position: absolute;
    width: calc(100% - 24px);
    margin-top: 16px;
    background-color: #e2dddd;
    line-height: 32px;
    height: 0px;
    ${({isMenuClick, height}) => isMenuClick && css`
        height: ${height};
    `}
`;
const MenuText = styled.div`
    transition-duration: 0.5s;
    background-color: #e2dddd;
    ${({isMenuClick}) => isMenuClick ? css`
        height:32px;
        opacity: 1;
        padding: 0px 8px;
    `:css`
        height:0px;
        opacity: 0;
        pointer-events: none;
    `}
    ${ props => props.id === props.isClick && `
        color: #5DB2FF;
    `}

`;

export default MenuCategoryTable;