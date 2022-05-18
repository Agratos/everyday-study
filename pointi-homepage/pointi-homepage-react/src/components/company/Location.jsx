import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import KakaoMap from 'containers/kakao/KakaoMap';

const Flex = styled.div`
    ${({theme}) => theme.divCommon.flex}
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
    margin-top: 5vh;
`;
const LocationWrapperIn =styled.div``;
const TextWrapperOut = styled(Flex)`
    margin:32px;
`;
const TextWrapperIn = styled.div`
    ${({theme}) => theme.divCommon.flexColumnAround}
`;
const Text = styled.div`
    color: #8A8A8A;
    margin-left: 16px;
`;
const Img = styled.img``;


const Location = ({data}) => {
    return(
        <Wrapper id={`location`}>
            <Title>오시는 길</Title>
            <LocationWrapperOut>
                <KakaoMap />
                <LocationWrapperIn>
                    {data.map(({image, text}, index) => (
                        <TextWrapperOut key={`location${index}`}>
                            <Img src={require(`assets/imgs/introduce/${image}`)} />
                            <TextWrapperIn >
                                {text.map((text,index) => (
                                    <Text key={`locationTextWrapper${index}`}>
                                        {text}
                                    </Text>
                                ))}
                            </TextWrapperIn>
                        </TextWrapperOut>
                    ))} 
                </LocationWrapperIn>
            </LocationWrapperOut>
        </Wrapper>
    )
}

export default Location;