import React from 'react';
import styled from 'styled-components';

import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Greeting = ({data}) => {
    //ScrollToMoveId();
    return (
        <Wrapper id={`greeting`}>
            <Title>{data.title}</Title>
            <DataWrapper>
                {/* <Img src={require(`assets/imgs/introduce/${data.image}`)} /> */}
                <TextWrapper>
                    {data.text.map((text,index) => (
                        <Text key={`greetingText${index}`}>{text}</Text>
                    ))}
                    <Text weight={`bolder`} size={'24px'}>{data.end}</Text>
                </TextWrapper>
            </DataWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 80%;
    text-align: center;
    margin: 0 auto;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-top: 32px;
`;
const DataWrapper = styled.div`
    ${({theme}) => theme.divCommon.flex}
    margin-top: 16px;
`;
const TextWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;
const Text = styled.div`
    text-align: left;
    color: #636161;
    line-height: 24px;
    margin-bottom: 16px;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
`;


export default Greeting;