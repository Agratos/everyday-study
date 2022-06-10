import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import footerData from 'assets/dummy/footer.json';
import Copyright from './Copyright';
import logo from 'assets/imgs/custom/logo.png';
import mail from 'assets/imgs/footer/mail.png';
import phone1 from 'assets/imgs/footer/phone1.png';
import phone2 from 'assets/imgs/footer/phone2.png';



// const Wrapper = styled.div`   
//      margin: 0 80px;
// `;
// const BottomNaviWrapper = styled.div`
//     padding: 145px 0 129px 0;
//     display: flex;
    
// `;
// const LeftPointiInfo = styled.div`
//     //width: 320px;
//     //padding: 0 15px;
//     display: flex;
//     justify-content: center;
// `;
// const LogoImg = styled.img`
//     /* margin-bottom: 40px;    
//     &:hover {
//         cursor: pointer;
//     } */
// `;
// const LeftPointiInfoText = styled.div`
//     color: #919191;
//     margin: 8px 0;
//     font-weight: normal;
//     font-size: 13px;
// `;
// const LeftPointiInfoTextImg = styled.img`
//     position: relative;
//     bottom: 0;
//     height: ${ props => props.size};
//     margin-right:2px;
// `;
// const RightPointWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     width: 68vw;
// `;
// const RightPointiMenu = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 160px;
//     min-height: 5vh;
//     padding: 0 15px;
// `;
// const RightPointMenuText = styled.div`
//     font-size: ${props => props.size};
//     font-weight: ${props => props.weight};
//     margin-bottom: ${props => props.margin};;
//     padding: ${props => props.padding} 0;
//     color: ${props => props.color || '#919191'};
// `;
// const RightPointMenuButton = styled(Link)`
//     padding: 8px 0;
//     font-weight: normal;
//     color: #919191;
//     text-decoration: none;
//     &:hover {
//         cursor: pointer;
//         color: #a3cbf6;
//     }
// `;

const Wrapper = styled.div`
    height: 8vh;
    padding-top: 24px;
    padding-bottom: 16px;
    background-color: #BDD7EE;
`;
const LogoWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter};
`;
const Logo = styled.img`
    margin-right: 16px;
    width: 120px;
    height: 48px;
`;
const TextArea = styled.div`
    ${({theme}) => theme.divCommon.flexCenter};
    margin-left: 16px;
`;
const TextWrapperOut = styled.div`
    ${({theme}) => theme.divCommon.column};
`;
const TextWrapper = styled.div`
    font-size: 0.8rem;
`;
const GoToTheMapButton = styled(Link)`
    ${({theme}) => theme.divCommon.flexCenter};
    background-color: #F8CBAD;
    color: #242323d7;
    width: fit-content;
    padding: 8px 16px;
    position: absolute;
    left: calc(50% + 320px);
    margin-top: -24px;
    font-size: 0.9rem;
    &:hover {
        cursor: pointer;
    }
`;

const Footer = () => {
    //const footerData = useSelector(state => state.setDataReducer.footer);
    const device = useSelector(state => state.setDeviceReducer.device);

    return (
        device !== 'Mobile' &&
        <Wrapper device={device}>
            <GoToTheMapButton to={'/company/location'}>
                오시는 길
            </GoToTheMapButton>
            <TextArea>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>
                <TextWrapperOut>
                    {footerData.data[0].list.map((list,index) => (
                        <TextWrapper key={`footer-text-wrapper${index}`}>
                            {list}
                        </TextWrapper>
                    ))}
                </TextWrapperOut>
            </TextArea>
            <Copyright />

            {/* <BottomNaviWrapper>
                <LeftPointiInfo>
                    <LogoImg src={logo}/>
                    {footerData.data[0].list.map( (list,index) => (
                        <LeftPointiInfoText key={`footer-left-info-${index}`}>
                            {index === 0 && <LeftPointiInfoTextImg src={mail} size='10px'/>}
                            {index === 1 && <LeftPointiInfoTextImg src={phone1} />}
                            {index === 2 && <LeftPointiInfoTextImg src={phone2} />}
                            {list}
                        </LeftPointiInfoText>
                    ))}
                </LeftPointiInfo>
                <RightPointWrapper>
                    {footerData.data.map((data,index) => (
                        index > 0 && 
                            <RightPointiMenu key={`footer-right-menu-${index}`}>
                                {data.list.map(({path, text},index) => (
                                    index === 0 ?
                                        <RightPointMenuText 
                                            size='20px' 
                                            weight='bolder' 
                                            margin='32px' 
                                            color='black'
                                            key={`footer-right-menu-text-${index}`}>
                                            {text}
                                        </RightPointMenuText>
                                        : <RightPointMenuButton padding='12px' key={`footer-right-menu-button-${index}`} to={path}>
                                            {text}
                                        </RightPointMenuButton>
                                ))}
                            </RightPointiMenu>
                    ))}
                </RightPointWrapper>
            </BottomNaviWrapper>
            <Copyright /> */}
        </Wrapper>
    )
}

export default Footer;