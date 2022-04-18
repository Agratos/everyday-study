import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import CounterBanner from 'assets/imgs/counter/counter.png'
import dummyCounter from 'assets/dummy/counter.json';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background: url(${CounterBanner});
    background-blend-mode:multiply;
    background-color: #588bb29b;
    background-size: cover;
    background-position: center center;
    margin-bottom: 30px;
    padding: 120px 0;
    color: white;
`;
const DataWrapper = styled.div`
    display: inline-block;
    width: 255px;
    align-items: center;
    padding: 0 16px;
    
`;
const DataNumber = styled.div`
    font-size: 48px;
    font-weight: lighter;
    text-align: right;
    box-sizing: border-box;
`;
const DataText = styled.div`
    text-align: center;
`;
const DataImg = styled.div``;
const DattaTail = styled.div`
    display: inline-block;
    font-size: ${props => props.size};
`;

const Counter = () => {
    return(
        <Wrapper>
            {dummyCounter.data.map((data,index) => (
                <DataWrapper key={`counter-data-wrapper-${index}`}>
                    <DataImg />
                    <DataNumber >
                        <CountUp end={data.mount} duration={15} />
                        {
                            index === 0 ? <DattaTail>+</DattaTail>
                            : (index === 1 ? <DattaTail size='0.8em'>호</DattaTail>
                            : (index === 2 ? <DattaTail size='0.8em'>건</DattaTail>
                            : <DattaTail size='32px'>+</DattaTail>
                            ))
                        }
                    </DataNumber>
                    <DataText>{data.title}</DataText>
                </DataWrapper>
            ))}
        </Wrapper>
    );
};

export default Counter;