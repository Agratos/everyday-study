import React from 'react';
import styled from 'styled-components';
import Greeting from './Greeting';
import Organization from './Organization';
import PatentBoard from './PatentBoard';
import Relative from './Relative';
import dummyIntroduce from 'assets/dummy/introduce.json';

const Wrapper = styled.div`
        margin: 10vh 10vw;
`;

const Introduce = () => {
    return (
        <Wrapper>
            <Greeting data={dummyIntroduce.ceo} />
            <Organization data={dummyIntroduce.organization} />
            <PatentBoard data={dummyIntroduce.patent} />
            <Relative data={dummyIntroduce.relative} />
        </Wrapper>
    )
}

export default Introduce;