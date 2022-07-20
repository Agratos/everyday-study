import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Copyright from './Copyright';
import logo from 'assets/imgs/logo/logo.png';

const Footer = () => {
    const footerData = useSelector(state => state.setDataReducer.footer);
    const device = useSelector(state => state.setDeviceReducer.device);
    
    return (
        device !== 'Mobile' &&
        <Wrapper id={'footer'} device={device}>
            <TextArea>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>
                <TextTable>
                    <TextTbody>
                    {footerData.data[0].list.map((list,index) => (
                        <TextTr key={`footer-text-wrapper${index}`} index={index}>
                            {index === 0 ? 
                                <TextTd><TextA href={'tel:02-2204-3000'}>{list}</TextA></TextTd> 
                                : index === 1 ? <TextTd><TextA href={'mailto:support@pointi.com'}>{list}</TextA></TextTd> 
                                : <TextTd>{list}</TextTd>
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
`;
const TextTable = styled.table`
    ${({theme}) => theme.divCommon.column};
`;
const TextTbody = styled.tbody`
    font-size: 0.8rem;
`;
const TextTr = styled.tr``;
const TextTd = styled.td``;
const TextA = styled.a`
    color: black;
`;

export default Footer;