import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer'
import Technology from 'components/technology/Technology';

const Wrapper = styled.div``;

const TechnologyPage = () => {
    return (
        <Wrapper>
            <Header />
            <Technology />
            <Footer />
        </Wrapper>
    )
}

export default TechnologyPage;