import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import HeaderTop from './HeaderTop';
import HeaderDropDown from './HeaderDropDown';
import logo1 from 'assets/imgs/banner/banner.png';
import logo2 from 'assets/imgs/banner/banner_2.png'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    max-height: 440px;
    background: url(${props => props.logo});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode:multiply;
    background-color: #7794b0d9;
    position: relative;
    opacity: 0.9;
    transition: all 1000ms ease 0s;
    z-index: 2;
`;
const SliderArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;
`;
const SliderAreaTextWrapper = styled.div`
    margin-left: 5vw;
    margin-bottom: ${props => props.maringBottom};
`;
const SliderAreaText = styled.div`
    color: white;
    font-size: ${props => props.size || '2rem'};
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

const Header = ({ page }) => {
    const [dataIndex, setDataIndex] = useState(0);
    const imgData = [logo1,logo2];
    const headerData = useSelector(state => state.setDataReducer.header);

    useEffect(() => {
        setTimeout(() =>{
            setDataIndex((dataIndex + 1) % 3)
        }, 5000)
    }, [dataIndex] )

    return (
        <Wrapper logo={imgData[dataIndex%2]}  id="top">
            <HeaderTop />
            <HeaderDropDown />
            {/* <HeaderDropDown scrollMenu={true} /> */}
            { page === 'main' &&
                <SliderArea> 
                       {headerData.data.map(({id, text1, text2},index) => (
                            ( id === dataIndex && (
                                <SliderAreaTextWrapper key={`slider-area-${index}`} maringBottom='20vh'>
                                    <SliderAreaText className='text-1'>{text1}</SliderAreaText>
                                    <SliderAreaText className='text-2'>{text2}</SliderAreaText>
                                    <SliderAreaTextButton to='/solution'>Our Solutions</SliderAreaTextButton>
                                </SliderAreaTextWrapper>
                            ))   
                        ))}
                </SliderArea>
            }
        </Wrapper>
    )
}

export default Header;