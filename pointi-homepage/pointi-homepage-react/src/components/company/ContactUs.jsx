import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import KakaoMap from 'containers/kakao/KakaoMap';

const ContactUs = ({data, device}) => {
    const [ resize, setResize ] = useState(false);

    const resizeHandeler = () => {
        setResize(!resize);
    }

    return(
        <Wrapper id={`location`}>
            <Title>오시는 길</Title>
            <LocationWrapperOut device={device}>
                <KakaoMapWrapper device={device} >
                    <ClickTextMessageWrapper>
                        <ClickImage src={require(`assets/imgs/company/${data.list[3].image}`)} />
                        <ClickTextMessage>{data.list[3].text}</ClickTextMessage>
                    </ClickTextMessageWrapper>
                    <KakaoMapRerenderButton 
                        device={device}
                        onClick={() => resizeHandeler()}
                    >Reset</KakaoMapRerenderButton>
                    <KakaoMap resize={resize}/>
                </KakaoMapWrapper>
            </LocationWrapperOut>
        </Wrapper>
    )
}

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
    margin: 0 2vw;
`
const Wrapper = styled.div`
    ${({theme}) => theme.zIndex.one}
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 0 auto;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;
const LocationWrapperOut =styled(Flex)`
    ${({theme}) => theme.divCommon.flexColumnCenter}
    ${({device, theme})=> device === 'Mobile' && theme.divCommon.flexColumn}
    width: 100%;
`;
const KakaoMapWrapper = styled.div`
    width: inherit;
    height: 50vh;
    margin-bottom: 64px;
    ${props => props.device === 'Mobile' && css`
        width: 100%;
        margin-bottom: 32px;
    `}
`;
const KakaoMapRerenderButton = styled.div`
    background-color: #0d4bf7aa;
    color: #fffffffc;
    width: fit-content;
    padding: 4px 8px;
    border-radius: 16px;
    float: right;
    margin-top: ${({device}) => device === 'Mobile' ? '-28px' : '-32px'};
    :hover {
        cursor: pointer;
    }
`;
const ClickTextMessageWrapper = styled(Flex)`
    align-items: center;
    margin-bottom: 8px;
    margin-left: 0;
`;
const ClickImage = styled.img``;
const ClickTextMessage = styled.div`
    margin-top: 16px;
    margin-left: 4px;
`;


export default ContactUs;