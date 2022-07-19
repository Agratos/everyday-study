import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import HeaderDropDown from './HeaderDropDown';
import banner from 'assets/imgs/header/banner.jpg';
import { Link, useParams, useLocation } from 'react-router-dom';

const Header = ({ page }) => {
    const dispatch = useDispatch();
    const device = useSelector(state => state.setDeviceReducer.device);
    const data = useSelector(state => state.setDataReducer[page]);
    const isChange = useSelector(state => state.setChangeReducer.isChange);

    const [ id, setId ] = useState(useParams().id);
    const [ click, setClick ] = useState(useParams().click);

    useEffect(() => {
        dispatch({
            type: 'SET_CHANGE',
            isChange: window.location.pathname,
        })
    })

    useEffect(() => {
        const url = window.location.pathname.split('/');
        if(url.length > 3){
            setId(url[2])
            setClick(url[3])
        } else {
            setClick(url[2])
        }
    },[ isChange ])

    const ChangeFirstToUpper = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        page === 'main' ? (
        <Wrapper id={'top'} device={device}>
            <HeaderDropDown  page={page} device={device}/>
            <SliderArea logo={banner} page={page} />
        </Wrapper>
    ) : (
        <Wrapper id={'top'}>
            <HeaderDropDown page={page} device={device} />
            <SliderArea page={page} device={device}> 
                { page === 'solution' &&
                    <LocationText device={device}>
                        <LocationHome to={'/'}>
                            Home
                        </LocationHome>
                        <LocationMiddle>
                            {`\u00A0\u00A0>\u00A0\u00A0${ChangeFirstToUpper(page)}\u00A0\u00A0>\u00A0\u00A0${data[id].title}\u00A0\u00A0>\u00A0\u00A0`}
                        </LocationMiddle>
                        <LocationCurrentText>
                            {data[id][click].title}
                        </LocationCurrentText>
                    </LocationText>
                } 
                { page !== 'solution' &&
                    <LocationText device={device}>
                        <LocationHome to={'/'}>
                            Home
                        </LocationHome>
                        <LocationMiddle>
                            {`\u00A0\u00A0>\u00A0\u00A0${ChangeFirstToUpper(page)}\u00A0\u00A0>\u00A0\u00A0`}
                        </LocationMiddle>
                        <LocationCurrentText>
                            {data[click].title}
                        </LocationCurrentText>
                    </LocationText>
                }
            </SliderArea>
        </Wrapper>
    ))
}

const Wrapper = styled.div`
    ${({theme}) => theme.zIndex.three}  
`;
const SliderArea = styled.div`
    background-color: #0d4bf7aa;
    transition: all 1000ms ease 0s;
    ${props => props.page === 'main' ?
        css`
            background: url(${props => props.logo}) no-repeat center;
            background-size: cover;
            height: 350px;
        ` : 
        css`
            ${({theme}) => theme.divCommon.flex}
            width: calc(100% - 16px);
            align-items: center;
            padding-left: 16px;
            height: ${({device}) => device === 'Mobile' ? '48px' : '48px'};
            font-size: 0.95rem;
            font-weight: 600;
            color: #ffffffc2;
        `
    }
`;
const LocationText = styled.div`
    width: 100%;
    cursor: default;
`;
const LocationCurrentText = styled.div`
    color: #fffffffc;
    word-break: keep-all;
`;
const LocationHome = styled(Link)`
    width: fit-content;
    color: #ffffffc2;
    font-weight: 800;
    float: left;
`;
const LocationMiddle = styled.div`
    float: left;
`;

export default Header;