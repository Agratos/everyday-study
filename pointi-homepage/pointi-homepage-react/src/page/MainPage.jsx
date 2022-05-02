import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Counter from 'components/counter/Counter';
import Footer from 'components/footer/Footer';
import Main from 'components/main/Main';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Wrapper = styled.div``;

const MainPage = () => {
    ScrollToMoveId();
    return (
        <Wrapper>
            <Header />
            <Main/>
            <Counter />
            <Footer />
        </Wrapper>
    );
};

export default MainPage;