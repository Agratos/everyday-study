import React from 'react';
import styled, { css } from 'styled-components';

import KakaoMap from 'containers/kakao/KakaoMap';
import { GiRotaryPhone, GiClick } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const ContactUs = ({data, device}) => {
    const CheckIcon = (index) => {
        switch(index){
            case 0:
                return <GiRotaryPhone size={24}/>
            case 1:
                return <HiMail size={24} />
            case 2:
                return <MdLocationOn size={24} />
            default:
                return <GiClick size={24} />
        }
    }

    return(
        <Wrapper id={`location`}>
            <Title>오시는 길</Title>
            <LocationWrapperOut device={device}>
                <KakaoMapWrapper device={device}>
                    <ClickTextMessageWrapper>
                        <ClickImage src={require(`assets/imgs/company/${data.list[3].image}`)} />
                        <ClickTextMessage>{data.list[3].text}</ClickTextMessage>
                    </ClickTextMessageWrapper>
                    <KakaoMap />
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
    ${({theme}) => theme.fontCommon.companySubTitle};
`;
const LocationWrapperOut =styled(Flex)`
    ${({theme}) => theme.divCommon.flexCenter}
    ${({device, theme})=> device === 'Mobile' && theme.divCommon.flexColumn}
`;
const KakaoMapWrapper = styled.div`
    width: 1100px;
    height: 50vh;
    margin-bottom: 64px;
    ${props => props.device === 'Mobile' && css`
        width: 100%;
        margin-bottom: 32px;
    `}
`;
const ClickTextMessageWrapper = styled(Flex)`
    align-items: center;
    margin-bottom: 8px;
    margin-left: 0;
`;
const ClickImage = styled.img``;
const ClickTextMessage = styled.div`
    margin-top: 16px;
    margin-left: 8px;
`;


export default ContactUs;