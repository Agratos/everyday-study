import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Solution from 'components/solution/Solution';


const Wrapper = styled.div``;

const SolutionPage = () => {
    return (
        <Wrapper>
            <Header />
            <Solution />
            <Footer />
        </Wrapper>
    );
};

export default SolutionPage;