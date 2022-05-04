import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import Greeting from './Greeting';
import Organization from './Organization';
import PatentBoard from './PatentBoard';
import Relative from './Relative';
import History from './History';
import Location from './Location';

const Wrapper = styled.div`
    margin: 10vh 10vw;
    align-items: center;
`;

const Introduce = () => {
    const introduceData = useSelector(state => state.setDataReducer.introduce);

    return (
        <Wrapper id={`introduce`}>
            <Greeting data={introduceData.ceo} />
            <History data={introduceData.history} kategorie={introduceData.kategorie}/>
            <Organization data={introduceData.organization} />
            <PatentBoard data={introduceData.patent} />
            <Relative data={introduceData.relative} />
            <Location data={introduceData.location} />
        </Wrapper>
    )
}

export default Introduce;