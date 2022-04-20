import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

const Wrapper = styled.div``;

const Company = () => {
    return (
        <Wrapper>
            <Header title='Introduce' />

            <Footer />
        </Wrapper>
    );
};

export default Company;