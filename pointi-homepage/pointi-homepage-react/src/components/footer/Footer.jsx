import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


import Copyright from './Copyright';
import logo from 'assets/imgs/logo/logo.png';

const Footer = () => {
    const params = useParams();
    const footerData = useSelector(state => state.setDataReducer.footer);
    const device = useSelector(state => state.setDeviceReducer.device);
    
    return (
        (device !== 'Mobile' || params.click === 'contact') &&
        <Wrapper id={'footer'} device={device}>
            <TextArea>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>
                <TextTable>
                    <TextTbody>
                    {footerData.data[device === 'Mobile' && params.click === 'contact' ? 1 : 0].list.map((list,index) => (
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
    margin-top: ${({device}) => device === 'Mobile' ? '32px' : '4px'};
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