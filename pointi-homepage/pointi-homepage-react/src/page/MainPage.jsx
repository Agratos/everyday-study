import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Main from 'components/main/Main';


const MainPage = () => {
    return (
        <Wrapper>
            <Header page={'main'} />
            <Main />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div``;

export default MainPage;