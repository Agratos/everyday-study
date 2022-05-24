import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    width: 100%;
`;
const KategorieWrapper = styled.div`
    display: flex;
    margin-top: 32px;
    //border-bottom: 3px solid #3d74a7;
    width: 900px;
    line-height: 16px;
`;
const MenuBar = styled.div`
    display: flex;
    width: fit-content;
    margin-left: calc((100% - 900px) / 2);
`;
const Page = styled.div`
    border: 1px solid black;
    padding: 16px;
    font-size: 1.1rem;
    width: 150px;
`;
const Select = styled(Page)`
    width: 400px;
    z-index: 2;
`;
const IconWrapper = styled.div`
    float: right;
`;
const UnderMenuBar = styled.div`
    position: absolute;
    width: 432px;
    top: 178px;
    background-color: #e2dddd;
    line-height: 32px;
    height: ${({height, isMenuClick}) => isMenuClick ? height : '0px'};
    margin-left: 185px;
`;
const MenuText = styled.div`
    transition-duration: 0.5s;
    background-color: #e2dddd;
    height: ${({isMenuClick}) => isMenuClick ? '32px' : '0px'};
    opacity: ${({isMenuClick}) => isMenuClick ? '1' : '0'};
    &{
        ${ props => props.id === props.isClick && `
            color: #5DB2FF;
            padding: 12px 32px;
        `}
    }
    padding-left: 16px;
`;

const MenuKategorie = ({ kategorie, setIsClick, isClick, title, page}) => {
    const params = useParams();
    const [ menuTitle, setMenuTitle ] = useState(kategorie[0].title) 
    const [ isMenuClick, setIsMenuClick ] = useState(false);

    useEffect(() => {
        page === 'solution' &&
        setMenuTitle(document.getElementById(params.click).innerHTML)
    }, [ params ])
    

    const onClick = (e) => {
        setIsClick(e.target.id);
        setMenuTitle(document.getElementById(e.target.id).innerText);
    }
    const onClickMenu = () => {
        setIsMenuClick(!isMenuClick);
    }

    return(
        <Wrapper>
            <KategorieWrapper>
                <MenuBar>
                    <Page>{title}</Page>
                    <Select onClick={onClickMenu}>
                        {menuTitle}
                        <IconWrapper>
                            {isMenuClick ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </IconWrapper>
                    </Select>
                    <UnderMenuBar height={'160px'} isMenuClick={isMenuClick}>
                            { kategorie.map(({title,id}, index) => (
                                <MenuText 
                                    id={id}  
                                    onClick={(e) => onClick(e)}
                                    isMenuClick={isMenuClick}
                                    isClick={isClick}
                                    key={`UnderMenuBar${index}`}
                                >
                                    {title}
                                </MenuText>
                            ))}
                        </UnderMenuBar>
                </MenuBar>
                {/* { kategorie.map(({title,id}, index) => (
                    <Kategorie 
                        key={`menuKategroie${title}`} 
                        id={id}  
                        onClick={(e) => onClick(e)}
                        isClick={isClick}
                    >
                        {title}
                    </Kategorie>
                ))} */}
            </KategorieWrapper>
        </Wrapper>
    )
}

export default MenuKategorie;