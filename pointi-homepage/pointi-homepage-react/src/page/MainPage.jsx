import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Counter from 'components/counter/Counter';
import Footer from 'components/footer/Footer';
import Main from 'components/main/Main';

const Wrapper = styled.div``;

const MainPage = () => {
    return (
        <Wrapper>
            <Header page={'main'} />
            <Main />
            {/* <Counter /> */}
            <Footer />
        </Wrapper>
    );
};

export default MainPage;