import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer'
import Technology from 'components/technology/Technology';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Wrapper = styled.div``;

const TechnologyPage = () => {
    ScrollToMoveId();
    return (
        <Wrapper>
            <Header title='Technology' />
            <Technology />
            <Footer />
        </Wrapper>
    )
}

export default TechnologyPage;