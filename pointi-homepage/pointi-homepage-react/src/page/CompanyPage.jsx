import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Company from 'components/company/Company';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Wrapper = styled.div``;

const CompanyPage = () => {
    ScrollToMoveId();
    
    return (
        <Wrapper id='introduce-page-wrapper'>
            <Header title='Introduce' />
            <Company />
            <Footer />
        </Wrapper>
    );
};

export default CompanyPage;