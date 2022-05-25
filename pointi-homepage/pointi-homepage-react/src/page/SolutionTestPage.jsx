import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Test from 'components/solution/Test';
import Footer from 'components/footer/Footer';


const Wrapper = styled.div``;

const SolutionTestPage = () => {
    return (
        <Wrapper>
            <Header />
            <Test />
            <Footer />
        </Wrapper>
    );
};

export default SolutionTestPage;