import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import footerData from 'assets/dummy/footer.json';
import Copyright from './Copyright';
import logo from 'assets/imgs/logo/logo.png';

const Footer = () => {
    const footerData = useSelector(state => state.setDataReducer.footer);
    const device = useSelector(state => state.setDeviceReducer.device);

    return (
        device !== 'Mobile' &&
        <Wrapper id={'footer'} device={device}>
            {device === 'PC' && 
                <GoToTheMapButton to={'/company/location'}>
                    오시는 길
                </GoToTheMapButton>
            }
            <TextArea>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>
                <TextTable>
                    <TextTbody>
                    {footerData.data[0].list.map((list,index) => (
                        <TextTr key={`footer-text-wrapper${index}`} index={index}>
                            {index !== 1 ? 
                                <TextTd>{list}</TextTd> :
                                <TextTd><TextA href={'mailto:support@pointi.com'}>{list}</TextA></TextTd> 
                            }  
                        </TextTr>
                    ))}
                    </TextTbody>
                </TextTable>
            </TextArea>
            <Copyright />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter};
    height: 64px;
    padding-top: 24px;
    padding-bottom: 16px;
    border: 1px solid #e0e1e27a;
    //background-color: #BDD7EE;
`;
const LogoWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter};
`;
const Logo = styled.img`
    margin-right: 16px;
    width: 113px;
    height: 40px;
`;
const TextArea = styled.div`
    ${({theme}) => theme.divCommon.flex};
    //margin-left: 16px;
`;
const TextTable = styled.table`
    ${({theme}) => theme.divCommon.column};
`;
const TextTbody = styled.tbody`
    font-size: 0.8rem;
    /* font-size: ${({index}) => index === 1 && '0.9rem'};
    margin-top: ${({index}) => index === 2 && '2px'}; */
`;
const TextTr = styled.tr``;
const TextTd = styled.td``;
const TextA = styled.a`
    color: black;
`;
const GoToTheMapButton = styled(Link)`
    ${({theme}) => theme.divCommon.flexCenter};
    background-color: #F8CBAD;
    color: #242323d7;
    width: fit-content;
    padding: 8px 16px;
    position: absolute;
    left: calc(50% + 320px);
    margin-top: -80px;
    font-size: 0.9rem;
    &:hover {
        cursor: pointer;
    }
`;

export default Footer;