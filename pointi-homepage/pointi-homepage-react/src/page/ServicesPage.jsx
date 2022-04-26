import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Solution from 'components/solution/Solution';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Wrapper = styled.div``;

const ServicesPage = () => {
    ScrollToMoveId();
    return (
        <Wrapper>
            <Header title='PointI Solution' />
            <Solution />
            <Footer />
        </Wrapper>
    );
};

export default ServicesPage;