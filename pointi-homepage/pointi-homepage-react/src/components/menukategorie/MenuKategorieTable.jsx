import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";


const Wrapper = styled.div`
    width: 100%;
`;
const MobileWrapper = styled(Wrapper)`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin-top: 8px;
    margin-bottom: -16px;
`;
const KategorieWrapper = styled.table`
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
const Kategorie = styled.td` 
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
    width: 100%;
    margin-top: 16px;
    background-color: #e2dddd;
    line-height: 32px;
    height: ${({height, isMenuClick}) => isMenuClick ? height : '0px'};
`;
const MenuText = styled.div`
    transition-duration: 0.5s;
    background-color: #e2dddd;
    height: ${({isMenuClick}) => isMenuClick ? '32px' : '0px'};
    opacity: ${({isMenuClick}) => isMenuClick ? '1' : '0'};
    &{
        ${ props => props.id === props.isClick && `
            color: #5DB2FF;
            padding: 12px 24px;
        `}
    }
`


const MenuKategorieTable = ({ kategorie, justify, subtitle, setIsClick, isClick, isWrap, height, page}) => {
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
                <KategorieWrapper justify={justify} subtitle={subtitle} wrap={isWrap}>
                    { kategorie.map(({title,id}, index) => (
                        <Tbody key={`menuKategroieLeftTable${index}`} >
                            <Tr>
                                <Kategorie 
                                    id={id}  
                                    onClick={(e) => onClick(e)}
                                    isClick={isClick}
                                >
                                    {title}
                                </Kategorie>
                            </Tr>
                        </Tbody>
                    ))}
                </KategorieWrapper>
                :<MobileWrapper>
                    { !isMenuClick ? <AiFillCaretDown size={32} onClick={CheckClickTriangle}/> 
                        :  <AiFillCaretUp size={32} onClick={CheckClickTriangle}/>}
                    {/* <IoIosMenu size={32} onClick={CheckClickTriangle}/>  */}
                </MobileWrapper>
            }
            { (device === 'Mobile' && page !== 'recruiting') && (
                <UnderMenuBar height={height} isMenuClick={isMenuClick}>
                    { kategorie.map(({title,id}, index) => (
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

export default MenuKategorieTable;