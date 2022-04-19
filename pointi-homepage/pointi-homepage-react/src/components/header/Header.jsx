import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderDropDown';
import logo1 from 'assets/imgs/banner/banner.png';
import logo2 from 'assets/imgs/banner/banner_2.png'
import dummyHeaderChnageData from 'assets/dummy/headerChangeData.json';

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
    height: 85vh;
`;
const SliderAreaTextWrapper = styled.div`
    margin-left: 10vw;
    margin-bottom: 20vh;
`;
const SliderAreaText = styled.div`
    color: white;
    font-size: 52px;
    //transition: all 5000ms linear 0s;
    animation: fade in 3s;
`;
const SliderAreaTextButton = styled.button`
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
    margin-top:16px;
    &:hover {
        background: linear-gradient(45deg,#05aae6,#0181f5);
    }
`;

const Header = () => {
    const [dataIndex, setDataIndex] = useState(0);
    const imgData = [logo1,logo2];

    useEffect(() => {
        setTimeout(() =>{
            setDataIndex((dataIndex + 1) % 3)
        }, 5000)
    }, [dataIndex] )

    return (
        <Wrapper logo={imgData[dataIndex%2]}>
            <HeaderTop />
            <HeaderMiddle />
            <SliderArea>
                {dummyHeaderChnageData.data.map((data,index) => (
                    ( data.id === dataIndex && (
                        <SliderAreaTextWrapper key={`slider-area-${index}`}>
                            <SliderAreaText className='text-1'>{data.text1}</SliderAreaText>
                            <SliderAreaText className='text-2'>{data.text2}</SliderAreaText>
                            <SliderAreaTextButton>Our Solutions</SliderAreaTextButton>
                        </SliderAreaTextWrapper>
                    ))   
                ))}
            </SliderArea>
        </Wrapper>
    )
}

export default Header;