import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Counter from 'components/counter/Counter';
import Footer from 'components/footer/Footer';
import MainSubject from 'components/main/MainSubject';

const Wrapper = styled.div``;

const Main = () => {
    return (
        <Wrapper>
            <Header />
            <MainSubject/>
            <Counter />
            <Footer />
        </Wrapper>
    );
};

export default Main;