import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Solution from 'components/solution/Solution';

const Wrapper = styled.div``;

const ServicesPage = () => {
    return (
        <Wrapper>
            <Header title='PointI Solution' />
            <Solution />
            <Footer />
        </Wrapper>
    );
};

export default ServicesPage;