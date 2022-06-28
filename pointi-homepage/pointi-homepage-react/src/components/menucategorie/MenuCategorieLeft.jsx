import React, { useState, useEffect}from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import dummyData from 'assets/dummy/menu.json';
import { IoIosMenu } from "react-icons/io";

const Wrapper = styled.div``;
const MenuClick = styled.div`
    position: fixed;
    right: 0;
    margin: 8px;
`;
const LeftMenuWrapper = styled.div`
    display: ${({isClick}) => isClick === false && 'none'};
    position: fixed;
    left:0;
    top:0;
    background-color: #adadde;
    z-index: 10;
    height: 100%;
    padding: 16px;
    overflow: auto;
`;
const CloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 24px;
    :hover {
        cursor: pointer;
    }
`;
const MenuWrapper = styled.div`
    margin: 16px;
    line-height: 24px;
`;
const Title = styled.div`
    ${({index}) => index !== 2 && index !== 3 ? css`
        font-size: 1.5rem;
    `: css`
        font-size: 1.2rem;
        margin-left: 16px;
        margin-top: 4px;
    `};
`;
const Solution = styled.div`
    font-size: 1.7rem;
`;
const LinkWrapperOut = styled.div`
    font-size: 1rem;
    margin-left: 16px;
`;
const LinkWrapperIn = styled(Link)`
    ${({theme}) => theme.divCommon.flexColumn}
    color: black;
    margin-top: ${({index}) => index === 0 && '4px'};
`;

const MenuCategorieLeft = () => {
    // const dropDownData = useSelector(state => state.setDataReducer.menu);
    const dispatch = useDispatch();
    const [ isClick, setIsClick ] = useState(false);

    useEffect(() => {
        if(isClick === true){
            document.getElementById('detail').style.opacity = '0.3';
            document.getElementById('detail').style.pointerEvents = 'none';
            document.getElementById('top').style.opacity = '0.3';
            document.getElementById('top').style.pointerEvents = 'none';
            document.getElementById('footer').style.opacity = '0.3';
            document.getElementById('footer').style.pointerEvents = 'none';
        } else {
            document.getElementById('detail').style.opacity = '1'
            document.getElementById('detail').style.pointerEvents = 'auto';
            document.getElementById('top').style.opacity = '1';
            document.getElementById('top').style.pointerEvents = 'auto';
            document.getElementById('footer').style.opacity = '1';
            document.getElementById('footer').style.pointerEvents = 'auto';
        }
    },[isClick])
    const handleIsClick = () => {
        setIsClick(!isClick);
    }

    const handleLinkClick = (e) => {
        dispatch({
            type: 'SET_CHANGE',
            isChange: e.target.href,
        });
        setIsClick(false);
    }

    return(
        <Wrapper id='test'>
            <MenuClick onClick={handleIsClick}>
                <IoIosMenu size={42}/>
            </MenuClick>
            <LeftMenuWrapper isClick={isClick}>
                <CloseButton onClick={handleIsClick}>X</CloseButton>
                {dummyData.menu.map(({title, list},index) => (
                    <MenuWrapper key={`menu-${index}`}>
                        {index === 2 && <Solution>Solution</Solution>}
                        <Title index={index}>
                            {title}
                            <LinkWrapperOut>
                                {list.map(({title, path},index) => (
                                    <LinkWrapperIn 
                                        to={path} 
                                        index={index} 
                                        key={`link-${index}`}
                                        onClick={handleLinkClick}
                                    >
                                        - {title}
                                    </LinkWrapperIn>
                                ))}
                            </LinkWrapperOut>
                        </Title>
                    </MenuWrapper>
                ))}
            </LeftMenuWrapper>
        </Wrapper>
    )
}

export default MenuCategorieLeft;