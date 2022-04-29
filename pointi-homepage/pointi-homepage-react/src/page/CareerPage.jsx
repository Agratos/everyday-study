import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Career from 'components/career/Career';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Wrapper = styled.div``;

const CareerPage = () => {
    ScrollToMoveId();
    return (
        <Wrapper>
            <Header title='Careers' />
            <Career />
            <Footer />
        </Wrapper>
    )
}

export default CareerPage;