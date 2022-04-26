import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Wrapper = styled.div``;

const CompanyPage = () => {
    ScrollToMoveId();
    return (
        <Wrapper>
            <Header title='Introduce' />

            <Footer />
        </Wrapper>
    );
};

export default CompanyPage;