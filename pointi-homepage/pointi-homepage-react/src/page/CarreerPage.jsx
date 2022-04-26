import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Carreer from 'components/carreer/Carreer';

const Wrapper = styled.div``;

const CarreerPage = () => {
    return (
        <Wrapper>
            <Header title='Careers' />
            <Carreer />
            <Footer />
        </Wrapper>
    )
}

export default CarreerPage;