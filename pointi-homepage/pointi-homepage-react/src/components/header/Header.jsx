import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import HeaderDropDown from './HeaderDropDown';
import logo1 from 'assets/imgs/banner/banner.png';
import logo2 from 'assets/imgs/banner/banner_2.png'
import dummyHeaderChnageData from 'assets/dummy/headerChangeData.json';
import { Link, Outlet } from 'react-router-dom';

const Wrapper = styled.div`
    max-height: 800px;
    background: url(${props => props.logo});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
    transition: all 1000ms ease 0s;
    background-blend-mode:multiply;
    background-color: #7794b0d9;
`;
const SliderArea = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: ${props => props.height};
`;
const SliderAreaTextWrapper = styled.div`
    margin-left: 10vw;
    margin-bottom: ${props => props.maringBottom};
`;
const SliderAreaText = styled.div`
    color: white;
    font-size: ${props => props.size || '52px'};
    font-weight: ${props => props.weight};
    //transition: all 5000ms linear 0s;
    animation: fade in 3s;
`;
const SliderAreaTextButton = styled(Link)`
    background: linear-gradient(45deg,#0181f5,#05aae6);
    color: white;
    font-size: 16px;
    border: none;
    width: 152px;
    height: 64px;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
    text-decoration-line: none;
    &:hover {
        background: linear-gradient(45deg,#05aae6,#0181f5);
    }
`;

const Header = ({ title }) => {
    const [dataIndex, setDataIndex] = useState(0);
    const imgData = [logo1,logo2];

    useEffect(() => {
        setTimeout(() =>{
            setDataIndex((dataIndex + 1) % 3)
        }, 5000)
    }, [dataIndex] )

    return (
        <Wrapper logo={imgData[dataIndex%2]}  id="top">
            <HeaderTop />
            <HeaderDropDown />
            { title === undefined ?
                <SliderArea height='85vh'> 
                       {dummyHeaderChnageData.data.map((data,index) => (
                            ( data.id === dataIndex && (
                                <SliderAreaTextWrapper key={`slider-area-${index}`} maringBottom='20vh'>
                                    <SliderAreaText className='text-1'>{data.text1}</SliderAreaText>
                                    <SliderAreaText className='text-2'>{data.text2}</SliderAreaText>
                                    <SliderAreaTextButton to='/service'>Our Solutions</SliderAreaTextButton>
                                </SliderAreaTextWrapper>
                            ))   
                        ))}
                </SliderArea>
            :   <SliderArea height='50vh'>
                    <SliderAreaTextWrapper>
                        <SliderAreaText weight='bolder' size='64px'>{title}</SliderAreaText>
                    </SliderAreaTextWrapper>
                </SliderArea>
            }
            <Outlet />
        </Wrapper>
    )
}

export default Header;