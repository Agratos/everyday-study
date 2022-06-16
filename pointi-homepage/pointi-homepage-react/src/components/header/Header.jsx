import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import HeaderTop from './HeaderTop';
import HeaderDropDown from './HeaderDropDown';
import logo1 from 'assets/imgs/banner/banner.png';
import logo2 from 'assets/imgs/banner/banner_2.png'
import { Link, useParams, useLocation } from 'react-router-dom';
import setChangeReducer from 'modules/change';

const Wrapper = styled.div`
    ${({theme}) => theme.zIndex.three}
    border-left: 1px solid #e2dddd;
    border-right: 1px solid #e2dddd;
    // background-color: none;
    /* ${props => props.page === 'main' &&
        css`
            min-height: 400px;
            height: 49vh;
            //max-height: 600px;
            background: url(${props => props.logo}) no-repeat center;
            background-size: cover;
            background-blend-mode:multiply;
            background-color: #7794b085;
            transition: all 1000ms ease 0s;
        `
    } */
    
`;
const SliderArea = styled.div`
    background: url(${props => props.logo}) no-repeat center;
    background-size: cover;
    background-blend-mode:multiply;
    background-color: #7794b085;
    transition: all 1000ms ease 0s;
    ${props => props.page === 'main' ?
        css`
            height: 40vh;
            //max-height: 500px;
        ` : 
        css`
            ${({theme}) => theme.divCommon.flex}
            align-items: center;
            padding-left: 150px;
            background: linear-gradient(45deg,#83bbef,#78c6e2ab);
            height: 48px;
            font-size: 1.2rem;
            font-weight: 600;
            color: #27292b55;
            //max-height: 500px;
        `
    }
`;
const SliderAreaTextWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    padding: 10vh;
    ${props => props.device === 'Mobile' && css`
        height: 60vh;
        padding: 5vh 2vh;
    `}
`;
const SliderAreaText = styled.div`
    color: #ebe1e1;
    font-size: ${props => props.size || '2rem'}; 
    margin-bottom: 8px;
`;
const SliderAreaTextButton = styled(Link)`
    ${({theme}) => theme.divCommon.flexCenterCenter}
    background: linear-gradient(45deg,#0181f5,#05aae6);
    color: #eae3e3;
    border: none;
    width: 152px;
    height: 64px;
    border-radius: 32px;
    margin-top: 2vh;
    text-decoration-line: none;
    &:hover {
        background: linear-gradient(45deg,#05aae6,#0181f5);
    }
`;
const LocationText = styled.div`
    ${({theme}) => theme.divCommon.flex};
`;
const LocationCurrentText = styled.div`
    color: #27292bab;
`;
const LocationHome = styled(Link)`
    color: #27292b55;
    font-weight: 600;
`;

const Header = ({ page }) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.setDataReducer[page]);
    const isChange = useSelector(state => state.setChangeReducer.isChange);
    const [dataIndex, setDataIndex] = useState(0); // 이미지 화면 변경 카운터
    const [ id, setId ] = useState(useParams().id);
    const [ click, setClick ] = useState(useParams().click);

    const imgData = [logo1,logo2];
    const headerData = useSelector(state => state.setDataReducer.header);
    const device = useSelector(state => state.setDeviceReducer.device);
    
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

    useEffect(() => {
        setTimeout(() =>{
            setDataIndex((dataIndex + 1) % 3)
        }, 5000)
    }, [dataIndex] )

    const ChangeFirstToUpper = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    }
    
    return (
        page === 'main' ? (
        <Wrapper id={'top'} device={device}>
            {/* <HeaderTop /> */}
            <HeaderDropDown  page={page} device={device}/>
            {/* <HeaderDropDown scrollMenu={true} /> */}
            <SliderArea logo={imgData[dataIndex%2]} page={page}> 
                    {headerData.data.map(({id, text1, text2},index) => (
                        ( id === dataIndex && (
                            <SliderAreaTextWrapper key={`slider-area-${index}`} device={device}>
                                {/* { device !== 'Mobile' && 
                                <div>
                                    <SliderAreaText className='text-1'>{text1}</SliderAreaText>
                                    <SliderAreaText className='text-2'>{text2}</SliderAreaText>
                                    <SliderAreaTextButton to='/solution/ai-5g-bigdata/wild-animal-detection'>Our Solutions</SliderAreaTextButton>
                                </div>}
                                <SliderAreaText className='text-1'>{text1}</SliderAreaText>
                                <SliderAreaText className='text-2'>{text2}</SliderAreaText>
                                <SliderAreaTextButton to='/solution/ai-5g-bigdata/wild-animal-detection'>Our Solutions</SliderAreaTextButton> */}
                            </SliderAreaTextWrapper>
                        ))   
                    ))}
            </SliderArea>
        </Wrapper>
    ) : (
        <Wrapper id={'top'}>
            <HeaderDropDown page={page} device={device} />
            <SliderArea page={page}> 
                { page === 'solution' &&
                    <LocationText>
                        <LocationHome to={'/'}>
                            Home
                        </LocationHome>
                        {`\u00A0\u00A0>\u00A0\u00A0${ChangeFirstToUpper(page)}\u00A0\u00A0>\u00A0\u00A0${data[id].title}\u00A0\u00A0>\u00A0\u00A0`}
                        <LocationCurrentText>
                            {data[id][click].title}
                        </LocationCurrentText>
                    </LocationText>
                } 
                { page === 'technology' &&
                    <LocationText>
                        <LocationHome to={'/'}>
                            Home
                        </LocationHome>
                        {`\u00A0\u00A0>\u00A0\u00A0${ChangeFirstToUpper(page)}\u00A0\u00A0>\u00A0\u00A0`}
                        <LocationCurrentText>
                            {data[click].title}
                        </LocationCurrentText>
                    </LocationText>
                }
            </SliderArea>
        </Wrapper>
    ))
}

export default Header;