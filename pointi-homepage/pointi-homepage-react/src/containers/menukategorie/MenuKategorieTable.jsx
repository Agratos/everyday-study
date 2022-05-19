import React, { useState } from 'react';
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
    &:hover {
        cursor: pointer;
    }
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
`;
const UnderMenuBar = styled.div`
    ${({ theme }) => theme.animations.fadeInOut}
    position: absolute;
    width: 100%;
    top: 132px;
    border-top: 1px solid #ccbebe;
    background-color: #e2dddd;
    line-height: 32px;
    height: ${props => props.height};
`;
const Test = styled.div`
    &{
        ${ props => props.id === props.isClick && `
            color: #5DB2FF;
            padding: 12px 24px;
        `}
    }
`


const MenuKategorieTable = ({ kategorie, justify, subtitle, setIsClick, isClick, isWrap, device, height, page}) => {
    const [ isMenuClick, setIsMenuClick ] = useState(false);
    const onClick = (e) => {
        setIsClick(e.target.id);
        setIsMenuClick(false);
    }
    const CheckClickThreeDot = () => {
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
                    { !isMenuClick ? <AiFillCaretDown size={32} onClick={CheckClickThreeDot}/> 
                        :  <AiFillCaretUp size={32} onClick={CheckClickThreeDot}/>}
                    {/* <IoIosMenu size={32} onClick={CheckClickThreeDot}/>  */}
                </MobileWrapper>
            }
            { isMenuClick && (
                <UnderMenuBar height={height}>
                    { kategorie.map(({title,id}, index) => (
                                <Test 
                                    id={id}  
                                    onClick={(e) => onClick(e)}
                                    isClick={isClick}
                                    key={`UnderMenuBar${index}`}
                                >
                                    {title}
                                </Test>
                    ))}
                </UnderMenuBar>
            )}
        </Wrapper>
    )
}

export default MenuKategorieTable;