import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import SolutionSubject from 'components/solution/SolutionSubject';

const Wrapper = styled.div``;

const Services = () => {
    return (
        <Wrapper>
            <Header title='PointI Solution' />
            <SolutionSubject />
            <Footer />
        </Wrapper>
    );
};

export default Services;