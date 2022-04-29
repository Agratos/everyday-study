import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import KakaoMap from 'containers/kakaomap/KakaoMap';

const Wrapper = styled.div`
    margin-top: 30vh;
    position: relative;
    z-index: 1;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 32px;
    text-align: center;
`;
const LocationWrapperOut =styled.div`
    display: flex;
    margin-top: 5vh;
`;
const LocationWrapperIn =styled.div``;
const TextWrapperOut = styled.div`
    display: flex;
    margin:32px;
`;
const TextWrapperIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const Text = styled.div`
    font-size: 16px;
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