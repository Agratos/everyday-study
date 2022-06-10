import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    //width: 100%;
`;
const KategorieWrapper = styled.div`
    display: flex;
    //margin-top: 32px;
    //border-bottom: 3px solid #3d74a7;
    //line-height: 16px;
    width: 100%;
`;
const MenuBar = styled.div`
    display: flex;
    width: 100%;
    //width: fit-content;
    //margin-left: calc((100% - 900px) / 2);
`;
const Page = styled.div`
    border: 1px solid #e2dddd;
    padding: 8px;
    font-size: 0.9rem;
    width: 30%;
    &:hover{
        cursor: pointer;
    }
    padding-left: 15%;
`;
const Select = styled(Page)`
    width: 60%;
    padding-left: 10%;
    z-index: 2;
`;
const IconWrapper = styled.div`
    float: right;
    z-index: 1;
`;
const UnderMenuBar = styled.div`
    position: absolute;
    width: 60%;
    margin-top: 9px;
    background-color: #e2dddd;
    line-height: 32px;
    height: ${({height, isMenuClick}) => isMenuClick ? height : '0px'};
`;
const UnderPageBar = styled(UnderMenuBar)`
    ${({theme}) => theme.divCommon.flexColumn}
    height: ${({height, isPageClick}) => isPageClick ? height : '0px'};
    left: 0;
    padding-left: 15%;
    width: 25%;
`;
const MenuText = styled.div`
    transition-duration: 0.5s;
    background-color: #e2dddd;
    height: ${({isMenuClick}) => isMenuClick ? '32px' : '0px'};
    opacity: ${({isMenuClick}) => isMenuClick ? '1' : '0'};
    &{
        ${ props => props.id === props.isClick && `
            color: #5DB2FF;
            font-weight: bolder;
            // padding: 12px 32px;
        `}
    }
    padding-left: 16px;
`;
const PageLink = styled(Link)`
    transition-duration: 0.5s;
    background-color: #e2dddd;
    height: ${({click}) => click === 'true' ? '40px' : '0px'};
    opacity: ${({click}) => click === 'true' ? '1' : '0'};
    padding-left: 16px;
    color: black;
    &{
        ${({title, id}) => id === title && `
            color: #5DB2FF;
            font-weight: bolder;
            // padding: 12px 32px;
        `}
    }
`;

const MenuKategorie = ({ kategorie, setIsClick, isClick, title, page}) => {
    const dispatch = useDispatch();
    const params = useParams();
    const [ menuTitle, setMenuTitle ] = useState(kategorie[0].title) 
    const [ isMenuClick, setIsMenuClick ] = useState(false);
    const [ isPageClick, setIsPageClick ] = useState(false);
    const pageList = [
                        {page:'Technology', path:'/technology/multi-media-process'},
                        {page:'AIㆍ빅데이터', path:'/solution/ai-5g-bigdata/wild-animal-detection'},
                        {page:'5GㆍICT', path:'/solution/ict/mec-router'}];

    useEffect(() => {
        const menu = findMenuTitle('menu');
        const id = findMenuTitle('id');
        setMenuTitle(menu);
        setIsClick(id);
    }, [ params ]) 

    const onClick = (e) => {
        setIsClick(e.target.id);
        setIsMenuClick(false);
        setMenuTitle(document.getElementById(e.target.id).innerText);
    }
    const onClickMenu = () => {
        setIsMenuClick(!isMenuClick)
    }
    const onClickPage = () => {
        setIsPageClick(!isPageClick)
    }


    const findMenuTitle = (type) => {
        for(let i = 0 ; i < kategorie.length; i++){
            if(kategorie[i].id === params.click) {
                switch(type){
                    case 'menu' : 
                        return kategorie[i].title
                    case 'id' :
                        return kategorie[i].id
                } 
            }
        }
    }

    return(
        <Wrapper>
            <KategorieWrapper>
                <MenuBar>
                    <Page id='page' onClick={onClickPage}>
                        {title}
                        <IconWrapper>
                            {isPageClick ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </IconWrapper>
                        <UnderPageBar height={'120px'} isPageClick={isPageClick}>
                            { pageList.map(({page,path},index) => (
                                <PageLink 
                                    id={page}
                                    title={title}
                                    to={path}
                                    click={isPageClick.toString()}
                                    onClick={() => onClickPage()}
                                    key={`UnderPageBar${index}`}
                                >
                                    {page}
                                </PageLink>
                            ))}
                        </UnderPageBar>
                    </Page>
                    <Select id='select' onClick={onClickMenu}>
                        {menuTitle}
                        <IconWrapper>
                            {isMenuClick ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </IconWrapper>
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
                    </Select>
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