import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import CounterBanner from 'assets/imgs/counter/counter.png'
import dummyCounter from 'assets/dummy/counter.json';
import * as CounterImg from 'assets/imgs/svg_icon';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background: url(${CounterBanner});
    background-blend-mode:multiply;
    background-color: #567192e8;
    background-size: cover;
    margin-bottom: 30px;
    padding: 120px 0;
    color: white;
    margin: 0;
`;
const DataWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 255px;
    padding: 0 16px;
`;
const DataNumber = styled.div`
    font-size: 48px;
    font-weight: lighter;
    text-align: center;
    margin: 16px;
    width: 248px;
    padding: 0 auto;
`;
const DataText = styled.div`
    font-size: 16px;
`;
const DataImg = styled.img``;
const DattaTail = styled.div`
    display: inline-block;
    font-size: ${props => props.size};
`;

const Counter = () => {
    return(
        <Wrapper>
            {dummyCounter.data.map((data,index) => (
                <DataWrapper key={`counter-data-wrapper-${index}`}>
                    {
                        index === 0 ? <DataImg src={CounterImg.GroupImg} />
                        : (index === 1 ? <DataImg src={CounterImg.CartImg} />
                        : (index === 2 ? <DataImg src={CounterImg.HeartImg} />
                        : <DataImg src={CounterImg.RespectImg} />))
                    }
                    <DataNumber >
                        <CountUp end={data.mount} duration={15} />
                        {
                            index === 0 ? <DattaTail>+</DattaTail>
                            : (index === 1 ? <DattaTail size='0.8em'>호</DattaTail>
                            : (index === 2 ? <DattaTail size='0.8em'>건</DattaTail>
                            : <DattaTail size=''>+</DattaTail>))
                        }
                    </DataNumber>
                    <DataText>{data.title}</DataText>
                </DataWrapper>
            ))}
            {/* <CountUp end={300} /> */}
        </Wrapper>
    );
};

export default Counter;