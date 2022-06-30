import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Solution from 'components/solution/Solution';

const SolutionPage = () => {
    return (
        <Wrapper>
            <Header page={'solution'} />
            <Solution />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div``;

export default SolutionPage;