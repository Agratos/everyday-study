import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';

const Wrappter = styled.div`
    width: 100vw;
`

const Main = () => {
    return (
        <Wrappter>
            <Header />
        </Wrappter>
    );
};

export default Main;