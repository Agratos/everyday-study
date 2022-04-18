import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Counter from 'components/counter/Counter';
import Footer from 'components/footer/Footer';

const Wrappter = styled.div`
    width: 100vw;
`

const Main = () => {
    return (
        <Wrappter>
            <Header />
            <Counter />
            <Footer />
        </Wrappter>
    );
};

export default Main;