import React, { useState }from 'react';
import styled from 'styled-components';
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
    //background-repeat: no-repeat;
    margin-bottom: 30px;
    padding: 120px 0;
    color: white;
`;
const DataWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
`;
const DataNumber = styled.div`
    font-size: 48px;
    font-weight: lighter;
`;
const DataText = styled.div``;
const DataImg = styled.div``;

const Counter = () => {
    const [number, setNumber] = useState(0);

    const CounterAnimation = (end, start = 0) => {
        console.log('작동중');
        while(start <= end){
            console.log('작동중');
            start += 1;
            setNumber(start);
        }
    }

    return(
        <Wrapper>
            {dummyCounter.data.map((data,index) => (
                <DataWrapper key={`counter-data-wrapper-${index}`}>
                    <DataImg />
                    <DataNumber>
                        <DataText CounterAnimation={(data) => CounterAnimation(10)}>{number}</DataText>
                    </DataNumber>
                    <DataText>{data.title}</DataText>
                </DataWrapper>
            ))}
        </Wrapper>
    );
};

export default Counter;