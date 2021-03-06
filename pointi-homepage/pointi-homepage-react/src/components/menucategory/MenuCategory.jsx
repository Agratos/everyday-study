import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const MenuCategory = ({ category, setIsClick, isClick, title, page}) => {
    const dispatch = useDispatch();
    const params = useParams();
    const device = useSelector(state => state.setDeviceReducer.device);
    const [ menuTitle, setMenuTitle ] = useState(category[0].title) 
    const [ isMenuClick, setIsMenuClick ] = useState(false);
    const [ isPageClick, setIsPageClick ] = useState(false);
    const pageList = [
                        {page:'Technology', path:'/technology/multi-media-process'},
                        {page:'AIㆍ빅데이터', path:'/solution/ai-bigdata/intelligent-video-analysis-PaaS'},
                        {page:'5GㆍICT', path:'/solution/5g-ict/t-group-call'}];

    useEffect(() => {
        const menu = findMenuTitle('menu');
        const id = findMenuTitle('id');
        setMenuTitle(menu);
        setIsClick(id);
    }, [ params ]) 

    const onClick = (e) => {
        setIsClick(e.target.id);
        setIsMenuClick(false);
        setIsPageClick(false);
        setMenuTitle(document.getElementById(e.target.id).innerText);
    }
    const onClickMenu = () => {
        setIsMenuClick(!isMenuClick)
    }
    const onClickPage = () => {
        setIsPageClick(!isPageClick)
    }

    const findMenuTitle = (type) => {
        for(let i = 0 ; i < category.length; i++){
            if(category[i].id === params.click) {
                switch(type){
                    case 'menu' : 
                        return category[i].title
                    case 'id' :
                        return category[i].id
                } 
            }
        }
    }

    return(
        <Wrapper>
            <CategoryWrapper>
                <MenuBar>
                    <Page id='page' onClick={onClickPage}>
                        {title}
                        <IconWrapper>
                            {isPageClick ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </IconWrapper>
                        <UnderPageBar height={'96px'} isPageClick={isPageClick} device={device}>
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
                        <IconWrapper type={'select'}>
                            {isMenuClick ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </IconWrapper>
                        <UnderMenuBar height={'130px'} isMenuClick={isMenuClick} device={device}>
                            { category.map(({title,id}, index) => (
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
                {/* { category.map(({title,id}, index) => (
                    <Category 
                        key={`menuKategroie${title}`} 
                        id={id}  
                        onClick={(e) => onClick(e)}
                        isClick={isClick}
                    >
                        {title}
                    </Category>
                ))} */}
            </CategoryWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    //width: 900px;
    margin: 0 auto;
    width: 100%;
`;
const CategoryWrapper = styled.div`
    display: flex;
    //margin-top: 32px;
    //border-bottom: 3px solid #3d74a7;
    //line-height: 16px;
    width: 100%;
`;
const MenuBar = styled.div`
    display: flex;
    width: 100%;
    height: 32px;
    //width: fit-content;
    //margin-left: calc((100% - 900px) / 2);
`;
const Page = styled.div`
    border: 1px solid #e2dddd;
    padding: 8px;
    padding-left: 16px;
    font-size: 0.9rem;
    width: 50%;
    &:hover{
        cursor: pointer;
    }
`;
const Select = styled(Page)``;
const IconWrapper = styled.div`
    z-index: 1;
    float: right;
`;
const UnderBar = styled.div`
    ${({theme}) => theme.divCommon.flexColumn}
    position: absolute;
    background-color: #e2dddd;
    line-height: 32px;
    top: 122px;
    ${({device}) => device === 'PC' ? css`
        //width: 450px;
        width: 550px;
        margin-left: calc(50% - 600px);
        margin-left: calc(50% - 700px)
    ` : css`
        width: inherit;
    `}
`;
const UnderMenuBar = styled(UnderBar)`
    height: ${({height, isMenuClick}) => isMenuClick ? height : '0px'};
    pointer-events: ${({isMenuClick}) => isMenuClick ? 'all' : 'none'};
    ${({device}) => device === 'PC' ? css`
        //left: 600px;
        left: 700px;
    ` : css`
        right:0px;
    `}
`;
const UnderPageBar = styled(UnderBar)`
    height: ${({height, isPageClick}) => isPageClick ? height : '0px'};
    pointer-events: ${({isPageClick}) => isPageClick ? 'all' : 'none'};
    ${({device}) => device === 'PC' ? css`
        left: 150px;
    ` : css`
        left:0px;
    `}
`;
const MenuText = styled.div`
    transition-duration: 0.5s;
    background-color: #e2dddd;
    height: ${({isMenuClick}) => isMenuClick ? '32px' : '0px'};
    opacity: ${({isMenuClick}) => isMenuClick ? '1' : '0'};
    &{
        ${ props => props.id === props.isClick && `
            color: #4e95d7;
            font-weight: bolder;
            // padding: 12px 32px;
        `}
    }
    padding-left: 16px;
    &:hover {
        background-color: #d5d8e0
    }
`;
const PageLink = styled(Link)`
    transition-duration: 0.5s;
    background-color: #e2dddd;
    height: ${({click}) => click === 'true' ? '32px' : '0px'};
    opacity: ${({click}) => click === 'true' ? '1' : '0'};
    color: black;
    text-align: left;
    padding-left: 16px;
    
    &{
        ${({title, id}) => id === title && `
            color: #4e95d7;
            font-weight: bolder;
            // padding: 12px 32px;
        `}
    }
    &:hover {
        background-color: #d5d8e0;
    }
`;

export default MenuCategory;