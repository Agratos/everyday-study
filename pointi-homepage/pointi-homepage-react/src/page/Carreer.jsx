import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import CarreerSubject from 'components/carreer/CarreerSubject';

const Wrapper = styled.div``;

const Carreer = () => {
    return (
        <Wrapper>
            <Header title='Careers' />
            <CarreerSubject />
            <Footer />
        </Wrapper>
    )
}

export default Carreer;