import React from 'react';
import styled from 'styled-components';

import Greeting from './Greeting';
import Organization from './Organization';
import PatentBoard from './PatentBoard';
import Relative from './Relative';
import History from './History';
import Location from './Location';


import dummyIntroduce from 'assets/dummy/introduce.json';

const Wrapper = styled.div`
        margin: 10vh 10vw;
`;

const Introduce = () => {
    return (
        <Wrapper id={`introduce`}>
            <Greeting data={dummyIntroduce.ceo} />
            <History data={dummyIntroduce.history} kategorie={dummyIntroduce.kategorie}/>
            <Organization data={dummyIntroduce.organization} />
            <PatentBoard data={dummyIntroduce.patent} />
            <Relative data={dummyIntroduce.relative} />
            <Location data={dummyIntroduce.location} />
        </Wrapper>
    )
}

export default Introduce;