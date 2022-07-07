import React from 'react';
import styled, { css } from 'styled-components';

import KakaoMap from 'containers/kakao/KakaoMap';
import { GiRotaryPhone, GiClick } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const Location = ({data, device}) => {

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
                    <CilckTextMessage>클릭 하시면 길찾기로 이동합니다.</CilckTextMessage>
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
    margin: 0 auto;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-bottom: 32px;
`;
const LocationWrapperOut =styled(Flex)`
    ${({theme}) => theme.divCommon.flexCenter}
    ${({device, theme})=> device === 'Mobile' && theme.divCommon.flexColumn}
    margin-top: 5vh;
`;
const KakaoMapWrapper = styled.div`
    width: 900px;
    height: 50vh;
    ${props => props.device === 'Mobile' && css`
        width: 100%;
        margin-bottom: 32px;
    `}
`;
const LocationWrapperIn = styled.div``;
const TextWrapperOut = styled(Flex)`
    margin: 0 32px 32px 32px;
`;
const TextWrapperIn = styled.div`
    ${({theme}) => theme.divCommon.flexColumnAround}
`;
const Text = styled.div`
    color: #8A8A8A;
    margin-left: 16px;
`;
const Img = styled.img``;
const CilckTextMessage = styled.div``;

export default Location;