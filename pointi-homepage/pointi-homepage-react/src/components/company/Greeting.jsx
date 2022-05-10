import React from 'react';
import styled from 'styled-components';

import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Wrapper = styled.div`
    width: 60%;
    text-align: center;
    margin: 0 auto;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 32px;
`;
const DataWrapper = styled.div`
    display: flex;
    margin-top: 5vh;
`;
const Img = styled.img`
    width: 40vw;
    height: 40vh;
`;
const TextWrapper = styled.div`
    margin-left: 40px;
`;
const Text = styled.div`
    text-align: left;
    color: #636161;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
`;

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

export default Greeting;